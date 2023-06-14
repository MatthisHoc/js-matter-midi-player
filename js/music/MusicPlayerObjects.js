var Bodies = Matter.Bodies;

class PhysicsObject
{
    #rigidBody;

    fillColor = "";
    hasOutline = true;
    outlineColor = "";
    drawOffset = {x: 0, y: 0};

    constructor(rigidBody, options = null)
    {
        this.#rigidBody = rigidBody;

        if (options == null) return;

        // There surely is a better way to do this
        if (options.fillColor !== undefined)
        {
            this.fillColor = options.fillColor;
        }
        if (options.hasOutline !== undefined)
        {
            this.hasOutline = options.hasOutline;
        }
        if (options.outlineColor !== undefined)
        {
            this.outlineColor = options.outlineColor;
        }
        if (options.drawOffset !== undefined)
        {
            if (options.drawOffset.x !== undefined && options.drawOffset.y !== undefined)
            {
                this.drawOffset = options.drawOffset;
            }
        }
    }

    getRigidBody()
    {
        return this.#rigidBody;
    }

    destroy()
    {
        Physics.get().remove(this);
    }
}

/**
 * A static PhysicsObject that holds a Note and plays it whenever it collides with a Ball
 */
class MusicTile extends PhysicsObject
{
    static NUM_TILES = 15;
    static TILE_SPACING = 5;
    static height = 10;
    static defaultColor = [120, 1, 14];

    note;

    constructor(index, noteLoader)
    {
        // Compute rectangle width based on the number of tile and their spacing
        const tileWidth = (width / MusicTile.NUM_TILES) - MusicTile.TILE_SPACING - MusicTile.TILE_SPACING / MusicTile.NUM_TILES;
        // Compute x position based on the provided index
        const x = tileWidth * index + MusicTile.TILE_SPACING * (index + 1) + tileWidth * 0.5;
        // Hard-coded Y value that places the tile at 90% on the bottom of the canvas
        const y = height * 0.9;
        
        var options = {
            fillColor: MusicTile.defaultColor,
            hasOutline: true,
            outlineColor: "#4e4f4d",
            isStatic: true,
        }

        super(Bodies.rectangle(x, y, tileWidth, MusicTile.height, options), options);

        // Add an event listener so we know when to play a sound
        Physics.get().listenToCollisionEvent(this, this.collisionOccured);

        // Attribute a note to this tile based on it's index
        this.note = noteLoader.getNote(index);
    }

    collisionOccured(otherPhysObject)
    {
        // Make sure we are hit by a ball and signal it has hit a MusicTile
        if (otherPhysObject && otherPhysObject.constructor.name === "Ball")
        {
            this.note.play(otherPhysObject.noteVelocity);
            otherPhysObject.hitMusicTile();

            // play a small animation to make the tile react to the hit
            new Animator(
                {y: 0, h: MusicTile.defaultColor[0], s: MusicTile.defaultColor[1], l: MusicTile.defaultColor[2] },
                {y: 5, h: otherPhysObject.outlineColor[0], s: otherPhysObject.outlineColor[1], l: otherPhysObject.outlineColor[2] },
                200,
                (updated) => { 
                    this.drawOffset.y = updated.y;
                    this.fillColor = [updated.h, updated.s, updated.l];
                 }, 
                 (end) => { 
                    this.drawOffset.y = 0;
                    this.fillColor = [end.h, end.s, end.l];
                 }, 'boomerang');
        }
    }
}

/**
 * The PhysicsObject we drop on MusicTiles. It contains velocity information to determine how strongly it will hit the tiles
 * A Ball could really be any PhysicsObject as the MusicTile use collision detection to play sounds
*/
class Ball extends PhysicsObject
{
    noteVelocity;

    constructor(x, y, noteVelocity, color)
    {
        // Calculate the ball's radius based on the passed noteVelocity
        // Larger ball = bigger note velocity, smaller ball = smaller note velocity
        // Those values have been selected because they fit well visually
        noteVelocity = Math.min(Math.max(noteVelocity, 0), 1);
        const minSize = 1, maxSize = 5;
        const a = maxSize - minSize;

        // Determine radius with a simple linear function
        var radius = a * noteVelocity + minSize;
        
        var options = {
            fillColor: [color[0], color[1], color[2], 1],
            hasOutline: true,
            outlineColor: [color[0], 73, 81, 1],
            restitution: 1,
        }

        super(new Bodies.circle(x, y, radius, options), options);

        this.noteVelocity = noteVelocity;
    }

    // Triggered when this ball hits a MusicTile
    hitMusicTile()
    {
        // Destroy ball
        this.getRigidBody().collisionFilter = {group: 1, category: 2, /*mask: 0*/};

        // Fade out ball when it hits a tile and destroy it
        new Animator({opacity: 1}, {opacity: 0}, 1000, (updated) => {
            this.fillColor[3] = updated.opacity;
            this.outlineColor[3] = updated.opacity;
        },
        () => {
            this.destroy();
        });
    }
}
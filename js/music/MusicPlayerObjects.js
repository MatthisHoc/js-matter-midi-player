var Sleeping = Matter.Sleeping;

/**
 * A static PhysicsObject that holds a Note and plays it whenever it collides with a Ball
 */
class MusicTile extends Rectangle
{
    static NUM_TILES = 15;
    static TILE_SPACING = 5;
    static height = 10;
    static options = {
        fillColor: 100,
        hasOutline: true,
        outlineColor: 200,
        isStatic: true,
    }

    note;

    constructor(index, noteLoader)
    {
        // Compute rectangle width based on the number of tile and their spacing
        const tileWidth = (width / MusicTile.NUM_TILES) - MusicTile.TILE_SPACING - MusicTile.TILE_SPACING / MusicTile.NUM_TILES;
        // Compute x position based on the provided index
        const x = tileWidth * index + MusicTile.TILE_SPACING * (index + 1) + tileWidth * 0.5;
        // Hard-coded Y value that places the tile at 90% on the bottom of the canvas
        const y = height * 0.9;

        super(x, y, tileWidth, MusicTile.height, MusicTile.options)

        // Add an event listener so we know when to play a sound
        Physics.get().listenToCollisionEvent(this, this.collisionOccured);

        // Attribute a note to this tile based on it's index
        this.note = noteLoader.getNote(index);
    }

    collisionOccured(thisPhysObject, otherPhysObject)
    {
        // Make sure we are hit by a ball and signal it has hit a MusicTile
        if (otherPhysObject.constructor.name === "Ball")
        {
            thisPhysObject.note.play(otherPhysObject.noteVelocity);
            otherPhysObject.hitMusicTile();
        }
    }
}

/**
 * The PhysicsObject we drop on MusicTiles. It contains velocity information to determine how strongly it will hit the tiles
 * A Ball could really be any PhysicsObject as the MusicTile use collision detection to play sounds
*/
class Ball extends Circle
{
    static options = {
        fillColor: "#4287f5",
        hasOutline: true,
        outlineColor: 255,
        restitution: 0.9,
    }

    noteVelocity;

    constructor(x, y, noteVelocity)
    {
        // Calculate the ball's radius based on the passed noteVelocity
        // Larger ball = bigger note velocity, smaller ball = smaller note velocity
        // Those values have been selected because they fit well visually
        noteVelocity = Math.min(Math.max(noteVelocity, 0), 1);
        const minSize = 1, maxSize = 5;
        const a = maxSize - minSize;

        // Determine radius with a simple linear function
        var radius = a * noteVelocity + minSize;
        
        super(x, y, radius, Ball.options);

        this.noteVelocity = noteVelocity;
    }

    // Triggered when this ball hits a MusicTile
    hitMusicTile()
    {
        // Destroy ball
        this.fillColor = "#32a852";
        this.getRigidBody().collisionFilter = {group: -1, category: 2, mask: 0}
        Sleeping.set(this.getRigidBody(), true);
        this.destroy();
    }
}
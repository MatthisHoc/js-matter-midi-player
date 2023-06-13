var Sleeping = Matter.Sleeping;

// Loads all audio in memory from the noteLabels array and create the Note objects associated
class NoteLoader
{
    static noteLabels = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"];
    static #notes = [];

    static loadNotes()
    {
        for(var i = 0; i < NoteLoader.noteLabels.length; ++i)
        {
            NoteLoader.#notes.push(
                new Note( new Audio(`../glockenspiel-audio/${NoteLoader.noteLabels[i]}.wav`) )
                );
        }
    }

    static getNote(index)
    {
        return NoteLoader.#notes[index];
    }
}

// Audio file wrapper that avoids having to manipulate audio files directly
class Note
{
    #audio;

    constructor(audio)
    {
        this.#audio = audio;
    }

    // We need this custom play function to restart the note if it's hit again while already playing
    play(force)
    {
        if (!this.#audio.paused)
        {
            this.#audio.currentTime = 0;
        }
        else
        {
            this.#audio.play();
        }

        if (force !== undefined)
        {
            force = Math.min(Math.max(force, 0), 1); // Clamp just in case ...
            this.#audio.volume = force;
        }
    }
}

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

    constructor(index)
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
        this.note = NoteLoader.getNote(index);
    }

    collisionOccured(thisPhysObject, otherPhysObject)
    {
        // Make sure we are hit by a ball and signal it has hit a MusicTile
        if (otherPhysObject.constructor.name === "Ball")
        {
            // Calculate hit force that will determine the volume at which we play the note
            var ballRb = otherPhysObject.getRigidBody();
            var speed = Math.abs(ballRb.velocity.y);
            var mass = ballRb.mass;

            // The goal is not to be exact in the calculations but have both the speed of the ball and it's mass
            // have an influence over how loud the note is played
            var force = mass * speed;
            
            // Value chosen arbitrarly after testing. A good number is between [~2 - ~7]
            // Smaller value means lighter/slower ball will hit louder, bigger value means they'll hit softer
            const fullVolumeForce = 7;
            force /= fullVolumeForce;

            thisPhysObject.note.play(force);
            otherPhysObject.hitMusicTile();
        }
    }
}

class Ball extends Circle
{
    static options = {
        fillColor: 230,
        hasOutline: true,
        outlineColor: '#d9cdbf',
        restitution: 0.9,
    }

    constructor(x, y, mass)
    {
        // function found here: https://gist.github.com/fpillet/993002
        function scaleValue(value, from, to) 
        {
            var scale = (to[1] - to[0]) / (from[1] - from[0]);
            var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
            return ~~(capped * scale + to[0]);
        }

        // Calculate the ball's radius based on it's mass
        // Larger ball = heavier ball, smaller ball = lighter ball
        
        // Those values have been selected because they fit well visually
        const minMass = 0.1, maxMass = 0.6;
        const minSize = 3, maxSize = 10;

        // Clamp mass in range
        mass = Math.min(Math.max(mass, minMass), maxMass);

        var radius = scaleValue(mass, [minMass, maxMass], [minSize, maxSize]);
        
        Ball.options.mass = mass;
        super(x, y, radius, Ball.options);
    }

    hitMusicTile()
    {
        // Destroy ball
        this.fillColor = "#32a852";
        this.getRigidBody().collisionFilter = {group: -1, category: 2, mask: 0}
        Sleeping.set(this.getRigidBody(), true);
        this.destroy();
    }
}

// Returns all notes in a midi file sorted by lowest to highest
function getAllNotes()
{
    var notes = new Set();

    // Grab all notes from the midi file and put them in a set
    testMidi["tracks"][2]["notes"].forEach(value => {
        notes.add(value.name);
    });

    notes = Array.from(notes);

    // Sort the notes from lowest to highest pitch. Returns negative if A comes before B, positive if B comes before A, 0 if equal
    const compareNotes = function(noteA, noteB)
    {
        // Returns a note with pitch, octave separated and a flag if it's a sharp note
        const parseNote = function(note) {
            // Third element determines with a bool if it's a sharp note or not
            return [note.slice(0, 1), note.slice(-1), (note.length == 3) ? true : false];
        }

        var [pitchA, octaveA, isSharpA] = parseNote(noteA);
        var [pitchB, octaveB, isSharpB] = parseNote(noteB);

        // Both notes are the same, this should never happen but who knows
        if (octaveA == octaveB && pitchA == pitchB && isSharpA && isSharpB) return 0;

        // First compare both octaves to determine which comes first
        if (octaveA < octaveB) return -1;
        else if (octaveB < octaveA) return 1;
        // Both octaves are equal, compare pitches
        else
        {
            // We'll use this array to compare which note is higher/lower
            const noteOrder = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
            pitchAindex = noteOrder.findIndex((elem) => elem == pitchA);
            pitchBindex = noteOrder.findIndex((elem) => elem == pitchB);
            
            if (pitchAindex < pitchBindex) return -1
            else if (pitchBindex < pitchAindex) return 1
            // Both pitch are equal, return whoever is a sharp
            else
            {
                return (isSharpA) ? 1 : -1;
            }
        }
    }

    notes = notes.sort(compareNotes);

    // A quick extra step to replace any '#' with a 'S' to match our internal notation
    for(var i = 0; i < notes.length; ++i)
    {
        notes[i] = notes[i].replace('#', 'S');
    }

    return notes;
}

function setup()
{
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);

    // preload all required notes in memory for faster first use
    NoteLoader.noteLabels = getAllNotes();
    NoteLoader.loadNotes();
    
    // Update the number of required tiles to match how much notes are in the NoteLoader
    MusicTile.NUM_TILES = NoteLoader.noteLabels.length;
    for (var i = 0; i < MusicTile.NUM_TILES; ++i)
    {
        var tile = new MusicTile(i);
        Physics.get().add(tile);
    }
}

function mousePressed()
{
    // Create a ball anywhere the mouse is when we click
    var ball = new Ball(mouseX, mouseY, Math.random());
    Physics.get().add(ball);
}

function draw()
{
    background("#f3edf5");
    
    // Draw all bodies in the world composite
    Physics.get().getAllPhysicsObjects().forEach(physObject => 
    {
        rigidBody = physObject.getRigidBody();
        // Start a new style that matches the body's style
        push();
        fill(physObject.fillColor);
        if (!physObject.hasOutline) noStroke();
        stroke(physObject.outlineColor);

        // Do a vertex fill draw with P5
        beginShape();
        for (var i = 0; i < rigidBody.vertices.length; ++i)
        {
            var bodyVert = rigidBody.vertices[i];
            vertex(bodyVert.x, bodyVert.y);
        }
        endShape(CLOSE);

        pop();
    });
}
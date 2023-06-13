/** 
 * Initialize the Physics world from a midi file and handles timing features to play the song
 */
class MusicPlayer
{
    #midiData = testMidi;
    #noteLoader;
    #musicTiles = [];
    #midiEventsQueue = [];

    constructor()
    {
        var notes = this.getAllNotes();

        // Our test midi file is one octave too low for the instrument
        notes = MusicPlayer.transposeOctave(notes, 1);

        console.log(notes);

        this.#noteLoader = new NoteLoader(notes);
        Events.on(Physics.get().getEngine(), 'afterUpdate', this.update.bind(this));

        // Update the number of required tiles to match how much notes are in the NoteLoader
        MusicTile.NUM_TILES = this.#noteLoader.numNotes();
        for (var i = 0; i < MusicTile.NUM_TILES; ++i)
        {
            var tile = new MusicTile(i, this.#noteLoader);

            // Add the tile to the physical world
            Physics.get().add(tile);
            
            // Keep track of our music tiles
            this.#musicTiles.push(tile);
        }
    }

    update(evt)
    {
        if (this.#midiEventsQueue.length === 0) return;

        // This could technically be while(true) loop but
        // for safety it's capped at 10 iterations
        for (var i = 0; i < 99; ++i)
        {
            if (evt.timestamp / 1000 >= this.#midiEventsQueue[0].time)
            {
                var midiEvent = this.#midiEventsQueue.shift();
                this.spawnBall(midiEvent.name, midiEvent.velocity);
            }
            else
            {
                break;
            }
        }
    }

    // transpose a note array to another octave. The note array must be sorted by lowest note to highest note
    // Use a positive integer for octave + and a negative integer for integer -
    // Min octave is 1 and Max octave is 9
    static transposeOctave(notes, octave)
    {
        const minOctave = 1, maxOctave = 9; // <-- We should keep this a single digit integer

        var newNotes = [];

        // Use a flag to detect if we are doing a negative transpose as it's easier to work with
        // positive integer for comparaisons later
        var negTranspose = octave < 0;
        if (negTranspose) octave = Math.abs(octave);
        
        // Don't do anything if values are too crazy
        if (octave == 0 || octave > maxOctave) return notes;

        // Correct octave value to not go under 1 or over 9
        if (negTranspose)
        {
            // Get first note and check by how much we are allowed to transpose
            var firstNote = notes[0];
            var noteOctave = Note.getOctave(firstNote);

            if (noteOctave - octave < minOctave) octave = noteOctave - minOctave;
        }
        else
        {
            // Get last note and check by how much we are allowed to transpose
            var lastNote = notes[notes.length - 1];
            var noteOctave = Note.getOctave(lastNote);

            if (noteOctave + octave > maxOctave) octave = maxOctave - noteOctave;
        }

        for (var i = 0; i < notes.length; ++i)
        {
            var note = notes[i];
            var noteOctave = Note.getOctave(note);

            noteOctave = (negTranspose) ? noteOctave - octave : noteOctave + octave;

            // Update octave
            newNotes.push(Note.setOctave(note, noteOctave));
        }

        return newNotes;
    }

    // Spawn a ball above the MusicTile with the corresponding Note
    spawnBall(noteLabel, velocity)
    {
        // Find the music tile with the corresponding note label
        var tile;
        for (var i = 0; i < this.#musicTiles.length; ++i)
        {
            if (noteLabel == this.#musicTiles[i].note.label)
            {
                tile = this.#musicTiles[i];
                break;
            }
        }

        // No tile found
        if (tile === undefined) return;

        // spawn ball at the top 10% portion of the canvas
        const y = height * 0.1;
        // spawn a ball at the tile's x position up in the air
        var ball = new Ball(tile.getRigidBody().position.x, y, velocity);
        Physics.get().add(ball);
    }

    // Returns all notes in the midi file sorted from lowest to highest
    getAllNotes()
    {
        var notes = new Set();
    
        // Grab all notes from the midi file and put them in a set
        // !the data is hard-coded in music/Midi.js while a functional Midi interface is made
        this.#midiData["tracks"][2]["notes"].forEach(value => {
            //Let's use this loop to fill the midi event queue to avoid repetition
            this.#midiEventsQueue.push(value);
            notes.add(value.name);
        });
    
        notes = Array.from(notes);
    
        // Sort the notes from lowest to highest pitch. Returns negative if A comes before B, positive if B comes before A, 0 if equal
        // Notes are passed to this function in the form of a string like: "C#7", "D5", etc.
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
                var pitchAindex = noteOrder.findIndex((elem) => elem == pitchA);
                var pitchBindex = noteOrder.findIndex((elem) => elem == pitchB);
                
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
}
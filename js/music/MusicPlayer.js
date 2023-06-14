/** 
 * Initialize the Physics world from a midi file and handles timing features to play the song
 */
class MusicPlayer
{
    #midiData = testMidi;
    #noteLoader;

    // A value that is used to transpose notes before they are being played
    #octaveTranspose = 0;

    // Keep track of every spawned music tiles
    #musicTiles = [];

    // Contains the midi events to be played stored in an array representing the track
    // Filled once in "getAllNotes()" and emptied progressively when updating
    #midiEventsQueue = [];

    constructor(transpose)
    {
        // Get all notes from the midi date
        var notes = this.getAllNotesAndFillQueue();

        // Transpose if requested
        if (transpose !== undefined)
        {
            var transposition = MusicPlayer.transposeOctave(notes, transpose);
            notes = transposition.notes;
            this.#octaveTranspose = transposition.octave;
        }

        // Create all Note objects from the note array obtained above
        this.#noteLoader = new NoteLoader(notes);

        // Create MusicTiles        
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

        Events.on(Physics.get().getEngine(), 'afterUpdate', this.update.bind(this));
    }

    update(evt)
    {
        if (this.#midiEventsQueue.length === 0) return;

        for (let track of this.#midiEventsQueue)
        {
            if (track.length === 0) continue;

            // While we find midi events that should be played, play them and remove them from the queue
            while(track[0] !== undefined)
            {
                if (evt.timestamp / 1000 >= track[0].time)
                {
                    var midiEvent = track.shift();
                    this.spawnBall(this.transposeNote(midiEvent.name), midiEvent.velocity);

                }
                else
                {
                    break;
                }
            }
        }
    }

    // transpose a note array to another octave. The note array must be sorted by lowest note to highest note
    // Use a positive integer for octave + and a negative integer for integer -
    // Min octave is 1 and Max octave is 9
    // If octave value exceeds Max positively or negatively no transposition will be done and octave 0 is returned
    // The provided octave might be corrected if transposed notes exceed max or min
    // Returns the new note array and the corrected octave
    static transposeOctave(notes, octave)
    {
        const minOctave = 1, maxOctave = 9; // <-- We should keep this a single digit integer

        var newNotes = [];

        // Use a flag to detect if we are doing a negative transpose as it's easier to work with
        // positive integer for comparaisons later
        var negTranspose = octave < 0;
        if (negTranspose) octave = Math.abs(octave);
        
        // Don't do anything if values are too crazy
        if (octave == 0 || octave > maxOctave) return {notes: notes, octave: 0};

        // Correct octave value to not go under 1 or over 9
        if (negTranspose)
        {
            var firstNote = notes[0];
            var noteOctave = Note.getOctave(firstNote);

            if (noteOctave - octave < minOctave) octave = noteOctave - minOctave;
        }
        else
        {
            var lastNote = notes[notes.length - 1];
            var noteOctave = Note.getOctave(lastNote);

            if (noteOctave + octave > maxOctave) octave = maxOctave - noteOctave;
        }

        // Loop through the notes array and calculate the new octave for each note
        for (var i = 0; i < notes.length; ++i)
        {
            var note = notes[i];
            var noteOctave = Note.getOctave(note);

            noteOctave = (negTranspose) ? noteOctave - octave : noteOctave + octave;

            newNotes.push(Note.changeOctave(note, noteOctave));
        }

        return {notes: newNotes, octave: (negTranspose) ? octave * -1 : octave};
    }

    // Transpose a note using octaveTranspose number
    transposeNote(noteLabel)
    {
        var noteOctave = Note.getOctave(noteLabel);
        noteOctave += this.#octaveTranspose;
        return Note.changeOctave(noteLabel, noteOctave);
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
        if (tile === undefined) 
        {
            console.log("No tile found for note " + noteLabel);
            return;
        }

        const y = 0;
        // spawn a ball at the tile's x position up in the air
        var ball = new Ball(tile.getRigidBody().position.x, y, velocity);
        Physics.get().add(ball);
    }

    // Returns all notes in the midi file sorted from lowest to highest
    // Also fills up the midiEventsQueue to avoid having to recheck through the midi data
    getAllNotesAndFillQueue()
    {
        var notes = new Set();
    
        // Grab all notes from the midi file and put them in a set and in a queue
        for (let track of this.#midiData["tracks"])
        {
            var trackQueue = [];
            for (let note of track["notes"])
            {
                notes.add(note.name);
                trackQueue.push(note);
            }
            this.#midiEventsQueue.push(trackQueue);
        }
    
        notes = Array.from(notes);
    
        // Sort the notes from lowest to highest pitch. Returns negative if A comes before B, positive if B comes before A, 0 if equal
        // Notes are passed to this function in the form of a string like: "C#7", "D5", etc.
        const compareNotes = function(noteA, noteB)
        {
            // Returns a note with pitch, octave separated and a flag if it's a sharp note
            const parseNote = function(note) {
                return [Note.getPitch(note), Note.getOctave(note), (note.length == 3) ? true : false];
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
    
        return notes.sort(compareNotes);
    }
}
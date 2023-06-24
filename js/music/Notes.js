// Loads all audio in memory from the noteLabels array and create the Note objects associated
export class NoteLoader
{
    #noteLabels = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"];
    #notes = [];

    constructor(notes)
    {
        this.#noteLabels = notes;
        this.#loadNotes();
    }

    // Instanciate Note objects from the array noteLabels
    // path to audio files is hard coded and this should be changed if we use more instruments in the future
    #loadNotes()
    {
        for(var i = 0; i < this.#noteLabels.length; ++i)
        {
            var label = this.#noteLabels[i];
            
            // If note label is a sharp note, we want to replace the # symbol with a S just for loading the file
            // this is because # is a forbidden symbol for file names
            if (label.length === 3)
            {
                label = label.replace('#', 'S');
            }

            this.#notes.push(
                new Note( new Audio(`../glockenspiel-audio/${label}.wav`), this.#noteLabels[i] )
                );
        }
    }

    // Returns the Note object at the provided index
    getNote(index)
    {
        return this.#notes[index];
    }

    getNoteLabel(label)
    {
        var index = this.#noteLabels.findIndex(elem => elem == label);
        return this.#notes[index];
    }

    numNotes()
    {
        return this.#noteLabels.length;
    }
}

// Audio file wrapper that avoids having to manipulate audio files directly
// Also contains helper functions to work with note labels
export class Note
{
    label
    #audio;

    constructor(audio, label)
    {
        this.#audio = audio;
        this.label = label;
    }

    static formatLabel(label)
    {

    }

    static getOctave(noteLabel)
    {
        return Math.floor(noteLabel.slice(-1));
    }

    getOctave()
    {
        return Note.getOctave(this.label);
    }

    static getPitch(noteLabel)
    {
        return noteLabel.slice(0, 1);
    }

    getPitch()
    {
        return Note.getPitch(this.label);
    }

    // Given a note label, returns this same label with the octave replaced by newOctave
    static changeOctave(noteLabel, newOctave)
    {
        return noteLabel.slice(0, -1) + newOctave;
    }

    /* We need this custom play function to restart the note if it's hit again while already playing
    * This works fine on chromium browsers but Safari has a weird behavior so we should probably use
    * an audio playing library to make cross-browser compatibility better
    */
    play(velocity)
    {
        // Restart audio if it's already playing
        if (!this.#audio.paused)
        {
            this.#audio.currentTime = 0;
        }
        else
        {
            this.#audio.play();
        }

        // Play the volume at a specific volume based on the provided velocity
        if (velocity !== undefined)
        {
            velocity = Math.min(Math.max(velocity, 0), 1); // any value outside of [0-1] causes errors
            this.#audio.volume = velocity;
        }
    }
}


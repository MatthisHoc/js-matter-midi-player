# Play MIDI files using Matter.JS Physics Engine

**Project made for educational purpose**

## What is it ?

The scene is composed of musical tiles at the bottom of the screen, their number and the note they play is based on MIDI data given to the MusicPlayer class. Whenever a tile is hit by a ball, it plays it's note.

Balls' position and timing is determined using MIDI data to play the song in rythm.

### Dependencies

[Matter.JS](https://brm.io/matter-js/) for physics and collision detection

[P5js](https://p5js.org) for drawing

[midi-parser.js](https://github.com/colxi/midi-parser-js) is used as a base to get midi data as JSON (*not yet implemented*)

## Extracting MIDI data

The song's data is stored in the variable `testMidi` under `/js/music/Midi.js`.

This file is supposed contain a class that translates MIDI data to human-readable JSON but it hasn't been implemented yet.

## Other information

Data are hard-coded and obtained with this website: [visipiano.com](https://www.visipiano.com/midi-to-json-converter).

For optimal results, use songs that don't contain too much instruments or it will sound muddy. Also, given the nature of this project, notes can't be held but only struck.

The song in this repository comes from [bitmidi](https://bitmidi.com/the-legend-of-zelda-a-link-to-the-past-overworld-mid)

### Using this repository

Before using this project you must put audio files in the folder `/glockenspiel-audio`

Each audio file should represent a note and must be named using the following convention:

**[Note Letter]**[Optional 'S' for #]**[Octave (from 1 to 9)]**

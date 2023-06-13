// MIDI class that uses midi-parser.js to read to contnet of a midi file
class Midi
{
    header = {};

    constructor(source, readyCallback)
    {
        MidiParser.parse(source, (obj) => 
        {
            switch(obj.formatType)
            {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
            }
        });

        readyCallback(midi);
    }
}

// Obtained here: https://tonejs.github.io/Midi/
const testMidi = {
    "header": {
      "keySignatures": [
        {
          "key": "Bb",
          "scale": "major",
          "ticks": 0
        }
      ],
      "meta": [],
      "name": "",
      "ppq": 1024,
      "tempos": [
        {
          "bpm": 135.99952853496774,
          "ticks": 0
        },
        {
          "bpm": 135.99952853496774,
          "ticks": 0
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 0
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 16384
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 43008
        },
        {
          "bpm": 134.9992237544634,
          "ticks": 43264
        },
        {
          "bpm": 134.47246452168145,
          "ticks": 43520
        },
        {
          "bpm": 133.47659821541788,
          "ticks": 43776
        },
        {
          "bpm": 132.94896310887856,
          "ticks": 44032
        },
        {
          "bpm": 131.9531038668857,
          "ticks": 44288
        },
        {
          "bpm": 131.4837946223128,
          "ticks": 44544
        },
        {
          "bpm": 130.48754496383322,
          "ticks": 44800
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 45312
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 98304
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 124928
        },
        {
          "bpm": 134.9992237544634,
          "ticks": 125184
        },
        {
          "bpm": 134.47246452168145,
          "ticks": 125440
        },
        {
          "bpm": 133.47659821541788,
          "ticks": 125696
        },
        {
          "bpm": 132.94896310887856,
          "ticks": 125952
        },
        {
          "bpm": 131.9531038668857,
          "ticks": 126208
        },
        {
          "bpm": 131.4837946223128,
          "ticks": 126464
        },
        {
          "bpm": 130.48754496383322,
          "ticks": 126720
        },
        {
          "bpm": 135.99613770968904,
          "ticks": 127232
        }
      ],
      "timeSignatures": [
        {
          "ticks": 0,
          "timeSignature": [
            4,
            4
          ],
          "measures": 0
        }
      ]
    },
    "tracks": [
      {
        "channel": 0,
        "controlChanges": {},
        "pitchBends": [],
        "instrument": {
          "family": "piano",
          "number": 0,
          "name": "acoustic grand piano"
        },
        "name": "",
        "notes": [],
        "endOfTrackTicks": 180194
      },
      {
        "channel": 0,
        "controlChanges": {
          "0": [
            {
              "number": 0,
              "ticks": 0,
              "time": 0,
              "value": 0.952755905511811
            }
          ],
          "32": [
            {
              "number": 32,
              "ticks": 0,
              "time": 0,
              "value": 0
            }
          ]
        },
        "pitchBends": [],
        "instrument": {
          "family": "piano",
          "number": 0,
          "name": "acoustic grand piano"
        },
        "name": "SmartMusic SoftSynth",
        "notes": [],
        "endOfTrackTicks": 180194
      },
      {
        "channel": 0,
        "controlChanges": {
          "6": [
            {
              "number": 6,
              "ticks": 4,
              "time": 0.00172339453125,
              "value": 0.09448818897637795
            },
            {
              "number": 6,
              "ticks": 4,
              "time": 0.00172339453125,
              "value": 0.09448818897637795
            }
          ],
          "7": [
            {
              "number": 7,
              "ticks": 0,
              "time": 0,
              "value": 0.7952755905511811
            },
            {
              "number": 7,
              "ticks": 0,
              "time": 0,
              "value": 0.8031496062992126
            },
            {
              "number": 7,
              "ticks": 0,
              "time": 0,
              "value": 0.8661417322834646
            },
            {
              "number": 7,
              "ticks": 10,
              "time": 0.004308486328125,
              "value": 0.8031496062992126
            },
            {
              "number": 7,
              "ticks": 10,
              "time": 0.004308486328125,
              "value": 0.8661417322834646
            },
            {
              "number": 7,
              "ticks": 7389,
              "time": 3.1835405478515626,
              "value": 0.8031496062992126
            }
          ],
          "10": [
            {
              "number": 10,
              "ticks": 0,
              "time": 0,
              "value": 0.5039370078740157
            }
          ],
          "38": [
            {
              "number": 38,
              "ticks": 5,
              "time": 0.0021542431640625,
              "value": 0
            },
            {
              "number": 38,
              "ticks": 5,
              "time": 0.0021542431640625,
              "value": 0
            }
          ],
          "100": [
            {
              "number": 100,
              "ticks": 3,
              "time": 0.0012925458984375,
              "value": 0
            },
            {
              "number": 100,
              "ticks": 3,
              "time": 0.0012925458984375,
              "value": 0
            }
          ],
          "101": [
            {
              "number": 101,
              "ticks": 3,
              "time": 0.0012925458984375,
              "value": 0
            },
            {
              "number": 101,
              "ticks": 3,
              "time": 0.0012925458984375,
              "value": 0
            }
          ]
        },
        "pitchBends": [],
        "instrument": {
          "family": "piano",
          "number": 1,
          "name": "bright acoustic piano"
        },
        "name": "",
        "notes": [
          {
            "duration": 0.6669536835937501,
            "durationTicks": 1548,
            "midi": 60,
            "name": "C4",
            "ticks": 10,
            "time": 0.004308486328125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.6669536835937501,
            "durationTicks": 1548,
            "midi": 65,
            "name": "F4",
            "ticks": 10,
            "time": 0.004308486328125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.6669536835937501,
            "durationTicks": 1548,
            "midi": 70,
            "name": "A#4",
            "ticks": 10,
            "time": 0.004308486328125,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.4493751240234375,
            "durationTicks": 1043,
            "midi": 48,
            "name": "C3",
            "ticks": 10,
            "time": 0.004308486328125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.14648853515625,
            "durationTicks": 340,
            "midi": 48,
            "name": "C3",
            "ticks": 1054,
            "time": 0.454114458984375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14648853515625,
            "durationTicks": 340,
            "midi": 53,
            "name": "F3",
            "ticks": 1054,
            "time": 0.454114458984375,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.14131835156249994,
            "durationTicks": 328,
            "midi": 48,
            "name": "C3",
            "ticks": 1395,
            "time": 0.6010338427734375,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14131835156249994,
            "durationTicks": 328,
            "midi": 53,
            "name": "F3",
            "ticks": 1395,
            "time": 0.6010338427734375,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.15682890234375002,
            "durationTicks": 364,
            "midi": 48,
            "name": "C3",
            "ticks": 1724,
            "time": 0.74278304296875,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.14821192968750008,
            "durationTicks": 344,
            "midi": 53,
            "name": "F3",
            "ticks": 1724,
            "time": 0.74278304296875,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.43688051367187497,
            "durationTicks": 1014,
            "midi": 46,
            "name": "A#2",
            "ticks": 2069,
            "time": 0.8914258212890624,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.43688051367187497,
            "durationTicks": 1014,
            "midi": 53,
            "name": "F3",
            "ticks": 2069,
            "time": 0.8914258212890624,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1102972499999999,
            "durationTicks": 256,
            "midi": 60,
            "name": "C4",
            "ticks": 2827,
            "time": 1.2180090849609375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.1102972499999999,
            "durationTicks": 256,
            "midi": 65,
            "name": "F4",
            "ticks": 2827,
            "time": 1.2180090849609375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.1102972499999999,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 2827,
            "time": 1.2180090849609375,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.14605768652343754,
            "durationTicks": 339,
            "midi": 60,
            "name": "C4",
            "ticks": 3084,
            "time": 1.32873718359375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14605768652343754,
            "durationTicks": 339,
            "midi": 65,
            "name": "F4",
            "ticks": 3084,
            "time": 1.32873718359375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14605768652343754,
            "durationTicks": 339,
            "midi": 70,
            "name": "A#4",
            "ticks": 3084,
            "time": 1.32873718359375,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.14174920019531245,
            "durationTicks": 329,
            "midi": 60,
            "name": "C4",
            "ticks": 3424,
            "time": 1.47522571875,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14174920019531245,
            "durationTicks": 329,
            "midi": 65,
            "name": "F4",
            "ticks": 3424,
            "time": 1.47522571875,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14174920019531245,
            "durationTicks": 329,
            "midi": 70,
            "name": "A#4",
            "ticks": 3424,
            "time": 1.47522571875,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.14691938378906255,
            "durationTicks": 341,
            "midi": 60,
            "name": "C4",
            "ticks": 3754,
            "time": 1.617405767578125,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14691938378906255,
            "durationTicks": 341,
            "midi": 65,
            "name": "F4",
            "ticks": 3754,
            "time": 1.617405767578125,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14691938378906255,
            "durationTicks": 341,
            "midi": 70,
            "name": "A#4",
            "ticks": 3754,
            "time": 1.617405767578125,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.2201636513671874,
            "durationTicks": 511,
            "midi": 60,
            "name": "C4",
            "ticks": 4100,
            "time": 1.76647939453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.2201636513671874,
            "durationTicks": 511,
            "midi": 65,
            "name": "F4",
            "ticks": 4100,
            "time": 1.76647939453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23308911035156243,
            "durationTicks": 541,
            "midi": 70,
            "name": "A#4",
            "ticks": 4100,
            "time": 1.76647939453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.45196021582031265,
            "durationTicks": 1049,
            "midi": 44,
            "name": "G#2",
            "ticks": 4100,
            "time": 1.76647939453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562514,
            "durationTicks": 258,
            "midi": 60,
            "name": "C4",
            "ticks": 4891,
            "time": 2.1072806630859375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562514,
            "durationTicks": 258,
            "midi": 65,
            "name": "F4",
            "ticks": 4891,
            "time": 2.1072806630859375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562514,
            "durationTicks": 258,
            "midi": 68,
            "name": "G#4",
            "ticks": 4891,
            "time": 2.1072806630859375,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.6436878574218752,
            "durationTicks": 1494,
            "midi": 60,
            "name": "C4",
            "ticks": 5150,
            "time": 2.218870458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.6436878574218752,
            "durationTicks": 1494,
            "midi": 65,
            "name": "F4",
            "ticks": 5150,
            "time": 2.218870458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.6566133164062502,
            "durationTicks": 1524,
            "midi": 70,
            "name": "A#4",
            "ticks": 5150,
            "time": 2.218870458984375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.4368805136718752,
            "durationTicks": 1014,
            "midi": 48,
            "name": "C3",
            "ticks": 5150,
            "time": 2.218870458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.43688051367187475,
            "durationTicks": 1014,
            "midi": 44,
            "name": "G#2",
            "ticks": 6165,
            "time": 2.6561818212890627,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.1102972499999999,
            "durationTicks": 256,
            "midi": 60,
            "name": "C4",
            "ticks": 6923,
            "time": 2.9827650849609375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.1102972499999999,
            "durationTicks": 256,
            "midi": 65,
            "name": "F4",
            "ticks": 6923,
            "time": 2.9827650849609375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.1102972499999999,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 6923,
            "time": 2.9827650849609375,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.14605768652343754,
            "durationTicks": 339,
            "midi": 60,
            "name": "C4",
            "ticks": 7180,
            "time": 3.09349318359375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14605768652343754,
            "durationTicks": 339,
            "midi": 65,
            "name": "F4",
            "ticks": 7180,
            "time": 3.09349318359375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14605768652343754,
            "durationTicks": 339,
            "midi": 70,
            "name": "A#4",
            "ticks": 7180,
            "time": 3.09349318359375,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.14174920019531223,
            "durationTicks": 329,
            "midi": 60,
            "name": "C4",
            "ticks": 7520,
            "time": 3.23998171875,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14174920019531223,
            "durationTicks": 329,
            "midi": 65,
            "name": "F4",
            "ticks": 7520,
            "time": 3.23998171875,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14174920019531223,
            "durationTicks": 329,
            "midi": 70,
            "name": "A#4",
            "ticks": 7520,
            "time": 3.23998171875,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.14691938378906233,
            "durationTicks": 341,
            "midi": 60,
            "name": "C4",
            "ticks": 7850,
            "time": 3.382161767578125,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14691938378906233,
            "durationTicks": 341,
            "midi": 65,
            "name": "F4",
            "ticks": 7850,
            "time": 3.382161767578125,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14691938378906233,
            "durationTicks": 341,
            "midi": 70,
            "name": "A#4",
            "ticks": 7850,
            "time": 3.382161767578125,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.22016365136718763,
            "durationTicks": 511,
            "midi": 60,
            "name": "C4",
            "ticks": 8196,
            "time": 3.53123539453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.22016365136718763,
            "durationTicks": 511,
            "midi": 65,
            "name": "F4",
            "ticks": 8196,
            "time": 3.53123539453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23308911035156266,
            "durationTicks": 541,
            "midi": 70,
            "name": "A#4",
            "ticks": 8196,
            "time": 3.53123539453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203124,
            "durationTicks": 1049,
            "midi": 42,
            "name": "F#2",
            "ticks": 8196,
            "time": 3.53123539453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562514,
            "durationTicks": 258,
            "midi": 60,
            "name": "C4",
            "ticks": 8987,
            "time": 3.8720366630859373,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562514,
            "durationTicks": 258,
            "midi": 65,
            "name": "F4",
            "ticks": 8987,
            "time": 3.8720366630859373,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562514,
            "durationTicks": 258,
            "midi": 68,
            "name": "G#4",
            "ticks": 8987,
            "time": 3.8720366630859373,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.6436878574218747,
            "durationTicks": 1494,
            "midi": 60,
            "name": "C4",
            "ticks": 9246,
            "time": 3.983626458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.6436878574218747,
            "durationTicks": 1494,
            "midi": 65,
            "name": "F4",
            "ticks": 9246,
            "time": 3.983626458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.6566133164062498,
            "durationTicks": 1524,
            "midi": 70,
            "name": "A#4",
            "ticks": 9246,
            "time": 3.983626458984375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.4368805136718752,
            "durationTicks": 1014,
            "midi": 48,
            "name": "C3",
            "ticks": 9246,
            "time": 3.983626458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.4368805136718743,
            "durationTicks": 1014,
            "midi": 42,
            "name": "F#2",
            "ticks": 10261,
            "time": 4.420937821289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.11029724999999946,
            "durationTicks": 256,
            "midi": 60,
            "name": "C4",
            "ticks": 11019,
            "time": 4.747521084960938,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029724999999946,
            "durationTicks": 256,
            "midi": 65,
            "name": "F4",
            "ticks": 11019,
            "time": 4.747521084960938,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029724999999946,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 11019,
            "time": 4.747521084960938,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 60,
            "name": "C4",
            "ticks": 11276,
            "time": 4.85824918359375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 65,
            "name": "F4",
            "ticks": 11276,
            "time": 4.85824918359375,
            "velocity": 0.5433070866141733
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 70,
            "name": "A#4",
            "ticks": 11276,
            "time": 4.85824918359375,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.1417492001953118,
            "durationTicks": 329,
            "midi": 60,
            "name": "C4",
            "ticks": 11616,
            "time": 5.00473771875,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.1417492001953118,
            "durationTicks": 329,
            "midi": 65,
            "name": "F4",
            "ticks": 11616,
            "time": 5.00473771875,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.1417492001953118,
            "durationTicks": 329,
            "midi": 70,
            "name": "A#4",
            "ticks": 11616,
            "time": 5.00473771875,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.14691938378906233,
            "durationTicks": 341,
            "midi": 60,
            "name": "C4",
            "ticks": 11946,
            "time": 5.146917767578125,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14691938378906233,
            "durationTicks": 341,
            "midi": 65,
            "name": "F4",
            "ticks": 11946,
            "time": 5.146917767578125,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.14691938378906233,
            "durationTicks": 341,
            "midi": 70,
            "name": "A#4",
            "ticks": 11946,
            "time": 5.146917767578125,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.1008185800781245,
            "durationTicks": 234,
            "midi": 60,
            "name": "C4",
            "ticks": 12292,
            "time": 5.29599139453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.08789312109374947,
            "durationTicks": 204,
            "midi": 65,
            "name": "F4",
            "ticks": 12292,
            "time": 5.29599139453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.1008185800781245,
            "durationTicks": 234,
            "midi": 70,
            "name": "A#4",
            "ticks": 12292,
            "time": 5.29599139453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203124,
            "durationTicks": 1049,
            "midi": 41,
            "name": "F2",
            "ticks": 12292,
            "time": 5.29599139453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.04049977148437467,
            "durationTicks": 94,
            "midi": 53,
            "name": "F3",
            "ticks": 12834,
            "time": 5.529511353515625,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.034037041992187156,
            "durationTicks": 79,
            "midi": 57,
            "name": "A3",
            "ticks": 12834,
            "time": 5.529511353515625,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.04049977148437467,
            "durationTicks": 94,
            "midi": 65,
            "name": "F4",
            "ticks": 12834,
            "time": 5.529511353515625,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.044808257812499974,
            "durationTicks": 104,
            "midi": 54,
            "name": "F#3",
            "ticks": 13083,
            "time": 5.636792663085937,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.044808257812499974,
            "durationTicks": 104,
            "midi": 58,
            "name": "A#3",
            "ticks": 13083,
            "time": 5.636792663085937,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.044808257812499974,
            "durationTicks": 104,
            "midi": 65,
            "name": "F4",
            "ticks": 13083,
            "time": 5.636792663085937,
            "velocity": 0.6771653543307087
          },
          {
            "duration": 0.08487718066406202,
            "durationTicks": 197,
            "midi": 55,
            "name": "G3",
            "ticks": 13342,
            "time": 5.748382458984375,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.08487718066406202,
            "durationTicks": 197,
            "midi": 58,
            "name": "A#3",
            "ticks": 13342,
            "time": 5.748382458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.08487718066406202,
            "durationTicks": 197,
            "midi": 65,
            "name": "F4",
            "ticks": 13342,
            "time": 5.748382458984375,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.4368805136718743,
            "durationTicks": 1014,
            "midi": 41,
            "name": "F2",
            "ticks": 13342,
            "time": 5.748382458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.04006892285156205,
            "durationTicks": 93,
            "midi": 55,
            "name": "G3",
            "ticks": 13847,
            "time": 5.965961018554688,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.04006892285156205,
            "durationTicks": 93,
            "midi": 58,
            "name": "A#3",
            "ticks": 13847,
            "time": 5.965961018554688,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.04006892285156205,
            "durationTicks": 93,
            "midi": 65,
            "name": "F4",
            "ticks": 13847,
            "time": 5.965961018554688,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.046100803710936944,
            "durationTicks": 107,
            "midi": 55,
            "name": "G3",
            "ticks": 14095,
            "time": 6.072811479492188,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.05256353320312446,
            "durationTicks": 122,
            "midi": 58,
            "name": "A#3",
            "ticks": 14095,
            "time": 6.072811479492188,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.046100803710936944,
            "durationTicks": 107,
            "midi": 65,
            "name": "F4",
            "ticks": 14095,
            "time": 6.072811479492188,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.08703142382812512,
            "durationTicks": 202,
            "midi": 56,
            "name": "G#3",
            "ticks": 14357,
            "time": 6.185693821289062,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.08703142382812512,
            "durationTicks": 202,
            "midi": 60,
            "name": "C4",
            "ticks": 14357,
            "time": 6.185693821289062,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.08703142382812512,
            "durationTicks": 202,
            "midi": 65,
            "name": "F4",
            "ticks": 14357,
            "time": 6.185693821289062,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.4368805136718752,
            "durationTicks": 1014,
            "midi": 41,
            "name": "F2",
            "ticks": 14357,
            "time": 6.185693821289062,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.04006892285156205,
            "durationTicks": 93,
            "midi": 56,
            "name": "G#3",
            "ticks": 14867,
            "time": 6.405426624023438,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.04006892285156205,
            "durationTicks": 93,
            "midi": 60,
            "name": "C4",
            "ticks": 14867,
            "time": 6.405426624023438,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.04006892285156205,
            "durationTicks": 93,
            "midi": 65,
            "name": "F4",
            "ticks": 14867,
            "time": 6.405426624023438,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.043946560546875624,
            "durationTicks": 102,
            "midi": 56,
            "name": "G#3",
            "ticks": 15115,
            "time": 6.512277084960937,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.05040929003906314,
            "durationTicks": 117,
            "midi": 60,
            "name": "C4",
            "ticks": 15115,
            "time": 6.512277084960937,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.043946560546875624,
            "durationTicks": 102,
            "midi": 65,
            "name": "F4",
            "ticks": 15115,
            "time": 6.512277084960937,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.08487718066406202,
            "durationTicks": 197,
            "midi": 57,
            "name": "A3",
            "ticks": 15372,
            "time": 6.62300518359375,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.08487718066406202,
            "durationTicks": 197,
            "midi": 61,
            "name": "C#4",
            "ticks": 15372,
            "time": 6.62300518359375,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.08487718066406202,
            "durationTicks": 197,
            "midi": 65,
            "name": "F4",
            "ticks": 15372,
            "time": 6.62300518359375,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.2042222519531247,
            "durationTicks": 474,
            "midi": 44,
            "name": "G#2",
            "ticks": 15372,
            "time": 6.62300518359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.08573887792968726,
            "durationTicks": 199,
            "midi": 57,
            "name": "A3",
            "ticks": 15877,
            "time": 6.840583743164062,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.07281341894531224,
            "durationTicks": 169,
            "midi": 61,
            "name": "C#4",
            "ticks": 15877,
            "time": 6.840583743164062,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.08573887792968726,
            "durationTicks": 199,
            "midi": 65,
            "name": "F4",
            "ticks": 15877,
            "time": 6.840583743164062,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.20508394921874995,
            "durationTicks": 476,
            "midi": 45,
            "name": "A2",
            "ticks": 15877,
            "time": 6.840583743164062,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.22016365136718807,
            "durationTicks": 511,
            "midi": 70,
            "name": "A#4",
            "ticks": 16388,
            "time": 7.0607473945312496,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718807,
            "durationTicks": 511,
            "midi": 62,
            "name": "D4",
            "ticks": 16388,
            "time": 7.0607473945312496,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718807,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 16388,
            "time": 7.0607473945312496,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718752,
            "durationTicks": 1014,
            "midi": 65,
            "name": "F4",
            "ticks": 17438,
            "time": 7.513138458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.4368805136718752,
            "durationTicks": 1014,
            "midi": 58,
            "name": "A#3",
            "ticks": 17438,
            "time": 7.513138458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562506,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 17438,
            "time": 7.513138458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624945,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 17779,
            "time": 7.660057842773438,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703125047,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 18108,
            "time": 7.80180704296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781251,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 18453,
            "time": 7.950449821289062,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 18453,
            "time": 7.950449821289062,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.11029725000000035,
            "durationTicks": 256,
            "midi": 62,
            "name": "D4",
            "ticks": 19211,
            "time": 8.277033084960937,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029725000000035,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 19211,
            "time": 8.277033084960937,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.10383452050781372,
            "durationTicks": 241,
            "midi": 62,
            "name": "D4",
            "ticks": 19468,
            "time": 8.38776118359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.11029725000000035,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 19468,
            "time": 8.38776118359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 46,
            "name": "A#2",
            "ticks": 19468,
            "time": 8.38776118359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 63,
            "name": "D#4",
            "ticks": 19725,
            "time": 8.498489282226563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230468588,
            "durationTicks": 247,
            "midi": 72,
            "name": "C5",
            "ticks": 19725,
            "time": 8.498489282226563,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 65,
            "name": "F4",
            "ticks": 19973,
            "time": 8.605339743164063,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230468766,
            "durationTicks": 247,
            "midi": 74,
            "name": "D5",
            "ticks": 19973,
            "time": 8.605339743164063,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343896,
            "durationTicks": 243,
            "midi": 66,
            "name": "F#4",
            "ticks": 20221,
            "time": 8.712190204101562,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 75,
            "name": "D#5",
            "ticks": 20221,
            "time": 8.712190204101562,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8892715781250011,
            "durationTicks": 2064,
            "midi": 68,
            "name": "G#4",
            "ticks": 20484,
            "time": 8.82550339453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.8892715781250011,
            "durationTicks": 2064,
            "midi": 77,
            "name": "F5",
            "ticks": 20484,
            "time": 8.82550339453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 44,
            "name": "G#2",
            "ticks": 20484,
            "time": 8.82550339453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562381,
            "durationTicks": 258,
            "midi": 58,
            "name": "A#3",
            "ticks": 21275,
            "time": 9.166304663085938,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062545,
            "durationTicks": 242,
            "midi": 58,
            "name": "A#3",
            "ticks": 21534,
            "time": 9.277894458984374,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 44,
            "name": "G#2",
            "ticks": 21534,
            "time": 9.277894458984374,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09952603417968753,
            "durationTicks": 231,
            "midi": 60,
            "name": "C4",
            "ticks": 21792,
            "time": 9.38905340625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890624945,
            "durationTicks": 308,
            "midi": 44,
            "name": "G#2",
            "ticks": 21875,
            "time": 9.424813842773437,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 62,
            "name": "D4",
            "ticks": 22039,
            "time": 9.495473018554687,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703125135,
            "durationTicks": 324,
            "midi": 42,
            "name": "F#2",
            "ticks": 22204,
            "time": 9.566563042968749,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 63,
            "name": "D#4",
            "ticks": 22287,
            "time": 9.602323479492188,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781251,
            "durationTicks": 2026,
            "midi": 65,
            "name": "F4",
            "ticks": 22549,
            "time": 9.715205821289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 44,
            "name": "G#2",
            "ticks": 22549,
            "time": 9.715205821289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 68,
            "name": "G#4",
            "ticks": 23059,
            "time": 9.934938624023438,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 77,
            "name": "F5",
            "ticks": 23059,
            "time": 9.934938624023438,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.13744071386718737,
            "durationTicks": 319,
            "midi": 68,
            "name": "G#4",
            "ticks": 23564,
            "time": 10.15251718359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 77,
            "name": "F5",
            "ticks": 23564,
            "time": 10.15251718359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531247,
            "durationTicks": 474,
            "midi": 44,
            "name": "G#2",
            "ticks": 23564,
            "time": 10.15251718359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13313222753906295,
            "durationTicks": 309,
            "midi": 70,
            "name": "A#4",
            "ticks": 23904,
            "time": 10.29900571875,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14174920019531356,
            "durationTicks": 329,
            "midi": 78,
            "name": "F#5",
            "ticks": 23904,
            "time": 10.29900571875,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 72,
            "name": "C5",
            "ticks": 24234,
            "time": 10.441185767578125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906322,
            "durationTicks": 341,
            "midi": 80,
            "name": "G#5",
            "ticks": 24234,
            "time": 10.441185767578125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8892715781249994,
            "durationTicks": 2064,
            "midi": 73,
            "name": "C#5",
            "ticks": 24580,
            "time": 10.59025939453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.8892715781249994,
            "durationTicks": 2064,
            "midi": 82,
            "name": "A#5",
            "ticks": 24580,
            "time": 10.59025939453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 42,
            "name": "F#2",
            "ticks": 24580,
            "time": 10.59025939453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 54,
            "name": "F#3",
            "ticks": 25371,
            "time": 10.931060663085937,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062368,
            "durationTicks": 242,
            "midi": 54,
            "name": "F#3",
            "ticks": 25630,
            "time": 11.042650458984376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.14648853515624793,
            "durationTicks": 340,
            "midi": 42,
            "name": "F#2",
            "ticks": 25630,
            "time": 11.042650458984376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09952603417968753,
            "durationTicks": 231,
            "midi": 56,
            "name": "G#3",
            "ticks": 25888,
            "time": 11.15380940625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890625122,
            "durationTicks": 308,
            "midi": 42,
            "name": "F#2",
            "ticks": 25971,
            "time": 11.189569842773437,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250104,
            "durationTicks": 232,
            "midi": 58,
            "name": "A#3",
            "ticks": 26135,
            "time": 11.260229018554687,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 40,
            "name": "E2",
            "ticks": 26300,
            "time": 11.331319042968751,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.10598876367187593,
            "durationTicks": 246,
            "midi": 60,
            "name": "C4",
            "ticks": 26383,
            "time": 11.367079479492187,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 61,
            "name": "C#4",
            "ticks": 26645,
            "time": 11.479961821289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.23265826171875048,
            "durationTicks": 540,
            "midi": 42,
            "name": "F#2",
            "ticks": 26645,
            "time": 11.479961821289063,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.11029724999999857,
            "durationTicks": 256,
            "midi": 73,
            "name": "C#5",
            "ticks": 27403,
            "time": 11.806545084960938,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029724999999857,
            "durationTicks": 256,
            "midi": 82,
            "name": "A#5",
            "ticks": 27403,
            "time": 11.806545084960938,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.13744071386718737,
            "durationTicks": 319,
            "midi": 73,
            "name": "C#5",
            "ticks": 27660,
            "time": 11.91727318359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 82,
            "name": "A#5",
            "ticks": 27660,
            "time": 11.91727318359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2305040185546865,
            "durationTicks": 535,
            "midi": 42,
            "name": "F#2",
            "ticks": 27660,
            "time": 11.91727318359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 54,
            "name": "F#3",
            "ticks": 27660,
            "time": 11.91727318359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13313222753906118,
            "durationTicks": 309,
            "midi": 72,
            "name": "C5",
            "ticks": 28000,
            "time": 12.063761718750001,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14174920019531,
            "durationTicks": 329,
            "midi": 80,
            "name": "G#5",
            "ticks": 28000,
            "time": 12.063761718750001,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 70,
            "name": "A#4",
            "ticks": 28330,
            "time": 12.205941767578125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906144,
            "durationTicks": 341,
            "midi": 78,
            "name": "F#5",
            "ticks": 28330,
            "time": 12.205941767578125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15295126464843634,
            "durationTicks": 355,
            "midi": 72,
            "name": "C5",
            "ticks": 28676,
            "time": 12.35501539453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.16156823730468695,
            "durationTicks": 375,
            "midi": 80,
            "name": "G#5",
            "ticks": 28676,
            "time": 12.35501539453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.5988795996093756,
            "durationTicks": 1390,
            "midi": 53,
            "name": "F3",
            "ticks": 28676,
            "time": 12.35501539453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 49,
            "name": "C#3",
            "ticks": 28676,
            "time": 12.35501539453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 70,
            "name": "A#4",
            "ticks": 29384,
            "time": 12.6600562265625,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906322,
            "durationTicks": 341,
            "midi": 78,
            "name": "F#5",
            "ticks": 29384,
            "time": 12.6600562265625,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 68,
            "name": "G#4",
            "ticks": 29726,
            "time": 12.807406458984374,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 77,
            "name": "F5",
            "ticks": 29726,
            "time": 12.807406458984374,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 49,
            "name": "C#3",
            "ticks": 29726,
            "time": 12.807406458984374,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624945,
            "durationTicks": 308,
            "midi": 53,
            "name": "F3",
            "ticks": 30067,
            "time": 12.954325842773438,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890624945,
            "durationTicks": 308,
            "midi": 49,
            "name": "C#3",
            "ticks": 30067,
            "time": 12.954325842773438,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 51,
            "name": "D#3",
            "ticks": 30396,
            "time": 13.09607504296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 48,
            "name": "C3",
            "ticks": 30396,
            "time": 13.09607504296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 30741,
            "time": 13.244717821289061,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2063764951171887,
            "durationTicks": 479,
            "midi": 49,
            "name": "C#3",
            "ticks": 30741,
            "time": 13.244717821289061,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.4355879677734382,
            "durationTicks": 1011,
            "midi": 68,
            "name": "G#4",
            "ticks": 31756,
            "time": 13.68202918359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4355879677734382,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 31756,
            "time": 13.68202918359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531247,
            "durationTicks": 474,
            "midi": 49,
            "name": "C#3",
            "ticks": 31756,
            "time": 13.68202918359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 66,
            "name": "F#4",
            "ticks": 32772,
            "time": 14.119771394531249,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 75,
            "name": "D#5",
            "ticks": 32772,
            "time": 14.119771394531249,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203142,
            "durationTicks": 1049,
            "midi": 54,
            "name": "F#3",
            "ticks": 32772,
            "time": 14.119771394531249,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718896,
            "durationTicks": 511,
            "midi": 47,
            "name": "B2",
            "ticks": 32772,
            "time": 14.119771394531249,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144531099,
            "durationTicks": 233,
            "midi": 66,
            "name": "F#4",
            "ticks": 33314,
            "time": 14.353291353515626,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093749762,
            "durationTicks": 248,
            "midi": 75,
            "name": "D#5",
            "ticks": 33314,
            "time": 14.353291353515626,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 68,
            "name": "G#4",
            "ticks": 33563,
            "time": 14.460572663085937,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 77,
            "name": "F5",
            "ticks": 33563,
            "time": 14.460572663085937,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765621,
            "durationTicks": 2029,
            "midi": 70,
            "name": "A#4",
            "ticks": 33822,
            "time": 14.572162458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765621,
            "durationTicks": 2029,
            "midi": 78,
            "name": "F#5",
            "ticks": 33822,
            "time": 14.572162458984375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.21714771093750151,
            "durationTicks": 504,
            "midi": 54,
            "name": "F#3",
            "ticks": 33822,
            "time": 14.572162458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562497,
            "durationTicks": 340,
            "midi": 47,
            "name": "B2",
            "ticks": 33822,
            "time": 14.572162458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624945,
            "durationTicks": 308,
            "midi": 47,
            "name": "B2",
            "ticks": 34163,
            "time": 14.719081842773438,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 54,
            "name": "F#3",
            "ticks": 34327,
            "time": 14.789741018554688,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703125135,
            "durationTicks": 324,
            "midi": 46,
            "name": "A#2",
            "ticks": 34492,
            "time": 14.86083104296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 56,
            "name": "G#3",
            "ticks": 34575,
            "time": 14.896591479492187,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781234,
            "durationTicks": 2026,
            "midi": 58,
            "name": "A#3",
            "ticks": 34837,
            "time": 15.009473821289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 47,
            "name": "B2",
            "ticks": 34837,
            "time": 15.009473821289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 68,
            "name": "G#4",
            "ticks": 35852,
            "time": 15.44678518359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 77,
            "name": "F5",
            "ticks": 35852,
            "time": 15.44678518359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 47,
            "name": "B2",
            "ticks": 35852,
            "time": 15.44678518359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019531,
            "durationTicks": 329,
            "midi": 47,
            "name": "B2",
            "ticks": 36192,
            "time": 15.593273718750002,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.20508394921874995,
            "durationTicks": 476,
            "midi": 66,
            "name": "F#4",
            "ticks": 36357,
            "time": 15.664363743164063,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2180094082031232,
            "durationTicks": 506,
            "midi": 75,
            "name": "D#5",
            "ticks": 36357,
            "time": 15.664363743164063,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15553635644531383,
            "durationTicks": 361,
            "midi": 47,
            "name": "B2",
            "ticks": 36522,
            "time": 15.735453767578125,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.23308911035156044,
            "durationTicks": 541,
            "midi": 65,
            "name": "F4",
            "ticks": 36868,
            "time": 15.88452739453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23308911035156044,
            "durationTicks": 541,
            "midi": 73,
            "name": "C#5",
            "ticks": 36868,
            "time": 15.88452739453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.45196021582031065,
            "durationTicks": 1049,
            "midi": 53,
            "name": "F3",
            "ticks": 36868,
            "time": 15.88452739453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 36868,
            "time": 15.88452739453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144531277,
            "durationTicks": 233,
            "midi": 65,
            "name": "F4",
            "ticks": 37410,
            "time": 16.118047353515625,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093750117,
            "durationTicks": 248,
            "midi": 73,
            "name": "C#5",
            "ticks": 37410,
            "time": 16.118047353515625,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777344074,
            "durationTicks": 243,
            "midi": 66,
            "name": "F#4",
            "ticks": 37659,
            "time": 16.225328663085936,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 75,
            "name": "D#5",
            "ticks": 37659,
            "time": 16.225328663085936,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 68,
            "name": "G#4",
            "ticks": 37918,
            "time": 16.336918458984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 77,
            "name": "F5",
            "ticks": 37918,
            "time": 16.336918458984375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 53,
            "name": "F3",
            "ticks": 37918,
            "time": 16.336918458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 37918,
            "time": 16.336918458984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625122,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 38259,
            "time": 16.483837842773436,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 53,
            "name": "F3",
            "ticks": 38423,
            "time": 16.554497018554688,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 38588,
            "time": 16.62558704296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 54,
            "name": "F#3",
            "ticks": 38671,
            "time": 16.66134747949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 56,
            "name": "G#3",
            "ticks": 38933,
            "time": 16.77422982128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 38933,
            "time": 16.77422982128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 66,
            "name": "F#4",
            "ticks": 39948,
            "time": 17.21154118359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 75,
            "name": "D#5",
            "ticks": 39948,
            "time": 17.21154118359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 46,
            "name": "A#2",
            "ticks": 39948,
            "time": 17.21154118359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019531356,
            "durationTicks": 329,
            "midi": 46,
            "name": "A#2",
            "ticks": 40288,
            "time": 17.35802971875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.20508394921874995,
            "durationTicks": 476,
            "midi": 65,
            "name": "F4",
            "ticks": 40453,
            "time": 17.429119743164062,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.21800940820312675,
            "durationTicks": 506,
            "midi": 73,
            "name": "C#5",
            "ticks": 40453,
            "time": 17.429119743164062,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15553635644531383,
            "durationTicks": 361,
            "midi": 46,
            "name": "A#2",
            "ticks": 40618,
            "time": 17.500209767578124,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 64,
            "name": "E4",
            "ticks": 40964,
            "time": 17.64928339453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 72,
            "name": "C5",
            "ticks": 40964,
            "time": 17.64928339453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203142,
            "durationTicks": 1049,
            "midi": 52,
            "name": "E3",
            "ticks": 40964,
            "time": 17.64928339453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 48,
            "name": "C3",
            "ticks": 40964,
            "time": 17.64928339453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144530921,
            "durationTicks": 233,
            "midi": 64,
            "name": "E4",
            "ticks": 41506,
            "time": 17.882803353515627,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093749762,
            "durationTicks": 248,
            "midi": 72,
            "name": "C5",
            "ticks": 41506,
            "time": 17.882803353515627,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 65,
            "name": "F4",
            "ticks": 41755,
            "time": 17.990084663085938,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 74,
            "name": "D5",
            "ticks": 41755,
            "time": 17.990084663085938,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8784467509765648,
            "durationTicks": 2029,
            "midi": 67,
            "name": "G4",
            "ticks": 42014,
            "time": 18.101674458984373,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8784467509765648,
            "durationTicks": 2029,
            "midi": 76,
            "name": "E5",
            "ticks": 42014,
            "time": 18.101674458984373,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 52,
            "name": "E3",
            "ticks": 42014,
            "time": 18.101674458984373,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 48,
            "name": "C3",
            "ticks": 42014,
            "time": 18.101674458984373,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 48,
            "name": "C3",
            "ticks": 42355,
            "time": 18.248593842773438,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 52,
            "name": "E3",
            "ticks": 42519,
            "time": 18.319253018554686,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703125313,
            "durationTicks": 324,
            "midi": 47,
            "name": "B2",
            "ticks": 42684,
            "time": 18.390343042968748,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1059887636718777,
            "durationTicks": 246,
            "midi": 53,
            "name": "F3",
            "ticks": 42767,
            "time": 18.426103479492188,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.22020432714843707,
            "durationTicks": 509,
            "midi": 55,
            "name": "G3",
            "ticks": 43029,
            "time": 18.538985821289064,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2071528154296871,
            "durationTicks": 479,
            "midi": 48,
            "name": "C3",
            "ticks": 43029,
            "time": 18.538985821289064,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.10108946875000058,
            "durationTicks": 232,
            "midi": 55,
            "name": "G3",
            "ticks": 43539,
            "time": 18.75962587890625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10579452832031322,
            "durationTicks": 241,
            "midi": 57,
            "name": "A3",
            "ticks": 43787,
            "time": 18.867722795898437,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.4498002792968734,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 44044,
            "time": 18.98056193359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4498002792968734,
            "durationTicks": 1011,
            "midi": 79,
            "name": "G5",
            "ticks": 44044,
            "time": 18.98056193359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2096680214843758,
            "durationTicks": 474,
            "midi": 58,
            "name": "A#3",
            "ticks": 44044,
            "time": 18.98056193359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1497212978515634,
            "durationTicks": 339,
            "midi": 48,
            "name": "C3",
            "ticks": 44044,
            "time": 18.98056193359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14636024414062732,
            "durationTicks": 329,
            "midi": 48,
            "name": "C3",
            "ticks": 44384,
            "time": 19.13072728125,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.21288767578124634,
            "durationTicks": 476,
            "midi": 60,
            "name": "C4",
            "ticks": 44549,
            "time": 19.204003423828127,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.16180979492187575,
            "durationTicks": 361,
            "midi": 48,
            "name": "C3",
            "ticks": 44714,
            "time": 19.27753316015625,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.22474714746093838,
            "durationTicks": 511,
            "midi": 69,
            "name": "A4",
            "ticks": 45060,
            "time": 19.4326073984375,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23767260644531163,
            "durationTicks": 541,
            "midi": 77,
            "name": "F5",
            "ticks": 45060,
            "time": 19.4326073984375,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22474714746093838,
            "durationTicks": 511,
            "midi": 41,
            "name": "F2",
            "ticks": 45060,
            "time": 19.4326073984375,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10685046093749762,
            "durationTicks": 248,
            "midi": 57,
            "name": "A3",
            "ticks": 45602,
            "time": 19.670710853515626,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.10685046093749762,
            "durationTicks": 248,
            "midi": 65,
            "name": "F4",
            "ticks": 45602,
            "time": 19.670710853515626,
            "velocity": 0.6456692913385826
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 57,
            "name": "A3",
            "ticks": 45851,
            "time": 19.777992163085937,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 65,
            "name": "F4",
            "ticks": 45851,
            "time": 19.777992163085937,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 57,
            "name": "A3",
            "ticks": 46110,
            "time": 19.889581958984376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 65,
            "name": "F4",
            "ticks": 46110,
            "time": 19.889581958984376,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20422225195312294,
            "durationTicks": 474,
            "midi": 41,
            "name": "F2",
            "ticks": 46110,
            "time": 19.889581958984376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.10641961230468766,
            "durationTicks": 247,
            "midi": 57,
            "name": "A3",
            "ticks": 46615,
            "time": 20.107160518554686,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.10641961230468766,
            "durationTicks": 247,
            "midi": 65,
            "name": "F4",
            "ticks": 46615,
            "time": 20.107160518554686,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.11245149316406255,
            "durationTicks": 261,
            "midi": 57,
            "name": "A3",
            "ticks": 46863,
            "time": 20.214010979492187,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.11245149316406255,
            "durationTicks": 261,
            "midi": 65,
            "name": "F4",
            "ticks": 46863,
            "time": 20.214010979492187,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.21930195410156017,
            "durationTicks": 509,
            "midi": 57,
            "name": "A3",
            "ticks": 47125,
            "time": 20.326893321289063,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.21930195410156017,
            "durationTicks": 509,
            "midi": 65,
            "name": "F4",
            "ticks": 47125,
            "time": 20.326893321289063,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 47125,
            "time": 20.326893321289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.10641961230468766,
            "durationTicks": 247,
            "midi": 57,
            "name": "A3",
            "ticks": 47635,
            "time": 20.546626124023437,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.10641961230468766,
            "durationTicks": 247,
            "midi": 65,
            "name": "F4",
            "ticks": 47635,
            "time": 20.546626124023437,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.11029724999999857,
            "durationTicks": 256,
            "midi": 57,
            "name": "A3",
            "ticks": 47883,
            "time": 20.653476584960938,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.11029724999999857,
            "durationTicks": 256,
            "midi": 65,
            "name": "F4",
            "ticks": 47883,
            "time": 20.653476584960938,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 57,
            "name": "A3",
            "ticks": 48140,
            "time": 20.76420468359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 65,
            "name": "F4",
            "ticks": 48140,
            "time": 20.76420468359375,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 43,
            "name": "G2",
            "ticks": 48140,
            "time": 20.76420468359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.20508394921874995,
            "durationTicks": 476,
            "midi": 57,
            "name": "A3",
            "ticks": 48645,
            "time": 20.981783243164063,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2180094082031232,
            "durationTicks": 506,
            "midi": 65,
            "name": "F4",
            "ticks": 48645,
            "time": 20.981783243164063,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.20508394921874995,
            "durationTicks": 476,
            "midi": 45,
            "name": "A2",
            "ticks": 48645,
            "time": 20.981783243164063,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 70,
            "name": "A#4",
            "ticks": 49156,
            "time": 21.20194689453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 62,
            "name": "D4",
            "ticks": 49156,
            "time": 21.20194689453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 49156,
            "time": 21.20194689453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.43688051367187697,
            "durationTicks": 1014,
            "midi": 65,
            "name": "F4",
            "ticks": 50206,
            "time": 21.654337958984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.43688051367187697,
            "durationTicks": 1014,
            "midi": 58,
            "name": "A#3",
            "ticks": 50206,
            "time": 21.654337958984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 50206,
            "time": 21.654337958984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625122,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 50547,
            "time": 21.801257342773436,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 50876,
            "time": 21.94300654296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 51221,
            "time": 22.09164932128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 51221,
            "time": 22.09164932128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 62,
            "name": "D4",
            "ticks": 51979,
            "time": 22.418232584960936,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 51979,
            "time": 22.418232584960936,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.10383452050781017,
            "durationTicks": 241,
            "midi": 62,
            "name": "D4",
            "ticks": 52236,
            "time": 22.528960683593752,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.11029724999999857,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 52236,
            "time": 22.528960683593752,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.20422225195312294,
            "durationTicks": 474,
            "midi": 46,
            "name": "A#2",
            "ticks": 52236,
            "time": 22.528960683593752,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 63,
            "name": "D#4",
            "ticks": 52493,
            "time": 22.639688782226564,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230468411,
            "durationTicks": 247,
            "midi": 72,
            "name": "C5",
            "ticks": 52493,
            "time": 22.639688782226564,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.09995688281250281,
            "durationTicks": 232,
            "midi": 65,
            "name": "F4",
            "ticks": 52741,
            "time": 22.74653924316406,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230468766,
            "durationTicks": 247,
            "midi": 74,
            "name": "D5",
            "ticks": 52741,
            "time": 22.74653924316406,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 66,
            "name": "F#4",
            "ticks": 52989,
            "time": 22.853389704101563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 75,
            "name": "D#5",
            "ticks": 52989,
            "time": 22.853389704101563,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8892715781250011,
            "durationTicks": 2064,
            "midi": 68,
            "name": "G#4",
            "ticks": 53252,
            "time": 22.96670289453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.8892715781250011,
            "durationTicks": 2064,
            "midi": 77,
            "name": "F5",
            "ticks": 53252,
            "time": 22.96670289453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 44,
            "name": "G#2",
            "ticks": 53252,
            "time": 22.96670289453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 58,
            "name": "A#3",
            "ticks": 54043,
            "time": 23.307504163085937,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062368,
            "durationTicks": 242,
            "midi": 58,
            "name": "A#3",
            "ticks": 54302,
            "time": 23.419093958984377,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.14648853515624793,
            "durationTicks": 340,
            "midi": 44,
            "name": "G#2",
            "ticks": 54302,
            "time": 23.419093958984377,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.0995260341796893,
            "durationTicks": 231,
            "midi": 60,
            "name": "C4",
            "ticks": 54560,
            "time": 23.53025290625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 44,
            "name": "G#2",
            "ticks": 54643,
            "time": 23.566013342773438,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250281,
            "durationTicks": 232,
            "midi": 62,
            "name": "D4",
            "ticks": 54807,
            "time": 23.636672518554686,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 42,
            "name": "F#2",
            "ticks": 54972,
            "time": 23.70776254296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 63,
            "name": "D#4",
            "ticks": 55055,
            "time": 23.743522979492187,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781234,
            "durationTicks": 2026,
            "midi": 65,
            "name": "F4",
            "ticks": 55317,
            "time": 23.856405321289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 44,
            "name": "G#2",
            "ticks": 55317,
            "time": 23.856405321289063,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 68,
            "name": "G#4",
            "ticks": 55827,
            "time": 24.076138124023437,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.21714771093749974,
            "durationTicks": 504,
            "midi": 77,
            "name": "F5",
            "ticks": 55827,
            "time": 24.076138124023437,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.1374407138671856,
            "durationTicks": 319,
            "midi": 68,
            "name": "G#4",
            "ticks": 56332,
            "time": 24.29371668359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.14605768652343798,
            "durationTicks": 339,
            "midi": 77,
            "name": "F5",
            "ticks": 56332,
            "time": 24.29371668359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 44,
            "name": "G#2",
            "ticks": 56332,
            "time": 24.29371668359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13313222753906118,
            "durationTicks": 309,
            "midi": 70,
            "name": "A#4",
            "ticks": 56672,
            "time": 24.440205218750002,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14174920019531,
            "durationTicks": 329,
            "midi": 78,
            "name": "F#5",
            "ticks": 56672,
            "time": 24.440205218750002,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 72,
            "name": "C5",
            "ticks": 57002,
            "time": 24.582385267578125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906144,
            "durationTicks": 341,
            "midi": 80,
            "name": "G#5",
            "ticks": 57002,
            "time": 24.582385267578125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 73,
            "name": "C#5",
            "ticks": 57348,
            "time": 24.73145889453125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 82,
            "name": "A#5",
            "ticks": 57348,
            "time": 24.73145889453125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 42,
            "name": "F#2",
            "ticks": 57348,
            "time": 24.73145889453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562559,
            "durationTicks": 258,
            "midi": 54,
            "name": "F#3",
            "ticks": 58139,
            "time": 25.072260163085936,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062723,
            "durationTicks": 242,
            "midi": 54,
            "name": "F#3",
            "ticks": 58398,
            "time": 25.183849958984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 42,
            "name": "F#2",
            "ticks": 58398,
            "time": 25.183849958984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09952603417968575,
            "durationTicks": 231,
            "midi": 56,
            "name": "G#3",
            "ticks": 58656,
            "time": 25.29500890625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890625122,
            "durationTicks": 308,
            "midi": 42,
            "name": "F#2",
            "ticks": 58739,
            "time": 25.330769342773436,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 58,
            "name": "A#3",
            "ticks": 58903,
            "time": 25.401428518554688,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 40,
            "name": "E2",
            "ticks": 59068,
            "time": 25.47251854296875,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 60,
            "name": "C4",
            "ticks": 59151,
            "time": 25.50827897949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.43688051367187697,
            "durationTicks": 1014,
            "midi": 61,
            "name": "C#4",
            "ticks": 59413,
            "time": 25.621161321289062,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.23265826171875048,
            "durationTicks": 540,
            "midi": 42,
            "name": "F#2",
            "ticks": 59413,
            "time": 25.621161321289062,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.43558796777344,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 60428,
            "time": 26.05847268359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344,
            "durationTicks": 1011,
            "midi": 85,
            "name": "C#6",
            "ticks": 60428,
            "time": 26.05847268359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.23050401855469005,
            "durationTicks": 535,
            "midi": 42,
            "name": "F#2",
            "ticks": 60428,
            "time": 26.05847268359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.43558796777344,
            "durationTicks": 1011,
            "midi": 54,
            "name": "F#3",
            "ticks": 60428,
            "time": 26.05847268359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.18741915527343878,
            "durationTicks": 435,
            "midi": 76,
            "name": "E5",
            "ticks": 61444,
            "time": 26.49621489453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.18741915527343878,
            "durationTicks": 435,
            "midi": 84,
            "name": "C6",
            "ticks": 61444,
            "time": 26.49621489453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.8892715781250011,
            "durationTicks": 2064,
            "midi": 53,
            "name": "F3",
            "ticks": 61444,
            "time": 26.49621489453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 41,
            "name": "F2",
            "ticks": 61444,
            "time": 26.49621489453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 72,
            "name": "C5",
            "ticks": 62494,
            "time": 26.948605958984373,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 81,
            "name": "A5",
            "ticks": 62494,
            "time": 26.948605958984373,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 41,
            "name": "F2",
            "ticks": 62494,
            "time": 26.948605958984373,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625122,
            "durationTicks": 308,
            "midi": 41,
            "name": "F2",
            "ticks": 62835,
            "time": 27.09552534277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 39,
            "name": "D#2",
            "ticks": 63164,
            "time": 27.23727454296875,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.8728993300781234,
            "durationTicks": 2026,
            "midi": 57,
            "name": "A3",
            "ticks": 63509,
            "time": 27.385917321289064,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.23265826171874693,
            "durationTicks": 540,
            "midi": 41,
            "name": "F2",
            "ticks": 63509,
            "time": 27.385917321289064,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 69,
            "name": "A4",
            "ticks": 64524,
            "time": 27.82322868359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 64524,
            "time": 27.82322868359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2305040185546865,
            "durationTicks": 535,
            "midi": 41,
            "name": "F2",
            "ticks": 64524,
            "time": 27.82322868359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 70,
            "name": "A#4",
            "ticks": 65540,
            "time": 28.260970894531248,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 78,
            "name": "F#5",
            "ticks": 65540,
            "time": 28.260970894531248,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1529512646484399,
            "durationTicks": 355,
            "midi": 40,
            "name": "E2",
            "ticks": 65540,
            "time": 28.260970894531248,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.1339939248046882,
            "durationTicks": 311,
            "midi": 46,
            "name": "A#2",
            "ticks": 65916,
            "time": 28.42296998046875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 49,
            "name": "C#3",
            "ticks": 66248,
            "time": 28.5660117265625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1378715624999991,
            "durationTicks": 320,
            "midi": 52,
            "name": "E3",
            "ticks": 66590,
            "time": 28.713361958984375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625122,
            "durationTicks": 308,
            "midi": 58,
            "name": "A#3",
            "ticks": 66931,
            "time": 28.860281342773437,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 61,
            "name": "C#4",
            "ticks": 67260,
            "time": 29.00203054296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.20637649511718692,
            "durationTicks": 479,
            "midi": 64,
            "name": "E4",
            "ticks": 67605,
            "time": 29.150673321289062,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344,
            "durationTicks": 1011,
            "midi": 73,
            "name": "C#5",
            "ticks": 68620,
            "time": 29.58798468359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344,
            "durationTicks": 1011,
            "midi": 82,
            "name": "A#5",
            "ticks": 68620,
            "time": 29.58798468359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 61,
            "name": "C#4",
            "ticks": 68620,
            "time": 29.58798468359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.18741915527343522,
            "durationTicks": 435,
            "midi": 72,
            "name": "C5",
            "ticks": 69636,
            "time": 30.02572689453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.18741915527343522,
            "durationTicks": 435,
            "midi": 81,
            "name": "A5",
            "ticks": 69636,
            "time": 30.02572689453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 65,
            "name": "F4",
            "ticks": 69636,
            "time": 30.02572689453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 69,
            "name": "A4",
            "ticks": 70686,
            "time": 30.478117958984377,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 77,
            "name": "F5",
            "ticks": 70686,
            "time": 30.478117958984377,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14648853515624793,
            "durationTicks": 340,
            "midi": 41,
            "name": "F2",
            "ticks": 70686,
            "time": 30.478117958984377,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.1413183515624965,
            "durationTicks": 328,
            "midi": 41,
            "name": "F2",
            "ticks": 71027,
            "time": 30.62503734277344,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.1482119296874984,
            "durationTicks": 344,
            "midi": 41,
            "name": "F2",
            "ticks": 71356,
            "time": 30.766786542968752,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.43688051367187697,
            "durationTicks": 1014,
            "midi": 53,
            "name": "F3",
            "ticks": 71701,
            "time": 30.91542932128906,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.43688051367187697,
            "durationTicks": 1014,
            "midi": 57,
            "name": "A3",
            "ticks": 71701,
            "time": 30.91542932128906,
            "velocity": 0.7637795275590551
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 71701,
            "time": 30.91542932128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 69,
            "name": "A4",
            "ticks": 72716,
            "time": 31.35274068359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 72716,
            "time": 31.35274068359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 70,
            "name": "A#4",
            "ticks": 73732,
            "time": 31.79048289453125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 78,
            "name": "F#5",
            "ticks": 73732,
            "time": 31.79048289453125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15295126464843634,
            "durationTicks": 355,
            "midi": 40,
            "name": "E2",
            "ticks": 73732,
            "time": 31.79048289453125,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.1339939248046882,
            "durationTicks": 311,
            "midi": 46,
            "name": "A#2",
            "ticks": 74108,
            "time": 31.95248198046875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 49,
            "name": "C#3",
            "ticks": 74440,
            "time": 32.0955237265625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13787156249999555,
            "durationTicks": 320,
            "midi": 52,
            "name": "E3",
            "ticks": 74782,
            "time": 32.242873958984376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 58,
            "name": "A#3",
            "ticks": 75123,
            "time": 32.38979334277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 61,
            "name": "C#4",
            "ticks": 75452,
            "time": 32.53154254296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 64,
            "name": "E4",
            "ticks": 75797,
            "time": 32.68018532128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 73,
            "name": "C#5",
            "ticks": 76812,
            "time": 33.11749668359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 82,
            "name": "A#5",
            "ticks": 76812,
            "time": 33.11749668359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 61,
            "name": "C#4",
            "ticks": 76812,
            "time": 33.11749668359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.18741915527343878,
            "durationTicks": 435,
            "midi": 72,
            "name": "C5",
            "ticks": 77828,
            "time": 33.55523889453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.18741915527343878,
            "durationTicks": 435,
            "midi": 81,
            "name": "A5",
            "ticks": 77828,
            "time": 33.55523889453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 65,
            "name": "F4",
            "ticks": 77828,
            "time": 33.55523889453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 69,
            "name": "A4",
            "ticks": 78878,
            "time": 34.007629958984374,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 77,
            "name": "F5",
            "ticks": 78878,
            "time": 34.007629958984374,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 41,
            "name": "F2",
            "ticks": 78878,
            "time": 34.007629958984374,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.1413183515625036,
            "durationTicks": 328,
            "midi": 41,
            "name": "F2",
            "ticks": 79219,
            "time": 34.154549342773436,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.1482119296874984,
            "durationTicks": 344,
            "midi": 41,
            "name": "F2",
            "ticks": 79548,
            "time": 34.29629854296875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 53,
            "name": "F3",
            "ticks": 79893,
            "time": 34.444941321289065,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 57,
            "name": "A3",
            "ticks": 79893,
            "time": 34.444941321289065,
            "velocity": 0.7637795275590551
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 79893,
            "time": 34.444941321289065,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 69,
            "name": "A4",
            "ticks": 80908,
            "time": 34.88225268359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 80908,
            "time": 34.88225268359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 66,
            "name": "F#4",
            "ticks": 81924,
            "time": 35.31999489453125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 75,
            "name": "D#5",
            "ticks": 81924,
            "time": 35.31999489453125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.4519602158203142,
            "durationTicks": 1049,
            "midi": 54,
            "name": "F#3",
            "ticks": 81924,
            "time": 35.31999489453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 47,
            "name": "B2",
            "ticks": 81924,
            "time": 35.31999489453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 54,
            "name": "F#3",
            "ticks": 82974,
            "time": 35.77238595898437,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 47,
            "name": "B2",
            "ticks": 82974,
            "time": 35.77238595898437,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 47,
            "name": "B2",
            "ticks": 83315,
            "time": 35.91930534277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250636,
            "durationTicks": 232,
            "midi": 54,
            "name": "F#3",
            "ticks": 83479,
            "time": 35.989964518554686,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 46,
            "name": "A#2",
            "ticks": 83644,
            "time": 36.06105454296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 53,
            "name": "F3",
            "ticks": 83727,
            "time": 36.09681497949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781198,
            "durationTicks": 2026,
            "midi": 54,
            "name": "F#3",
            "ticks": 83989,
            "time": 36.20969732128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 47,
            "name": "B2",
            "ticks": 83989,
            "time": 36.20969732128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 85004,
            "time": 36.647008683593754,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 78,
            "name": "F#5",
            "ticks": 85004,
            "time": 36.647008683593754,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 47,
            "name": "B2",
            "ticks": 85004,
            "time": 36.647008683593754,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019530646,
            "durationTicks": 329,
            "midi": 47,
            "name": "B2",
            "ticks": 85344,
            "time": 36.793497218750005,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.15553635644531028,
            "durationTicks": 361,
            "midi": 47,
            "name": "B2",
            "ticks": 85674,
            "time": 36.93567726757813,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 70,
            "name": "A#4",
            "ticks": 86020,
            "time": 37.084750894531254,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 77,
            "name": "F5",
            "ticks": 86020,
            "time": 37.084750894531254,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 53,
            "name": "F3",
            "ticks": 86020,
            "time": 37.084750894531254,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 86020,
            "time": 37.084750894531254,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 65,
            "name": "F4",
            "ticks": 87070,
            "time": 37.53714195898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 73,
            "name": "C#5",
            "ticks": 87070,
            "time": 37.53714195898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 53,
            "name": "F3",
            "ticks": 87070,
            "time": 37.53714195898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 87070,
            "time": 37.53714195898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625477,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 87411,
            "time": 37.68406134277343,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249215,
            "durationTicks": 232,
            "midi": 53,
            "name": "F3",
            "ticks": 87575,
            "time": 37.75472051855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 87740,
            "time": 37.82581054296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 51,
            "name": "D#3",
            "ticks": 87823,
            "time": 37.861570979492186,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 88085,
            "time": 37.97445332128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 88085,
            "time": 37.97445332128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 61,
            "name": "C#4",
            "ticks": 89100,
            "time": 38.411764683593745,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 89100,
            "time": 38.411764683593745,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652344153,
            "durationTicks": 339,
            "midi": 46,
            "name": "A#2",
            "ticks": 89100,
            "time": 38.411764683593745,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019532067,
            "durationTicks": 329,
            "midi": 46,
            "name": "A#2",
            "ticks": 89440,
            "time": 38.55825321875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.15553635644531738,
            "durationTicks": 361,
            "midi": 46,
            "name": "A#2",
            "ticks": 89770,
            "time": 38.70043326757812,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.2330891103515711,
            "durationTicks": 541,
            "midi": 64,
            "name": "E4",
            "ticks": 90116,
            "time": 38.849506894531245,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.2330891103515711,
            "durationTicks": 541,
            "midi": 72,
            "name": "C5",
            "ticks": 90116,
            "time": 38.849506894531245,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203213,
            "durationTicks": 1049,
            "midi": 52,
            "name": "E3",
            "ticks": 90116,
            "time": 38.849506894531245,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 48,
            "name": "C3",
            "ticks": 90116,
            "time": 38.849506894531245,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144530921,
            "durationTicks": 233,
            "midi": 64,
            "name": "E4",
            "ticks": 90658,
            "time": 39.083026853515626,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093750117,
            "durationTicks": 248,
            "midi": 72,
            "name": "C5",
            "ticks": 90658,
            "time": 39.083026853515626,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 65,
            "name": "F4",
            "ticks": 90907,
            "time": 39.19030816308594,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562914,
            "durationTicks": 258,
            "midi": 74,
            "name": "D5",
            "ticks": 90907,
            "time": 39.19030816308594,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765568,
            "durationTicks": 2029,
            "midi": 67,
            "name": "G4",
            "ticks": 91166,
            "time": 39.30189795898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765568,
            "durationTicks": 2029,
            "midi": 76,
            "name": "E5",
            "ticks": 91166,
            "time": 39.30189795898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 52,
            "name": "E3",
            "ticks": 91166,
            "time": 39.30189795898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.14648853515624438,
            "durationTicks": 340,
            "midi": 48,
            "name": "C3",
            "ticks": 91166,
            "time": 39.30189795898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 48,
            "name": "C3",
            "ticks": 91507,
            "time": 39.44881734277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250636,
            "durationTicks": 232,
            "midi": 52,
            "name": "E3",
            "ticks": 91671,
            "time": 39.51947651855468,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 47,
            "name": "B2",
            "ticks": 91836,
            "time": 39.59056654296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 53,
            "name": "F3",
            "ticks": 91919,
            "time": 39.62632697949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.21930195410155306,
            "durationTicks": 509,
            "midi": 55,
            "name": "G3",
            "ticks": 92181,
            "time": 39.73920932128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 48,
            "name": "C3",
            "ticks": 92181,
            "time": 39.73920932128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 55,
            "name": "G3",
            "ticks": 92691,
            "time": 39.95894212402344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10383452050781017,
            "durationTicks": 241,
            "midi": 57,
            "name": "A3",
            "ticks": 92939,
            "time": 40.06579258496094,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 93196,
            "time": 40.17652068359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 79,
            "name": "G5",
            "ticks": 93196,
            "time": 40.17652068359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 58,
            "name": "A#3",
            "ticks": 93196,
            "time": 40.17652068359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 48,
            "name": "C3",
            "ticks": 93196,
            "time": 40.17652068359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019530646,
            "durationTicks": 329,
            "midi": 48,
            "name": "C3",
            "ticks": 93536,
            "time": 40.32300921875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.2050839492187464,
            "durationTicks": 476,
            "midi": 60,
            "name": "C4",
            "ticks": 93701,
            "time": 40.394099243164064,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.15553635644531028,
            "durationTicks": 361,
            "midi": 48,
            "name": "C3",
            "ticks": 93866,
            "time": 40.465189267578126,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 69,
            "name": "A4",
            "ticks": 94212,
            "time": 40.61426289453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23308911035155688,
            "durationTicks": 541,
            "midi": 77,
            "name": "F5",
            "ticks": 94212,
            "time": 40.61426289453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 41,
            "name": "F2",
            "ticks": 94212,
            "time": 40.61426289453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.040499771484377334,
            "durationTicks": 94,
            "midi": 53,
            "name": "F3",
            "ticks": 94754,
            "time": 40.847782853515625,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.034037041992192485,
            "durationTicks": 79,
            "midi": 57,
            "name": "A3",
            "ticks": 94754,
            "time": 40.847782853515625,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.040499771484377334,
            "durationTicks": 94,
            "midi": 65,
            "name": "F4",
            "ticks": 94754,
            "time": 40.847782853515625,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.0448082578125053,
            "durationTicks": 104,
            "midi": 54,
            "name": "F#3",
            "ticks": 95003,
            "time": 40.955064163085936,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.0448082578125053,
            "durationTicks": 104,
            "midi": 58,
            "name": "A#3",
            "ticks": 95003,
            "time": 40.955064163085936,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.0448082578125053,
            "durationTicks": 104,
            "midi": 65,
            "name": "F4",
            "ticks": 95003,
            "time": 40.955064163085936,
            "velocity": 0.6771653543307087
          },
          {
            "duration": 0.08487718066406558,
            "durationTicks": 197,
            "midi": 55,
            "name": "G3",
            "ticks": 95262,
            "time": 41.066653958984375,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.08487718066406558,
            "durationTicks": 197,
            "midi": 58,
            "name": "A#3",
            "ticks": 95262,
            "time": 41.066653958984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.08487718066406558,
            "durationTicks": 197,
            "midi": 65,
            "name": "F4",
            "ticks": 95262,
            "time": 41.066653958984375,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 41,
            "name": "F2",
            "ticks": 95262,
            "time": 41.066653958984375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 51,
            "name": "D#3",
            "ticks": 95262,
            "time": 41.066653958984375,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 55,
            "name": "G3",
            "ticks": 95767,
            "time": 41.28423251855469,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 58,
            "name": "A#3",
            "ticks": 95767,
            "time": 41.28423251855469,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 65,
            "name": "F4",
            "ticks": 95767,
            "time": 41.28423251855469,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.04610080371094227,
            "durationTicks": 107,
            "midi": 55,
            "name": "G3",
            "ticks": 96015,
            "time": 41.39108297949218,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.05256353320312712,
            "durationTicks": 122,
            "midi": 58,
            "name": "A#3",
            "ticks": 96015,
            "time": 41.39108297949218,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.04610080371094227,
            "durationTicks": 107,
            "midi": 65,
            "name": "F4",
            "ticks": 96015,
            "time": 41.39108297949218,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.08703142382812956,
            "durationTicks": 202,
            "midi": 56,
            "name": "G#3",
            "ticks": 96277,
            "time": 41.50396532128906,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.08703142382812956,
            "durationTicks": 202,
            "midi": 60,
            "name": "C4",
            "ticks": 96277,
            "time": 41.50396532128906,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.08703142382812956,
            "durationTicks": 202,
            "midi": 65,
            "name": "F4",
            "ticks": 96277,
            "time": 41.50396532128906,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 96277,
            "time": 41.50396532128906,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.21930195410156728,
            "durationTicks": 509,
            "midi": 51,
            "name": "D#3",
            "ticks": 96277,
            "time": 41.50396532128906,
            "velocity": 0.7637795275590551
          },
          {
            "duration": 0.04006892285156738,
            "durationTicks": 93,
            "midi": 56,
            "name": "G#3",
            "ticks": 96787,
            "time": 41.723698124023436,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.04006892285156738,
            "durationTicks": 93,
            "midi": 60,
            "name": "C4",
            "ticks": 96787,
            "time": 41.723698124023436,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.04006892285156738,
            "durationTicks": 93,
            "midi": 65,
            "name": "F4",
            "ticks": 96787,
            "time": 41.723698124023436,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.04394656054687118,
            "durationTicks": 102,
            "midi": 56,
            "name": "G#3",
            "ticks": 97035,
            "time": 41.83054858496094,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.05040929003906314,
            "durationTicks": 117,
            "midi": 60,
            "name": "C4",
            "ticks": 97035,
            "time": 41.83054858496094,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.04394656054687118,
            "durationTicks": 102,
            "midi": 65,
            "name": "F4",
            "ticks": 97035,
            "time": 41.83054858496094,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.08487718066405847,
            "durationTicks": 197,
            "midi": 57,
            "name": "A3",
            "ticks": 97292,
            "time": 41.94127668359375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.08487718066405847,
            "durationTicks": 197,
            "midi": 61,
            "name": "C#4",
            "ticks": 97292,
            "time": 41.94127668359375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.08487718066405847,
            "durationTicks": 197,
            "midi": 65,
            "name": "F4",
            "ticks": 97292,
            "time": 41.94127668359375,
            "velocity": 0.5905511811023622
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 43,
            "name": "G2",
            "ticks": 97292,
            "time": 41.94127668359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 52,
            "name": "E3",
            "ticks": 97292,
            "time": 41.94127668359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.08573887792969259,
            "durationTicks": 199,
            "midi": 57,
            "name": "A3",
            "ticks": 97797,
            "time": 42.15885524316406,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.09909518554687935,
            "durationTicks": 230,
            "midi": 61,
            "name": "C#4",
            "ticks": 97797,
            "time": 42.15885524316406,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.09909518554687935,
            "durationTicks": 230,
            "midi": 65,
            "name": "F4",
            "ticks": 97797,
            "time": 42.15885524316406,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.2050839492187535,
            "durationTicks": 476,
            "midi": 45,
            "name": "A2",
            "ticks": 97797,
            "time": 42.15885524316406,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2050839492187535,
            "durationTicks": 476,
            "midi": 53,
            "name": "F3",
            "ticks": 97797,
            "time": 42.15885524316406,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 70,
            "name": "A#4",
            "ticks": 98308,
            "time": 42.37901889453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 62,
            "name": "D4",
            "ticks": 98308,
            "time": 42.37901889453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 98308,
            "time": 42.37901889453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 65,
            "name": "F4",
            "ticks": 99358,
            "time": 42.83140995898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 58,
            "name": "A#3",
            "ticks": 99358,
            "time": 42.83140995898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.14648853515624438,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 99358,
            "time": 42.83140995898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 99699,
            "time": 42.97832934277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 100028,
            "time": 43.120078542968756,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 100373,
            "time": 43.268721321289064,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 100373,
            "time": 43.268721321289064,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.11029724999999502,
            "durationTicks": 256,
            "midi": 62,
            "name": "D4",
            "ticks": 101131,
            "time": 43.59530458496094,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029724999999502,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 101131,
            "time": 43.59530458496094,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.10383452050781017,
            "durationTicks": 241,
            "midi": 62,
            "name": "D4",
            "ticks": 101388,
            "time": 43.706032683593754,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.11029724999999502,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 101388,
            "time": 43.706032683593754,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.20422225195311938,
            "durationTicks": 474,
            "midi": 46,
            "name": "A#2",
            "ticks": 101388,
            "time": 43.706032683593754,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 63,
            "name": "D#4",
            "ticks": 101645,
            "time": 43.81676078222657,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230468411,
            "durationTicks": 247,
            "midi": 72,
            "name": "C5",
            "ticks": 101645,
            "time": 43.81676078222657,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 65,
            "name": "F4",
            "ticks": 101893,
            "time": 43.92361124316407,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230468411,
            "durationTicks": 247,
            "midi": 74,
            "name": "D5",
            "ticks": 101893,
            "time": 43.92361124316407,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777344429,
            "durationTicks": 243,
            "midi": 66,
            "name": "F#4",
            "ticks": 102141,
            "time": 44.03046170410156,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562914,
            "durationTicks": 258,
            "midi": 75,
            "name": "D#5",
            "ticks": 102141,
            "time": 44.03046170410156,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 68,
            "name": "G#4",
            "ticks": 102404,
            "time": 44.143774894531255,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 77,
            "name": "F5",
            "ticks": 102404,
            "time": 44.143774894531255,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 44,
            "name": "G#2",
            "ticks": 102404,
            "time": 44.143774894531255,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 58,
            "name": "A#3",
            "ticks": 103195,
            "time": 44.48457616308594,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062012,
            "durationTicks": 242,
            "midi": 58,
            "name": "A#3",
            "ticks": 103454,
            "time": 44.59616595898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 44,
            "name": "G#2",
            "ticks": 103454,
            "time": 44.59616595898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.0995260341796893,
            "durationTicks": 231,
            "midi": 60,
            "name": "C4",
            "ticks": 103712,
            "time": 44.70732490625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 44,
            "name": "G#2",
            "ticks": 103795,
            "time": 44.74308534277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 62,
            "name": "D4",
            "ticks": 103959,
            "time": 44.81374451855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 42,
            "name": "F#2",
            "ticks": 104124,
            "time": 44.884834542968754,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 63,
            "name": "D#4",
            "ticks": 104207,
            "time": 44.92059497949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 65,
            "name": "F4",
            "ticks": 104469,
            "time": 45.03347732128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 44,
            "name": "G#2",
            "ticks": 104469,
            "time": 45.03347732128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 68,
            "name": "G#4",
            "ticks": 104979,
            "time": 45.25321012402344,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 77,
            "name": "F5",
            "ticks": 104979,
            "time": 45.25321012402344,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.1374407138671856,
            "durationTicks": 319,
            "midi": 68,
            "name": "G#4",
            "ticks": 105484,
            "time": 45.47078868359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 77,
            "name": "F5",
            "ticks": 105484,
            "time": 45.47078868359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 44,
            "name": "G#2",
            "ticks": 105484,
            "time": 45.47078868359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13313222753905762,
            "durationTicks": 309,
            "midi": 70,
            "name": "A#4",
            "ticks": 105824,
            "time": 45.617277218750004,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14174920019531356,
            "durationTicks": 329,
            "midi": 78,
            "name": "F#5",
            "ticks": 105824,
            "time": 45.617277218750004,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 72,
            "name": "C5",
            "ticks": 106154,
            "time": 45.75945726757813,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906144,
            "durationTicks": 341,
            "midi": 80,
            "name": "G#5",
            "ticks": 106154,
            "time": 45.75945726757813,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 73,
            "name": "C#5",
            "ticks": 106500,
            "time": 45.90853089453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 82,
            "name": "A#5",
            "ticks": 106500,
            "time": 45.90853089453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 42,
            "name": "F#2",
            "ticks": 106500,
            "time": 45.90853089453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562914,
            "durationTicks": 258,
            "midi": 54,
            "name": "F#3",
            "ticks": 107291,
            "time": 46.24933216308594,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062723,
            "durationTicks": 242,
            "midi": 54,
            "name": "F#3",
            "ticks": 107550,
            "time": 46.36092195898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 42,
            "name": "F#2",
            "ticks": 107550,
            "time": 46.36092195898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.0995260341796893,
            "durationTicks": 231,
            "midi": 56,
            "name": "G#3",
            "ticks": 107808,
            "time": 46.47208090625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890625477,
            "durationTicks": 308,
            "midi": 42,
            "name": "F#2",
            "ticks": 107891,
            "time": 46.50784134277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 58,
            "name": "A#3",
            "ticks": 108055,
            "time": 46.57850051855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 40,
            "name": "E2",
            "ticks": 108220,
            "time": 46.64959054296875,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 60,
            "name": "C4",
            "ticks": 108303,
            "time": 46.68535097949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 61,
            "name": "C#4",
            "ticks": 108565,
            "time": 46.79823332128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.23265826171874693,
            "durationTicks": 540,
            "midi": 42,
            "name": "F#2",
            "ticks": 108565,
            "time": 46.79823332128907,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 73,
            "name": "C#5",
            "ticks": 109323,
            "time": 47.12481658496094,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 82,
            "name": "A#5",
            "ticks": 109323,
            "time": 47.12481658496094,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.1374407138671856,
            "durationTicks": 319,
            "midi": 73,
            "name": "C#5",
            "ticks": 109580,
            "time": 47.23554468359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.14605768652344153,
            "durationTicks": 339,
            "midi": 82,
            "name": "A#5",
            "ticks": 109580,
            "time": 47.23554468359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.23050401855469005,
            "durationTicks": 535,
            "midi": 42,
            "name": "F#2",
            "ticks": 109580,
            "time": 47.23554468359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 54,
            "name": "F#3",
            "ticks": 109580,
            "time": 47.23554468359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13313222753906473,
            "durationTicks": 309,
            "midi": 72,
            "name": "C5",
            "ticks": 109920,
            "time": 47.38203321875,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14174920019531356,
            "durationTicks": 329,
            "midi": 80,
            "name": "G#5",
            "ticks": 109920,
            "time": 47.38203321875,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 70,
            "name": "A#4",
            "ticks": 110250,
            "time": 47.524213267578126,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906144,
            "durationTicks": 341,
            "midi": 78,
            "name": "F#5",
            "ticks": 110250,
            "time": 47.524213267578126,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15295126464843634,
            "durationTicks": 355,
            "midi": 72,
            "name": "C5",
            "ticks": 110596,
            "time": 47.67328689453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.16156823730468517,
            "durationTicks": 375,
            "midi": 80,
            "name": "G#5",
            "ticks": 110596,
            "time": 47.67328689453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.5988795996093756,
            "durationTicks": 1390,
            "midi": 53,
            "name": "F3",
            "ticks": 110596,
            "time": 47.67328689453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 49,
            "name": "C#3",
            "ticks": 110596,
            "time": 47.67328689453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 70,
            "name": "A#4",
            "ticks": 111304,
            "time": 47.978327726562505,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906144,
            "durationTicks": 341,
            "midi": 78,
            "name": "F#5",
            "ticks": 111304,
            "time": 47.978327726562505,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 68,
            "name": "G#4",
            "ticks": 111646,
            "time": 48.125677958984376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 77,
            "name": "F5",
            "ticks": 111646,
            "time": 48.125677958984376,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 49,
            "name": "C#3",
            "ticks": 111646,
            "time": 48.125677958984376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625477,
            "durationTicks": 308,
            "midi": 53,
            "name": "F3",
            "ticks": 111987,
            "time": 48.27259734277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890625477,
            "durationTicks": 308,
            "midi": 49,
            "name": "C#3",
            "ticks": 111987,
            "time": 48.27259734277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 51,
            "name": "D#3",
            "ticks": 112316,
            "time": 48.41434654296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 48,
            "name": "C3",
            "ticks": 112316,
            "time": 48.41434654296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 112661,
            "time": 48.562989321289066,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 49,
            "name": "C#3",
            "ticks": 112661,
            "time": 48.562989321289066,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 68,
            "name": "G#4",
            "ticks": 113676,
            "time": 49.00030068359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 113676,
            "time": 49.00030068359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 49,
            "name": "C#3",
            "ticks": 113676,
            "time": 49.00030068359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 66,
            "name": "F#4",
            "ticks": 114692,
            "time": 49.43804289453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 75,
            "name": "D#5",
            "ticks": 114692,
            "time": 49.43804289453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203142,
            "durationTicks": 1049,
            "midi": 54,
            "name": "F#3",
            "ticks": 114692,
            "time": 49.43804289453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 47,
            "name": "B2",
            "ticks": 114692,
            "time": 49.43804289453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144531632,
            "durationTicks": 233,
            "midi": 66,
            "name": "F#4",
            "ticks": 115234,
            "time": 49.671562853515624,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093750117,
            "durationTicks": 248,
            "midi": 75,
            "name": "D#5",
            "ticks": 115234,
            "time": 49.671562853515624,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 68,
            "name": "G#4",
            "ticks": 115483,
            "time": 49.77884416308594,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 77,
            "name": "F5",
            "ticks": 115483,
            "time": 49.77884416308594,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 70,
            "name": "A#4",
            "ticks": 115742,
            "time": 49.890433958984374,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 78,
            "name": "F#5",
            "ticks": 115742,
            "time": 49.890433958984374,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 54,
            "name": "F#3",
            "ticks": 115742,
            "time": 49.890433958984374,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 47,
            "name": "B2",
            "ticks": 115742,
            "time": 49.890433958984374,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 47,
            "name": "B2",
            "ticks": 116083,
            "time": 50.03735334277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 54,
            "name": "F#3",
            "ticks": 116247,
            "time": 50.10801251855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 46,
            "name": "A#2",
            "ticks": 116412,
            "time": 50.17910254296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 56,
            "name": "G#3",
            "ticks": 116495,
            "time": 50.21486297949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 58,
            "name": "A#3",
            "ticks": 116757,
            "time": 50.327745321289065,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 47,
            "name": "B2",
            "ticks": 116757,
            "time": 50.327745321289065,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 68,
            "name": "G#4",
            "ticks": 117772,
            "time": 50.765056683593755,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 77,
            "name": "F5",
            "ticks": 117772,
            "time": 50.765056683593755,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 47,
            "name": "B2",
            "ticks": 117772,
            "time": 50.765056683593755,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019530646,
            "durationTicks": 329,
            "midi": 47,
            "name": "B2",
            "ticks": 118112,
            "time": 50.91154521875001,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.2050839492187464,
            "durationTicks": 476,
            "midi": 66,
            "name": "F#4",
            "ticks": 118277,
            "time": 50.98263524316407,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2180094082031232,
            "durationTicks": 506,
            "midi": 75,
            "name": "D#5",
            "ticks": 118277,
            "time": 50.98263524316407,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15553635644531028,
            "durationTicks": 361,
            "midi": 47,
            "name": "B2",
            "ticks": 118442,
            "time": 51.05372526757813,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.23308911035155688,
            "durationTicks": 541,
            "midi": 65,
            "name": "F4",
            "ticks": 118788,
            "time": 51.202798894531256,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23308911035155688,
            "durationTicks": 541,
            "midi": 73,
            "name": "C#5",
            "ticks": 118788,
            "time": 51.202798894531256,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 53,
            "name": "F3",
            "ticks": 118788,
            "time": 51.202798894531256,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 118788,
            "time": 51.202798894531256,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144530921,
            "durationTicks": 233,
            "midi": 65,
            "name": "F4",
            "ticks": 119330,
            "time": 51.43631885351563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093749406,
            "durationTicks": 248,
            "midi": 73,
            "name": "C#5",
            "ticks": 119330,
            "time": 51.43631885351563,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 66,
            "name": "F#4",
            "ticks": 119579,
            "time": 51.54360016308594,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 75,
            "name": "D#5",
            "ticks": 119579,
            "time": 51.54360016308594,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 68,
            "name": "G#4",
            "ticks": 119838,
            "time": 51.65518995898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 77,
            "name": "F5",
            "ticks": 119838,
            "time": 51.65518995898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 53,
            "name": "F3",
            "ticks": 119838,
            "time": 51.65518995898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 119838,
            "time": 51.65518995898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 120179,
            "time": 51.80210934277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 53,
            "name": "F3",
            "ticks": 120343,
            "time": 51.87276851855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 120508,
            "time": 51.943858542968755,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 54,
            "name": "F#3",
            "ticks": 120591,
            "time": 51.97961897949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 56,
            "name": "G#3",
            "ticks": 120853,
            "time": 52.09250132128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 120853,
            "time": 52.09250132128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20422225195311938,
            "durationTicks": 474,
            "midi": 66,
            "name": "F#4",
            "ticks": 121868,
            "time": 52.529812683593754,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 75,
            "name": "D#5",
            "ticks": 121868,
            "time": 52.529812683593754,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 46,
            "name": "A#2",
            "ticks": 121868,
            "time": 52.529812683593754,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019532067,
            "durationTicks": 329,
            "midi": 46,
            "name": "A#2",
            "ticks": 122208,
            "time": 52.67630121875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.2050839492187464,
            "durationTicks": 476,
            "midi": 65,
            "name": "F4",
            "ticks": 122373,
            "time": 52.74739124316407,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2180094082031232,
            "durationTicks": 506,
            "midi": 73,
            "name": "C#5",
            "ticks": 122373,
            "time": 52.74739124316407,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15553635644531028,
            "durationTicks": 361,
            "midi": 46,
            "name": "A#2",
            "ticks": 122538,
            "time": 52.81848126757813,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 64,
            "name": "E4",
            "ticks": 122884,
            "time": 52.967554894531254,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.233089110351564,
            "durationTicks": 541,
            "midi": 72,
            "name": "C5",
            "ticks": 122884,
            "time": 52.967554894531254,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203142,
            "durationTicks": 1049,
            "midi": 52,
            "name": "E3",
            "ticks": 122884,
            "time": 52.967554894531254,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 48,
            "name": "C3",
            "ticks": 122884,
            "time": 52.967554894531254,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144530921,
            "durationTicks": 233,
            "midi": 64,
            "name": "E4",
            "ticks": 123426,
            "time": 53.20107485351563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093750117,
            "durationTicks": 248,
            "midi": 72,
            "name": "C5",
            "ticks": 123426,
            "time": 53.20107485351563,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 65,
            "name": "F4",
            "ticks": 123675,
            "time": 53.30835616308594,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562914,
            "durationTicks": 258,
            "midi": 74,
            "name": "D5",
            "ticks": 123675,
            "time": 53.30835616308594,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8784467509765648,
            "durationTicks": 2029,
            "midi": 67,
            "name": "G4",
            "ticks": 123934,
            "time": 53.41994595898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8784467509765648,
            "durationTicks": 2029,
            "midi": 76,
            "name": "E5",
            "ticks": 123934,
            "time": 53.41994595898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 52,
            "name": "E3",
            "ticks": 123934,
            "time": 53.41994595898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 48,
            "name": "C3",
            "ticks": 123934,
            "time": 53.41994595898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 48,
            "name": "C3",
            "ticks": 124275,
            "time": 53.56686534277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 52,
            "name": "E3",
            "ticks": 124439,
            "time": 53.63752451855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 47,
            "name": "B2",
            "ticks": 124604,
            "time": 53.70861454296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 53,
            "name": "F3",
            "ticks": 124687,
            "time": 53.74437497949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.22020432714843707,
            "durationTicks": 509,
            "midi": 55,
            "name": "G3",
            "ticks": 124949,
            "time": 53.85725732128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2071528154296871,
            "durationTicks": 479,
            "midi": 48,
            "name": "C3",
            "ticks": 124949,
            "time": 53.85725732128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.10108946874999702,
            "durationTicks": 232,
            "midi": 55,
            "name": "G3",
            "ticks": 125459,
            "time": 54.07789737890626,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10579452832030967,
            "durationTicks": 241,
            "midi": 57,
            "name": "A3",
            "ticks": 125707,
            "time": 54.185994295898446,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.4498002792968805,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 125964,
            "time": 54.29883343359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4498002792968805,
            "durationTicks": 1011,
            "midi": 79,
            "name": "G5",
            "ticks": 125964,
            "time": 54.29883343359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2096680214843758,
            "durationTicks": 474,
            "midi": 58,
            "name": "A#3",
            "ticks": 125964,
            "time": 54.29883343359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1497212978515634,
            "durationTicks": 339,
            "midi": 48,
            "name": "C3",
            "ticks": 125964,
            "time": 54.29883343359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14636024414062376,
            "durationTicks": 329,
            "midi": 48,
            "name": "C3",
            "ticks": 126304,
            "time": 54.448998781250005,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.21288767578125345,
            "durationTicks": 476,
            "midi": 60,
            "name": "C4",
            "ticks": 126469,
            "time": 54.52227492382813,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1618097949218793,
            "durationTicks": 361,
            "midi": 48,
            "name": "C3",
            "ticks": 126634,
            "time": 54.595804660156254,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.22474714746093838,
            "durationTicks": 511,
            "midi": 69,
            "name": "A4",
            "ticks": 126980,
            "time": 54.750878898437506,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23767260644531518,
            "durationTicks": 541,
            "midi": 77,
            "name": "F5",
            "ticks": 126980,
            "time": 54.750878898437506,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22474714746093838,
            "durationTicks": 511,
            "midi": 41,
            "name": "F2",
            "ticks": 126980,
            "time": 54.750878898437506,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10685046093750117,
            "durationTicks": 248,
            "midi": 57,
            "name": "A3",
            "ticks": 127522,
            "time": 54.98898235351563,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.10685046093750117,
            "durationTicks": 248,
            "midi": 65,
            "name": "F4",
            "ticks": 127522,
            "time": 54.98898235351563,
            "velocity": 0.6456692913385826
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 57,
            "name": "A3",
            "ticks": 127771,
            "time": 55.09626366308594,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 65,
            "name": "F4",
            "ticks": 127771,
            "time": 55.09626366308594,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 57,
            "name": "A3",
            "ticks": 128030,
            "time": 55.20785345898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 65,
            "name": "F4",
            "ticks": 128030,
            "time": 55.20785345898438,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 41,
            "name": "F2",
            "ticks": 128030,
            "time": 55.20785345898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.10641961230468411,
            "durationTicks": 247,
            "midi": 57,
            "name": "A3",
            "ticks": 128535,
            "time": 55.425432018554694,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.10641961230468411,
            "durationTicks": 247,
            "midi": 65,
            "name": "F4",
            "ticks": 128535,
            "time": 55.425432018554694,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.112451493164059,
            "durationTicks": 261,
            "midi": 57,
            "name": "A3",
            "ticks": 128783,
            "time": 55.532282479492196,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.112451493164059,
            "durationTicks": 261,
            "midi": 65,
            "name": "F4",
            "ticks": 128783,
            "time": 55.532282479492196,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.21930195410156728,
            "durationTicks": 509,
            "midi": 57,
            "name": "A3",
            "ticks": 129045,
            "time": 55.645164821289065,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.21930195410156728,
            "durationTicks": 509,
            "midi": 65,
            "name": "F4",
            "ticks": 129045,
            "time": 55.645164821289065,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.20637649511719047,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 129045,
            "time": 55.645164821289065,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.10641961230469121,
            "durationTicks": 247,
            "midi": 57,
            "name": "A3",
            "ticks": 129555,
            "time": 55.86489762402344,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.10641961230469121,
            "durationTicks": 247,
            "midi": 65,
            "name": "F4",
            "ticks": 129555,
            "time": 55.86489762402344,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 57,
            "name": "A3",
            "ticks": 129803,
            "time": 55.97174808496094,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 65,
            "name": "F4",
            "ticks": 129803,
            "time": 55.97174808496094,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 57,
            "name": "A3",
            "ticks": 130060,
            "time": 56.082476183593755,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 65,
            "name": "F4",
            "ticks": 130060,
            "time": 56.082476183593755,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 43,
            "name": "G2",
            "ticks": 130060,
            "time": 56.082476183593755,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.2050839492187464,
            "durationTicks": 476,
            "midi": 57,
            "name": "A3",
            "ticks": 130565,
            "time": 56.30005474316407,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2180094082031232,
            "durationTicks": 506,
            "midi": 65,
            "name": "F4",
            "ticks": 130565,
            "time": 56.30005474316407,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.2050839492187464,
            "durationTicks": 476,
            "midi": 45,
            "name": "A2",
            "ticks": 130565,
            "time": 56.30005474316407,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 70,
            "name": "A#4",
            "ticks": 131076,
            "time": 56.520218394531256,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 62,
            "name": "D4",
            "ticks": 131076,
            "time": 56.520218394531256,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 131076,
            "time": 56.520218394531256,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 65,
            "name": "F4",
            "ticks": 132126,
            "time": 56.97260945898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 58,
            "name": "A#3",
            "ticks": 132126,
            "time": 56.97260945898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 132126,
            "time": 56.97260945898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890625477,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 132467,
            "time": 57.11952884277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 132796,
            "time": 57.261278042968755,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781198,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 133141,
            "time": 57.40992082128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 133141,
            "time": 57.40992082128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 62,
            "name": "D4",
            "ticks": 133899,
            "time": 57.73650408496094,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 133899,
            "time": 57.73650408496094,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.10383452050781727,
            "durationTicks": 241,
            "midi": 62,
            "name": "D4",
            "ticks": 134156,
            "time": 57.84723218359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.11029725000000212,
            "durationTicks": 256,
            "midi": 70,
            "name": "A#4",
            "ticks": 134156,
            "time": 57.84723218359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 46,
            "name": "A#2",
            "ticks": 134156,
            "time": 57.84723218359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 63,
            "name": "D#4",
            "ticks": 134413,
            "time": 57.957960282226566,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230469121,
            "durationTicks": 247,
            "midi": 72,
            "name": "C5",
            "ticks": 134413,
            "time": 57.957960282226566,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 65,
            "name": "F4",
            "ticks": 134661,
            "time": 58.06481074316407,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10641961230469121,
            "durationTicks": 247,
            "midi": 74,
            "name": "D5",
            "ticks": 134661,
            "time": 58.06481074316407,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 66,
            "name": "F#4",
            "ticks": 134909,
            "time": 58.17166120410157,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 75,
            "name": "D#5",
            "ticks": 134909,
            "time": 58.17166120410157,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 68,
            "name": "G#4",
            "ticks": 135172,
            "time": 58.284974394531254,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 77,
            "name": "F5",
            "ticks": 135172,
            "time": 58.284974394531254,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 44,
            "name": "G#2",
            "ticks": 135172,
            "time": 58.284974394531254,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 58,
            "name": "A#3",
            "ticks": 135963,
            "time": 58.625775663085946,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062723,
            "durationTicks": 242,
            "midi": 58,
            "name": "A#3",
            "ticks": 136222,
            "time": 58.73736545898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 44,
            "name": "G#2",
            "ticks": 136222,
            "time": 58.73736545898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.0995260341796893,
            "durationTicks": 231,
            "midi": 60,
            "name": "C4",
            "ticks": 136480,
            "time": 58.84852440625001,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890625477,
            "durationTicks": 308,
            "midi": 44,
            "name": "G#2",
            "ticks": 136563,
            "time": 58.88428484277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249926,
            "durationTicks": 232,
            "midi": 62,
            "name": "D4",
            "ticks": 136727,
            "time": 58.95494401855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 42,
            "name": "F#2",
            "ticks": 136892,
            "time": 59.02603404296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 63,
            "name": "D#4",
            "ticks": 136975,
            "time": 59.06179447949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 65,
            "name": "F4",
            "ticks": 137237,
            "time": 59.17467682128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 44,
            "name": "G#2",
            "ticks": 137237,
            "time": 59.17467682128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 68,
            "name": "G#4",
            "ticks": 137747,
            "time": 59.39440962402344,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2171477109375033,
            "durationTicks": 504,
            "midi": 77,
            "name": "F5",
            "ticks": 137747,
            "time": 59.39440962402344,
            "velocity": 0.7086614173228346
          },
          {
            "duration": 0.1374407138671927,
            "durationTicks": 319,
            "midi": 68,
            "name": "G#4",
            "ticks": 138252,
            "time": 59.61198818359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.14605768652344153,
            "durationTicks": 339,
            "midi": 77,
            "name": "F5",
            "ticks": 138252,
            "time": 59.61198818359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 44,
            "name": "G#2",
            "ticks": 138252,
            "time": 59.61198818359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13313222753906473,
            "durationTicks": 309,
            "midi": 70,
            "name": "A#4",
            "ticks": 138592,
            "time": 59.75847671875,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14174920019531356,
            "durationTicks": 329,
            "midi": 78,
            "name": "F#5",
            "ticks": 138592,
            "time": 59.75847671875,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 72,
            "name": "C5",
            "ticks": 138922,
            "time": 59.90065676757813,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.14691938378906855,
            "durationTicks": 341,
            "midi": 80,
            "name": "G#5",
            "ticks": 138922,
            "time": 59.90065676757813,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 73,
            "name": "C#5",
            "ticks": 139268,
            "time": 60.04973039453125,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 82,
            "name": "A#5",
            "ticks": 139268,
            "time": 60.04973039453125,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 42,
            "name": "F#2",
            "ticks": 139268,
            "time": 60.04973039453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 54,
            "name": "F#3",
            "ticks": 140059,
            "time": 60.390531663085945,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10426536914062723,
            "durationTicks": 242,
            "midi": 54,
            "name": "F#3",
            "ticks": 140318,
            "time": 60.50212145898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 42,
            "name": "F#2",
            "ticks": 140318,
            "time": 60.50212145898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.0995260341796893,
            "durationTicks": 231,
            "midi": 56,
            "name": "G#3",
            "ticks": 140576,
            "time": 60.613280406250006,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 42,
            "name": "F#2",
            "ticks": 140659,
            "time": 60.649040842773445,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250636,
            "durationTicks": 232,
            "midi": 58,
            "name": "A#3",
            "ticks": 140823,
            "time": 60.71970001855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703125668,
            "durationTicks": 324,
            "midi": 40,
            "name": "E2",
            "ticks": 140988,
            "time": 60.79079004296875,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 60,
            "name": "C4",
            "ticks": 141071,
            "time": 60.82655047949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.4368805136718734,
            "durationTicks": 1014,
            "midi": 61,
            "name": "C#4",
            "ticks": 141333,
            "time": 60.93943282128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.23265826171874693,
            "durationTicks": 540,
            "midi": 42,
            "name": "F#2",
            "ticks": 141333,
            "time": 60.93943282128907,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 142348,
            "time": 61.37674418359376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 85,
            "name": "C#6",
            "ticks": 142348,
            "time": 61.37674418359376,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.23050401855468294,
            "durationTicks": 535,
            "midi": 42,
            "name": "F#2",
            "ticks": 142348,
            "time": 61.37674418359376,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 54,
            "name": "F#3",
            "ticks": 142348,
            "time": 61.37674418359376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.18741915527343167,
            "durationTicks": 435,
            "midi": 76,
            "name": "E5",
            "ticks": 143364,
            "time": 61.81448639453126,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.18741915527343167,
            "durationTicks": 435,
            "midi": 84,
            "name": "C6",
            "ticks": 143364,
            "time": 61.81448639453126,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.8892715781249976,
            "durationTicks": 2064,
            "midi": 53,
            "name": "F3",
            "ticks": 143364,
            "time": 61.81448639453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 41,
            "name": "F2",
            "ticks": 143364,
            "time": 61.81448639453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 72,
            "name": "C5",
            "ticks": 144414,
            "time": 62.26687745898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 81,
            "name": "A5",
            "ticks": 144414,
            "time": 62.26687745898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 41,
            "name": "F2",
            "ticks": 144414,
            "time": 62.26687745898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 41,
            "name": "F2",
            "ticks": 144755,
            "time": 62.41379684277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 39,
            "name": "D#2",
            "ticks": 145084,
            "time": 62.55554604296876,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 57,
            "name": "A3",
            "ticks": 145429,
            "time": 62.704188821289065,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.23265826171875403,
            "durationTicks": 540,
            "midi": 41,
            "name": "F2",
            "ticks": 145429,
            "time": 62.704188821289065,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 69,
            "name": "A4",
            "ticks": 146444,
            "time": 63.141500183593756,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777343645,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 146444,
            "time": 63.141500183593756,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.23050401855469005,
            "durationTicks": 535,
            "midi": 41,
            "name": "F2",
            "ticks": 146444,
            "time": 63.141500183593756,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 1.326582940429681,
            "durationTicks": 3079,
            "midi": 70,
            "name": "A#4",
            "ticks": 147460,
            "time": 63.579242394531256,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429681,
            "durationTicks": 3079,
            "midi": 78,
            "name": "F#5",
            "ticks": 147460,
            "time": 63.579242394531256,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15295126464843634,
            "durationTicks": 355,
            "midi": 40,
            "name": "E2",
            "ticks": 147460,
            "time": 63.579242394531256,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.13399392480468464,
            "durationTicks": 311,
            "midi": 46,
            "name": "A#2",
            "ticks": 147836,
            "time": 63.74124148046876,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 49,
            "name": "C#3",
            "ticks": 148168,
            "time": 63.8842832265625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13787156250000976,
            "durationTicks": 320,
            "midi": 52,
            "name": "E3",
            "ticks": 148510,
            "time": 64.03163345898437,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 58,
            "name": "A#3",
            "ticks": 148851,
            "time": 64.17855284277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 61,
            "name": "C#4",
            "ticks": 149180,
            "time": 64.32030204296876,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 64,
            "name": "E4",
            "ticks": 149525,
            "time": 64.46894482128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 73,
            "name": "C#5",
            "ticks": 150540,
            "time": 64.90625618359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 82,
            "name": "A#5",
            "ticks": 150540,
            "time": 64.90625618359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 61,
            "name": "C#4",
            "ticks": 150540,
            "time": 64.90625618359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.18741915527343167,
            "durationTicks": 435,
            "midi": 72,
            "name": "C5",
            "ticks": 151556,
            "time": 65.34399839453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.18741915527343167,
            "durationTicks": 435,
            "midi": 81,
            "name": "A5",
            "ticks": 151556,
            "time": 65.34399839453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 65,
            "name": "F4",
            "ticks": 151556,
            "time": 65.34399839453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718805,
            "durationTicks": 1014,
            "midi": 69,
            "name": "A4",
            "ticks": 152606,
            "time": 65.79638945898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4368805136718805,
            "durationTicks": 1014,
            "midi": 77,
            "name": "F5",
            "ticks": 152606,
            "time": 65.79638945898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 41,
            "name": "F2",
            "ticks": 152606,
            "time": 65.79638945898438,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.1413183515624894,
            "durationTicks": 328,
            "midi": 41,
            "name": "F2",
            "ticks": 152947,
            "time": 65.94330884277345,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.14821192968750552,
            "durationTicks": 344,
            "midi": 41,
            "name": "F2",
            "ticks": 153276,
            "time": 66.08505804296875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.4368805136718805,
            "durationTicks": 1014,
            "midi": 53,
            "name": "F3",
            "ticks": 153621,
            "time": 66.23370082128906,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.4368805136718805,
            "durationTicks": 1014,
            "midi": 57,
            "name": "A3",
            "ticks": 153621,
            "time": 66.23370082128906,
            "velocity": 0.7637795275590551
          },
          {
            "duration": 0.20637649511719758,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 153621,
            "time": 66.23370082128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 69,
            "name": "A4",
            "ticks": 154636,
            "time": 66.67101218359376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 154636,
            "time": 66.67101218359376,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 70,
            "name": "A#4",
            "ticks": 155652,
            "time": 67.10875439453126,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 78,
            "name": "F#5",
            "ticks": 155652,
            "time": 67.10875439453126,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.15295126464843634,
            "durationTicks": 355,
            "midi": 40,
            "name": "E2",
            "ticks": 155652,
            "time": 67.10875439453126,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.13399392480468464,
            "durationTicks": 311,
            "midi": 46,
            "name": "A#2",
            "ticks": 156028,
            "time": 67.27075348046876,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.1383024111328126,
            "durationTicks": 321,
            "midi": 49,
            "name": "C#3",
            "ticks": 156360,
            "time": 67.4137952265625,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13787156249999555,
            "durationTicks": 320,
            "midi": 52,
            "name": "E3",
            "ticks": 156702,
            "time": 67.56114545898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 58,
            "name": "A#3",
            "ticks": 157043,
            "time": 67.70806484277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 61,
            "name": "C#4",
            "ticks": 157372,
            "time": 67.84981404296876,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 64,
            "name": "E4",
            "ticks": 157717,
            "time": 67.99845682128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 73,
            "name": "C#5",
            "ticks": 158732,
            "time": 68.43576818359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 82,
            "name": "A#5",
            "ticks": 158732,
            "time": 68.43576818359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 61,
            "name": "C#4",
            "ticks": 158732,
            "time": 68.43576818359375,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.18741915527344588,
            "durationTicks": 435,
            "midi": 72,
            "name": "C5",
            "ticks": 159748,
            "time": 68.87351039453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.18741915527344588,
            "durationTicks": 435,
            "midi": 81,
            "name": "A5",
            "ticks": 159748,
            "time": 68.87351039453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 65,
            "name": "F4",
            "ticks": 159748,
            "time": 68.87351039453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.4368805136718805,
            "durationTicks": 1014,
            "midi": 69,
            "name": "A4",
            "ticks": 160798,
            "time": 69.32590145898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.4368805136718805,
            "durationTicks": 1014,
            "midi": 77,
            "name": "F5",
            "ticks": 160798,
            "time": 69.32590145898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 41,
            "name": "F2",
            "ticks": 160798,
            "time": 69.32590145898438,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.1413183515625036,
            "durationTicks": 328,
            "midi": 41,
            "name": "F2",
            "ticks": 161139,
            "time": 69.47282084277344,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.14821192968750552,
            "durationTicks": 344,
            "midi": 41,
            "name": "F2",
            "ticks": 161468,
            "time": 69.61457004296875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.4368805136718663,
            "durationTicks": 1014,
            "midi": 53,
            "name": "F3",
            "ticks": 161813,
            "time": 69.76321282128907,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.4368805136718663,
            "durationTicks": 1014,
            "midi": 57,
            "name": "A3",
            "ticks": 161813,
            "time": 69.76321282128907,
            "velocity": 0.7637795275590551
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 161813,
            "time": 69.76321282128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 69,
            "name": "A4",
            "ticks": 162828,
            "time": 70.20052418359376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 77,
            "name": "F5",
            "ticks": 162828,
            "time": 70.20052418359376,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 66,
            "name": "F#4",
            "ticks": 163844,
            "time": 70.63826639453126,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 1.326582940429688,
            "durationTicks": 3079,
            "midi": 75,
            "name": "D#5",
            "ticks": 163844,
            "time": 70.63826639453126,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 54,
            "name": "F#3",
            "ticks": 163844,
            "time": 70.63826639453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 47,
            "name": "B2",
            "ticks": 163844,
            "time": 70.63826639453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 54,
            "name": "F#3",
            "ticks": 164894,
            "time": 71.09065745898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 47,
            "name": "B2",
            "ticks": 164894,
            "time": 71.09065745898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 47,
            "name": "B2",
            "ticks": 165235,
            "time": 71.23757684277345,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281249215,
            "durationTicks": 232,
            "midi": 54,
            "name": "F#3",
            "ticks": 165399,
            "time": 71.3082360185547,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 46,
            "name": "A#2",
            "ticks": 165564,
            "time": 71.37932604296876,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 53,
            "name": "F3",
            "ticks": 165647,
            "time": 71.41508647949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 54,
            "name": "F#3",
            "ticks": 165909,
            "time": 71.52796882128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719758,
            "durationTicks": 479,
            "midi": 47,
            "name": "B2",
            "ticks": 165909,
            "time": 71.52796882128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 166924,
            "time": 71.96528018359376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 78,
            "name": "F#5",
            "ticks": 166924,
            "time": 71.96528018359376,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 47,
            "name": "B2",
            "ticks": 166924,
            "time": 71.96528018359376,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019532067,
            "durationTicks": 329,
            "midi": 47,
            "name": "B2",
            "ticks": 167264,
            "time": 72.11176871875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.1555363564453245,
            "durationTicks": 361,
            "midi": 47,
            "name": "B2",
            "ticks": 167594,
            "time": 72.25394876757812,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 70,
            "name": "A#4",
            "ticks": 167940,
            "time": 72.40302239453126,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 77,
            "name": "F5",
            "ticks": 167940,
            "time": 72.40302239453126,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 53,
            "name": "F3",
            "ticks": 167940,
            "time": 72.40302239453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 46,
            "name": "A#2",
            "ticks": 167940,
            "time": 72.40302239453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.8741918759765781,
            "durationTicks": 2029,
            "midi": 65,
            "name": "F4",
            "ticks": 168990,
            "time": 72.85541345898437,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765781,
            "durationTicks": 2029,
            "midi": 73,
            "name": "C#5",
            "ticks": 168990,
            "time": 72.85541345898437,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.2171477109375104,
            "durationTicks": 504,
            "midi": 53,
            "name": "F3",
            "ticks": 168990,
            "time": 72.85541345898437,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562657,
            "durationTicks": 340,
            "midi": 46,
            "name": "A#2",
            "ticks": 168990,
            "time": 72.85541345898437,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 46,
            "name": "A#2",
            "ticks": 169331,
            "time": 73.00233284277344,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250636,
            "durationTicks": 232,
            "midi": 53,
            "name": "F3",
            "ticks": 169495,
            "time": 73.07299201855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 44,
            "name": "G#2",
            "ticks": 169660,
            "time": 73.14408204296876,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367187415,
            "durationTicks": 246,
            "midi": 51,
            "name": "D#3",
            "ticks": 169743,
            "time": 73.1798424794922,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.8728993300781269,
            "durationTicks": 2026,
            "midi": 53,
            "name": "F3",
            "ticks": 170005,
            "time": 73.29272482128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 46,
            "name": "A#2",
            "ticks": 170005,
            "time": 73.29272482128907,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 61,
            "name": "C#4",
            "ticks": 171020,
            "time": 73.73003618359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777344355,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 171020,
            "time": 73.73003618359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 46,
            "name": "A#2",
            "ticks": 171020,
            "time": 73.73003618359375,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019530646,
            "durationTicks": 329,
            "midi": 46,
            "name": "A#2",
            "ticks": 171360,
            "time": 73.87652471875,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.15553635644531028,
            "durationTicks": 361,
            "midi": 46,
            "name": "A#2",
            "ticks": 171690,
            "time": 74.01870476757813,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.2330891103515711,
            "durationTicks": 541,
            "midi": 64,
            "name": "E4",
            "ticks": 172036,
            "time": 74.16777839453125,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.2330891103515711,
            "durationTicks": 541,
            "midi": 72,
            "name": "C5",
            "ticks": 172036,
            "time": 74.16777839453125,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.4519602158203071,
            "durationTicks": 1049,
            "midi": 52,
            "name": "E3",
            "ticks": 172036,
            "time": 74.16777839453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 48,
            "name": "C3",
            "ticks": 172036,
            "time": 74.16777839453125,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.10038773144530921,
            "durationTicks": 233,
            "midi": 64,
            "name": "E4",
            "ticks": 172578,
            "time": 74.40129835351563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.10685046093750827,
            "durationTicks": 248,
            "midi": 72,
            "name": "C5",
            "ticks": 172578,
            "time": 74.40129835351563,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.10469621777343718,
            "durationTicks": 243,
            "midi": 65,
            "name": "F4",
            "ticks": 172827,
            "time": 74.50857966308594,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.11115894726562203,
            "durationTicks": 258,
            "midi": 74,
            "name": "D5",
            "ticks": 172827,
            "time": 74.50857966308594,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 67,
            "name": "G4",
            "ticks": 173086,
            "time": 74.62016945898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.8741918759765639,
            "durationTicks": 2029,
            "midi": 76,
            "name": "E5",
            "ticks": 173086,
            "time": 74.62016945898438,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 52,
            "name": "E3",
            "ticks": 173086,
            "time": 74.62016945898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.1464885351562515,
            "durationTicks": 340,
            "midi": 48,
            "name": "C3",
            "ticks": 173086,
            "time": 74.62016945898438,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.13270137890624767,
            "durationTicks": 308,
            "midi": 48,
            "name": "C3",
            "ticks": 173427,
            "time": 74.76708884277345,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.09995688281250636,
            "durationTicks": 232,
            "midi": 52,
            "name": "E3",
            "ticks": 173591,
            "time": 74.83774801855469,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.13959495703124958,
            "durationTicks": 324,
            "midi": 47,
            "name": "B2",
            "ticks": 173756,
            "time": 74.90883804296875,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10598876367188836,
            "durationTicks": 246,
            "midi": 53,
            "name": "F3",
            "ticks": 173839,
            "time": 74.94459847949219,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.21930195410156728,
            "durationTicks": 509,
            "midi": 55,
            "name": "G3",
            "ticks": 174101,
            "time": 75.05748082128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.20637649511719758,
            "durationTicks": 479,
            "midi": 48,
            "name": "C3",
            "ticks": 174101,
            "time": 75.05748082128906,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.09995688281249215,
            "durationTicks": 232,
            "midi": 55,
            "name": "G3",
            "ticks": 174611,
            "time": 75.27721362402345,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.10383452050781727,
            "durationTicks": 241,
            "midi": 57,
            "name": "A3",
            "ticks": 174859,
            "time": 75.38406408496094,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 70,
            "name": "A#4",
            "ticks": 175116,
            "time": 75.49479218359376,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.43558796777342934,
            "durationTicks": 1011,
            "midi": 79,
            "name": "G5",
            "ticks": 175116,
            "time": 75.49479218359376,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.20422225195311228,
            "durationTicks": 474,
            "midi": 58,
            "name": "A#3",
            "ticks": 175116,
            "time": 75.49479218359376,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.14605768652343443,
            "durationTicks": 339,
            "midi": 48,
            "name": "C3",
            "ticks": 175116,
            "time": 75.49479218359376,
            "velocity": 0.6062992125984252
          },
          {
            "duration": 0.14174920019530646,
            "durationTicks": 329,
            "midi": 48,
            "name": "C3",
            "ticks": 175456,
            "time": 75.64128071875001,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.2050839492187464,
            "durationTicks": 476,
            "midi": 60,
            "name": "C4",
            "ticks": 175621,
            "time": 75.71237074316407,
            "velocity": 0.6929133858267716
          },
          {
            "duration": 0.15553635644531028,
            "durationTicks": 361,
            "midi": 48,
            "name": "C3",
            "ticks": 175786,
            "time": 75.78346076757813,
            "velocity": 0.5984251968503937
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 69,
            "name": "A4",
            "ticks": 176132,
            "time": 75.93253439453126,
            "velocity": 0.6692913385826772
          },
          {
            "duration": 0.23308911035155688,
            "durationTicks": 541,
            "midi": 77,
            "name": "F5",
            "ticks": 176132,
            "time": 75.93253439453126,
            "velocity": 0.7795275590551181
          },
          {
            "duration": 0.22016365136718719,
            "durationTicks": 511,
            "midi": 41,
            "name": "F2",
            "ticks": 176132,
            "time": 75.93253439453126,
            "velocity": 0.7322834645669292
          },
          {
            "duration": 0.04049977148436312,
            "durationTicks": 94,
            "midi": 53,
            "name": "F3",
            "ticks": 176674,
            "time": 76.16605435351563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.034037041992192485,
            "durationTicks": 79,
            "midi": 57,
            "name": "A3",
            "ticks": 176674,
            "time": 76.16605435351563,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.04049977148436312,
            "durationTicks": 94,
            "midi": 65,
            "name": "F4",
            "ticks": 176674,
            "time": 76.16605435351563,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.0448082578125053,
            "durationTicks": 104,
            "midi": 54,
            "name": "F#3",
            "ticks": 176923,
            "time": 76.27333566308594,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.0448082578125053,
            "durationTicks": 104,
            "midi": 58,
            "name": "A#3",
            "ticks": 176923,
            "time": 76.27333566308594,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.0448082578125053,
            "durationTicks": 104,
            "midi": 65,
            "name": "F4",
            "ticks": 176923,
            "time": 76.27333566308594,
            "velocity": 0.6771653543307087
          },
          {
            "duration": 0.08487718066405137,
            "durationTicks": 197,
            "midi": 55,
            "name": "G3",
            "ticks": 177182,
            "time": 76.38492545898438,
            "velocity": 0.7244094488188977
          },
          {
            "duration": 0.08487718066405137,
            "durationTicks": 197,
            "midi": 58,
            "name": "A#3",
            "ticks": 177182,
            "time": 76.38492545898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.08487718066405137,
            "durationTicks": 197,
            "midi": 65,
            "name": "F4",
            "ticks": 177182,
            "time": 76.38492545898438,
            "velocity": 0.6850393700787402
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 41,
            "name": "F2",
            "ticks": 177182,
            "time": 76.38492545898438,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 51,
            "name": "D#3",
            "ticks": 177182,
            "time": 76.38492545898438,
            "velocity": 0.7165354330708661
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 55,
            "name": "G3",
            "ticks": 177687,
            "time": 76.6025040185547,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 58,
            "name": "A#3",
            "ticks": 177687,
            "time": 76.6025040185547,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 65,
            "name": "F4",
            "ticks": 177687,
            "time": 76.6025040185547,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.04610080371094227,
            "durationTicks": 107,
            "midi": 55,
            "name": "G3",
            "ticks": 177935,
            "time": 76.70935447949219,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.05256353320312712,
            "durationTicks": 122,
            "midi": 58,
            "name": "A#3",
            "ticks": 177935,
            "time": 76.70935447949219,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.04610080371094227,
            "durationTicks": 107,
            "midi": 65,
            "name": "F4",
            "ticks": 177935,
            "time": 76.70935447949219,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.08703142382812246,
            "durationTicks": 202,
            "midi": 56,
            "name": "G#3",
            "ticks": 178197,
            "time": 76.82223682128907,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.08703142382812246,
            "durationTicks": 202,
            "midi": 60,
            "name": "C4",
            "ticks": 178197,
            "time": 76.82223682128907,
            "velocity": 0.7401574803149606
          },
          {
            "duration": 0.08703142382812246,
            "durationTicks": 202,
            "midi": 65,
            "name": "F4",
            "ticks": 178197,
            "time": 76.82223682128907,
            "velocity": 0.7007874015748031
          },
          {
            "duration": 0.20637649511718337,
            "durationTicks": 479,
            "midi": 41,
            "name": "F2",
            "ticks": 178197,
            "time": 76.82223682128907,
            "velocity": 0.6535433070866141
          },
          {
            "duration": 0.21930195410156728,
            "durationTicks": 509,
            "midi": 51,
            "name": "D#3",
            "ticks": 178197,
            "time": 76.82223682128907,
            "velocity": 0.7637795275590551
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 56,
            "name": "G#3",
            "ticks": 178707,
            "time": 77.04196962402344,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 60,
            "name": "C4",
            "ticks": 178707,
            "time": 77.04196962402344,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.040068922851560274,
            "durationTicks": 93,
            "midi": 65,
            "name": "F4",
            "ticks": 178707,
            "time": 77.04196962402344,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.04394656054687118,
            "durationTicks": 102,
            "midi": 56,
            "name": "G#3",
            "ticks": 178955,
            "time": 77.14882008496095,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.05040929003905603,
            "durationTicks": 117,
            "midi": 60,
            "name": "C4",
            "ticks": 178955,
            "time": 77.14882008496095,
            "velocity": 0.6220472440944882
          },
          {
            "duration": 0.04394656054687118,
            "durationTicks": 102,
            "midi": 65,
            "name": "F4",
            "ticks": 178955,
            "time": 77.14882008496095,
            "velocity": 0.5826771653543307
          },
          {
            "duration": 0.08487718066406558,
            "durationTicks": 197,
            "midi": 57,
            "name": "A3",
            "ticks": 179212,
            "time": 77.25954818359375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.08487718066406558,
            "durationTicks": 197,
            "midi": 61,
            "name": "C#4",
            "ticks": 179212,
            "time": 77.25954818359375,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.08487718066406558,
            "durationTicks": 197,
            "midi": 65,
            "name": "F4",
            "ticks": 179212,
            "time": 77.25954818359375,
            "velocity": 0.5905511811023622
          },
          {
            "duration": 0.2042222519531265,
            "durationTicks": 474,
            "midi": 43,
            "name": "G2",
            "ticks": 179212,
            "time": 77.25954818359375,
            "velocity": 0.6377952755905512
          },
          {
            "duration": 0.21714771093749619,
            "durationTicks": 504,
            "midi": 52,
            "name": "E3",
            "ticks": 179212,
            "time": 77.25954818359375,
            "velocity": 0.7480314960629921
          },
          {
            "duration": 0.08573887792968549,
            "durationTicks": 199,
            "midi": 57,
            "name": "A3",
            "ticks": 179717,
            "time": 77.47712674316406,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.09909518554687224,
            "durationTicks": 230,
            "midi": 61,
            "name": "C#4",
            "ticks": 179717,
            "time": 77.47712674316406,
            "velocity": 0.5354330708661418
          },
          {
            "duration": 0.09909518554687224,
            "durationTicks": 230,
            "midi": 65,
            "name": "F4",
            "ticks": 179717,
            "time": 77.47712674316406,
            "velocity": 0.6141732283464567
          },
          {
            "duration": 0.2050839492187606,
            "durationTicks": 476,
            "midi": 45,
            "name": "A2",
            "ticks": 179717,
            "time": 77.47712674316406,
            "velocity": 0.6299212598425197
          },
          {
            "duration": 0.2050839492187606,
            "durationTicks": 476,
            "midi": 53,
            "name": "F3",
            "ticks": 179717,
            "time": 77.47712674316406,
            "velocity": 0.7401574803149606
          }
        ]
      }
    ]
  }


const synth = new Tone.Synth().toDestination();
const notes = [ 
  { display: "C", value: "C2" },
        { display: "C#", value: "C#2" },
        { display: "Db", value: "C#2" },
    { display: "D", value: "D2" },
        { display: "D#", value: "D#2" },
        { display: "Es", value: "D#2" },
    { display: "E", value: "E2" },
        { display: "Fb", value: "E2" },
    { display: "F", value: "F2" },
        { display: "F#", value: "F#2" },
        { display: "Gb", value: "F#2" },
    { display: "G", value: "G2" },
        { display: "G#", value: "G#2" },
        { display: "Ab", value: "G#2" },
    { display: "A", value: "A2" },
        { display: "A#", value: "A#2" },
        { display: "Bb", value: "A#2" },
    { display: "B", value: "B2" },
        { display: "cb", value: "B2" },

    { display: "c", value: "C3" },
        { display: "cis", value: "C#3" },
        { display: "des", value: "C#3" },
    { display: "d", value: "D3" },
        { display: "dis", value: "D#3" },
        { display: "es", value: "D#3" },
    { display: "e", value: "E3" },
        { display: "fb", value: "E3" },
    { display: "f", value: "F3" },
        { display: "fis", value: "F#3" },
        { display: "ges", value: "F#3" },
    { display: "g", value: "G3" },
        { display: "gis", value: "G#3" },
        { display: "as", value: "G#3" },
    { display: "a", value: "A3" },
        { display: "ais", value: "A#3" },
        { display: "bb", value: "A#3" },
    { display: "b", value: "B3" },
        { display: "cb'", value: "B3" },

    { display: "c'", value: "C4" },
        { display: "cis'", value: "C#4" },
        { display: "des'", value: "C#4" },
    { display: "d'", value: "D4" },
        { display: "dis'", value: "D#4" },
        { display: "es'", value: "D#4" },
    { display: "e'", value: "E4" },
        { display: "fb'", value: "E4" },
    { display: "f'", value: "F4" },
        { display: "fis'", value: "F#4" },
        { display: "ges'", value: "F#4" },
    { display: "g'", value: "G4" },
        { display: "gis'", value: "G#4" },
        { display: "as'", value: "G#4" },
    { display: "a'", value: "A4" },
        { display: "ais'", value: "A#4" },
        { display: "bb'", value: "A#4" },
    { display: "b'", value: "B4" },
        { display: "cb''", value: "B4" },

            { display: "c''", value: "C5" },
        { display: "cis''", value: "C#5" },
        { display: "des''", value: "C#5" },
    { display: "d''", value: "D5" },
        { display: "dis''", value: "D#5" },
        { display: "es''", value: "D#5" },
    { display: "e''", value: "E5" },
        { display: "fb''", value: "E5" },
    { display: "f''", value: "F5" },
        { display: "fis''", value: "F#5" },
        { display: "ges''", value: "F#5" },
    { display: "g''", value: "G5" },
        { display: "gis''", value: "G#5" },
        { display: "as''", value: "G#5" },
    { display: "a''", value: "A5" },
        { display: "ais''", value: "A#5" },
        { display: "bb''", value: "A#5" },
    { display: "b''", value: "B5" },
        { display: "cb'''", value: "B5" },
    
];
let givenNote = "";

function play(note) {
  Tone.start();
  synth.triggerAttackRelease(note, "8n");
}

function neueAufgabe()  {
  givenNote = notes [Math.floor(Math.random() * notes.length)];
  document.getElementById("Notenabfrage").textContent = "Spiele die Note: " + givenNote.display;
}

function checkAnswer(note) {

    const FEEDBACK = document.getElementById("Notenabfrage");

  if (!givenNote) return;

  if (note === givenNote.value) {
    FEEDBACK.textContent = "Richtig! Gut gemacht.";

  } else {
    FEEDBACK.textContent = "Falsch, versuche es noch einmal.";
  }
}

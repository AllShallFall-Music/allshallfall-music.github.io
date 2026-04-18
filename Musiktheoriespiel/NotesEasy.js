// Initialize synth when page loads
const synth = new Tone.Synth().toDestination();
const notes = [
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
];
let givenNote = "";

function play(note) {
  Tone.start();
  synth.triggerAttackRelease(note, "8n");
}

function neueAufgabe()  {
  givenNote = notes [Math.floor(Math.random() * notes.length)];
  document.getElementById("Notenabfrage").textContent = "Spiele die Note: " + givenNote.display + " 🎶";
}

function checkAnswer(note) {

    const FEEDBACK = document.getElementById("Notenabfrage");

  if (!givenNote) return;

  if (note === givenNote.value) {
    FEEDBACK.textContent = "Richtig! Gut gemacht.🎶";

  } else {
    FEEDBACK.textContent = "Falsch, versuche es noch einmal.";
  }
}

// Start first task when page loads
// window.addEventListener("load", neueAufgabe);
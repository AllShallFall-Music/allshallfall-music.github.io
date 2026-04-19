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
let streak = 0;

function play(note) {
  Tone.start();
  synth.triggerAttackRelease(note, "8n");
}

function updateStreakDisplay() {
  const streakElement = document.getElementById("streakCounter");
  if (streakElement) {
    streakElement.textContent = `Aktuelle Serie: ${streak} richtige Antwort${streak === 1 ? "" : "en"} in Folge`;
  }
}

function neueAufgabe()  {
  givenNote = notes[Math.floor(Math.random() * notes.length)];
  document.getElementById("Notenabfrage").textContent = "Spiele die Note: " + givenNote.display + " 🎶";
}

function checkAnswer(note) {
  const FEEDBACK = document.getElementById("Notenabfrage");

  if (!givenNote) return;

  if (note === givenNote.value) {
    streak++;
    FEEDBACK.textContent = "Richtig! Gut gemacht.🎶";
  } else {
    streak = 0;
    FEEDBACK.textContent = "Falsch, versuche es noch einmal.";
  }

 updateStreakDisplay(); 
}


window.addEventListener("load", () => {
  neueAufgabe();
  updateStreakDisplay();
});
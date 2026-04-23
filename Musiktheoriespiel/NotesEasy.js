
const synth = new Tone.Synth().toDestination(); // Initialize Tone.js synthesizer
// Array of notes with display names and corresponding MIDI values
const notes = [
  { display: "C", value: "C4" },
  { display: "C#", value: "C#4" },
  { display: "Db", value: "C#4" },
  { display: "D", value: "D4" },
  { display: "D#", value: "D#4" },
  { display: "Eb", value: "D#4" },
  { display: "E", value: "E4" },
  { display: "F", value: "F4" },
  { display: "F#", value: "F#4" },
  { display: "Gb", value: "F#4" },
  { display: "G", value: "G4" },
  { display: "G#", value: "G#4" },
  { display: "Ab", value: "G#4" },
  { display: "A", value: "A4" },
  { display: "A#", value: "A#4" },
  { display: "Bb", value: "A#4" },
  { display: "B", value: "B4" },
];
// Variables to store the current note to be played and the user's current streak of correct answers
let givenNote = "";
let streak = 0;

// Play the given note using Tone.js
function play(note) { 
  Tone.start();
  synth.triggerAttackRelease(note, "8n");
}
// Update the display of the current streak of correct answers
function updateStreakDisplay() { 
  const streakElement = document.getElementById("streakCounter");
  if (streakElement) {
    streakElement.textContent = `Aktuelle Serie: ${streak} richtige Antwort${streak === 1 ? "" : "en"} in Folge`;
  }
}
// Generate a new random note and update the display
function neueAufgabe()  { 
  givenNote = notes [Math.floor(Math.random() * notes.length)];
  document.getElementById("Notenabfrage").textContent = "Spiele die Note: " + givenNote.display + " 🎶";
}
// Check if the user's answer is correct and update feedback and streak accordingly
function checkAnswer(note) { 

    const FEEDBACK = document.getElementById("Notenabfrage");

  if (!givenNote) return;

  if (note === givenNote.value) {
    FEEDBACK.textContent = "Richtig! Gut gemacht.🎶";
    streak++;
  } else {
    FEEDBACK.textContent = "Falsch, versuche es noch einmal.";
    streak = 0;
  }

  updateStreakDisplay();
}

window.addEventListener("load", () => {
  neueAufgabe();
  updateStreakDisplay();
});

// Start first task when page loads
// window.addEventListener("load", neueAufgabe);
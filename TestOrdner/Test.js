// Initialize synth when page loads
const synth = new Tone.Synth().toDestination();
const notes = [
  { display: "C", value: "C4" },
  { display: "C#", value: "C#4", alt: "Db4" },
  { display: "Db", value: "Db4", alt: "C#4" },
  { display: "D", value: "D4" },
  { display: "D#", value: "D#4", alt: "Eb4" },
  { display: "Eb", value: "Eb4", alt: "D#4" },
  { display: "E", value: "E4" },
  { display: "Fb", value: "Fb4", alt: "E4" },
  { display: "F", value: "F4", alt: "E#4" },
  { display: "F#", value: "F#4", alt: "Gb4" },
  { display: "Gb", value: "Gb4", alt: "F#4" },
  { display: "G", value: "G4" },
  { display: "G#", value: "G#4", alt: "Ab4" },
  { display: "Ab", value: "Ab4", alt: "G#4" },
  { display: "A", value: "A4" },
  { display: "A#", value: "A#4", alt: "Bb4" },
  { display: "Bb", value: "Bb4", alt: "A#4" },
  { display: "B", value: "B4", alt: "Cb5" },
  { display: "Cb", value: "Cb5", alt: "B4" },
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

function drawNoteOnStaff(noteValue) {
  const Vex = window.Vex;
  
  try {
    const container = document.getElementById('boo');
    container.innerHTML = '';
    
    const vf = new Vex.Flow.Factory({renderer: {elementId: 'boo', width: 150, height: 150}});
    const score = vf.EasyScore();
    const system = vf.System();
    const voice = score.voice(score.notes(`${noteValue}/q`)).setStrict(false);
    
    system.addStave({
      voices: [voice]
    }).setWidth(300).addClef('treble').addTimeSignature('4/4').addKeySignature('C');
    
    vf.draw();
  } catch(e) {
    console.error('Error drawing note on staff:', e);
  }
}

function initializeStaff() {
  const Vex = window.Vex;
  
  // Clear the container
  const container = document.getElementById('boo');
  container.innerHTML = '';
  
  try {
    const vf = new Vex.Flow.Factory({renderer: {elementId: 'boo', width: 150, height: 150}});
    const score = vf.EasyScore();
    const system = vf.System();
    const voice = score.voice(score.notes('D4/h')).setStrict(false);
    
    system.addStave({
      voices: [voice]
    }).setWidth(300).addClef('treble').addKeySignature('C');
    
    vf.draw();
  } catch(e) {
    console.error('Error initializing staff:', e); // Log any errors that occur during staff initialization
  }
}

function neueAufgabe() {
  givenNote = notes[Math.floor(Math.random() * notes.length)];
  document.getElementById("Notenabfrage").textContent = "Play the note: " + givenNote.display + " 🎶";
  // Draw the note on the staff
  drawNoteOnStaff(givenNote.value);
}

function checkAnswer(note) {
  const FEEDBACK = document.getElementById("Notenabfrage");

  if (!givenNote) return;

  // Check if the clicked note matches either the primary value or the alternative
  const isCorrect = note === givenNote.value || (givenNote.alt && note === givenNote.alt);

  if (isCorrect) {
    FEEDBACK.textContent = "Richtig! Gut gemacht.🎶";
    streak++;
  } else {
    FEEDBACK.textContent = "Falsch, versuche es noch einmal.";
    streak = 0;
  }

  updateStreakDisplay();
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initializeStaff();
  updateStreakDisplay();
});




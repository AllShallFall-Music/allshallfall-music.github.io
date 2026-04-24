
const synth = new Tone.Synth().toDestination(); // Initialize Tone.js synthesizer
// Play the given note using Tone.js
function play(note) { 
  Tone.start();
  synth.triggerAttackRelease(note, "8n");
}
// Variables to store the current note to be played and the user's current streak of correct answers
const notes = [
  { display: "C", value: "C4" },
  { display: "C#", value: "C#4", alt: "Db4" },
  { display: "Db", value: "Db4", alt: "C#4" },
  { display: "D", value: "D4" },
  { display: "D#", value: "D#4", alt: "Eb4" },
  { display: "Eb", value: "Eb4", alt: "D#4" },
  { display: "E", value: "E4" },
  { display: "Fb", value: "Fb4", alt: "E4" },
  { display: "F", value: "F4" },
  { display: "F#", value: "F#4", alt: "Gb4" },
  { display: "Gb", value: "Gb4", alt: "F#4" },
  { display: "G", value: "G4" },
  { display: "G#", value: "G#4", alt: "Ab4" },
  { display: "Ab", value: "Ab4", alt: "G#4" },
  { display: "A", value: "A4" },
  { display: "A#", value: "A#4", alt: "Bb4" },
  { display: "Bb", value: "Bb4", alt: "A#4" },
  { display: "B", value: "B4" },
];

let givenNote = "";
let streak = 0;

function neueAufgabe() {                        //zu spielende Note wird generiert und angezeigt
    givenNote = notes [Math.floor(Math.random() * notes.length)]; // Hier wird eine zufällige Note aus dem  Array "notes" ausgewählt (Etwas zwischen 0 und 1 * 1-7  )
        document.getElementById("Notenabfrage").textContent = "Spiele die Note 🎶: " + givenNote.display; // Gibt die Note in einfacher Form aus
        notetoClick(givenNote.value);           // Zeige die Note auf dem Notensystem an

}
function handleClick(element, note) {           // Hier wird die gespielte Note übergeben, wenn eine Taste angeklickt wird
    play(note);
    checkAnswer(element, note); // Hier wird überprüft, ob die gespielte Note mit der generierten Note übereinstimmt
}


function noteExample() {                        // Hier wird ein Beispiel für die Notendarstellung mit VexFlow gezeigt

    const Vex = window.Vex;                     //  Hier wird die VexFlow-Bibliothek aus dem globalen Fensterobjekt abgerufen, um sie in der Funktion zu verwenden
 
      const container = document.getElementById('boo'); // HTML-Element wird ausgewählt, um die Notendarstellung darin zu platzieren
        container.innerHTML = '';               //Inhalt des Containers wird geleert, um Platz für die neue Notendarstellung zu schaffen

    try {                                       //Try bedeutet "versuche diesen Code auszuführen, und wenn ein Fehler auftritt, fange ihn ab und führe den Code im catch-Block aus"
        const vf = new Vex.Flow.Factory({renderer: {elementId: 'boo', width: 90, height: 150}}); // Hier wird eine neue VexFlow-Factory erstellt, die den Container "boo" verwendet und eine Breite von 150px und eine Höhe von 150px hat
        const score = vf.EasyScore();           // Hier wird ein EasyScore-Objekt erstellt, um die Noten zu verwalten
        const system = vf.System();             // Hier wird ein System-Objekt erstellt, um die Noten auf dem Notenblatt anzuordnen
        const voice = score.voice(score.notes('C4/q')).setStrict(false); // Hier wird eine Stimme mit einer Viertelnote C4 erstellt

        system.addStave({                       // Hier wird ein Notensystem hinzugefügt, das die Stimme enthält
        voices: [voice]
        }).addClef('treble');                   // Hier wird der Violinschlüssel hinzugefügt

    vf.draw();                                  // Hier wird die Notendarstellung gezeichnet}
    }             
    catch(e) {
        console.error('Error drawing note on staff:', e);
    }
}

function notetoClick(noteValue) {               //Note übernehmen aus neu generierter Note, die der Spieler spielen soll, und diese Note auf dem Notensystem anzeigen
  const Vex = window.Vex;
  
  try {
    const container = document.getElementById('boo');
    container.innerHTML = '';
    
    const vf = new Vex.Flow.Factory({renderer: {elementId: 'boo', width: 90, height: 150}});
    const score = vf.EasyScore();
    const system = vf.System();
    const voice = score.voice(score.notes(`${noteValue}/q`)).setStrict(false);
    
    system.addStave({
      voices: [voice]
    }).addClef('treble');
    
    vf.draw();
  } 
  catch(e) {
    console.error('Error drawing note on staff:', e);
  }
}

function mystreakcounter() {
    
    const Zähler = document.getElementById("streakCounter"); // Streak Counter wird ausgewählt und in der Variable "Zähler" gespeichert

    if (Zähler) {
        Zähler.textContent = `Aktuelle Serie: ${streak} richtige Antwort${streak === 1 ? "" : "en"} in Folge`; // Hier wird die aktuelle Serie von richtigen Antworten angezeigt
    }

}

function checkAnswer(element, note) { // Hier wird überprüft, ob die gespielte Note mit der generierten Note übereinstimmt
    const Feedback = document.getElementById("Notenabfrage"); // Hier wird das Element mit der ID "Notenabfrage" ausgewählt, um später Feedback anzuzeigen
    const circle = document.getElementById("autoNext").checked; // Setze autoNext auf true, um automatisch zur nächsten Aufgabe zu wechseln
    if (!givenNote) return; // Wenn keine Note generiert wurde, wird die Funktion verlassen

    // Entferne vorherige Farben
    element.classList.remove("correct", "wrong");

    if (note === givenNote.value || 
        note === givenNote.alt)     { // Wenn die gespielte Note mit der generierten Note übereinstimmt
        Feedback.textContent = "Richtig! Gut gemacht.🎶"; // Feedback für richtige Antwort
        element.classList.add("correct"); // Hier wird die angeklickte Taste mit der Klasse "correct" versehen, um visuelles Feedback zu geben
        streak++; // Streak wird erhöht

        // Nach 1 Sekunde wird eine neue Aufgabe generiert
        setTimeout(() => {
            element.classList.remove("correct");
            circle ? neueAufgabe() : null; // Wenn autoNext aktiviert ist, wird eine neue Aufgabe generiert
        }, 1000);

    } else {
        Feedback.textContent = "Falsch 💩, versuche es noch einmal."; // Feedback für falsche Antwort
        element.classList.add("wrong"); // Hier wird die angeklickte Taste mit der Klasse "wrong" versehen, um visuelles Feedback zu geben
        streak = 0; // Streak wird zurückgesetzt

        // Entferne die rote Farbe nach 1 Sekunde
        setTimeout(() => {
            element.classList.remove("wrong");
        }, 1000);
    }

    mystreakcounter();
}

// Initialisiere die Seite auf dem Laden
window.addEventListener('DOMContentLoaded', () => {
    mystreakcounter(); // Streak Counter wird aktualisiert, wenn die Seite geladen wird
    noteExample();
    
});

const synth = new Tone.Synth().toDestination();
function play(note) { 
  Tone.start();
  synth.triggerAttackRelease(note, "8n");
}   
const notes = [ 
 // Octave 2 - Capital letters (Bass)
  { display: "C", value: "C2" },
  { display: "C#, Cis", value: "C#2", alt: "Db2" },
  { display: "Db, Des", value: "Db2", alt: "C#2" },
  { display: "D", value: "D2" },
  { display: "D#, Dis", value: "D#2", alt: "Eb2" },
  { display: "Eb, Es", value: "Eb2", alt: "D#2" },
  { display: "E", value: "E2" },
  { display: "Fb, Fes", value: "Fb2", alt: "E2" },
  { display: "F", value: "F2" },
  { display: "F#, Fis", value: "F#2", alt: "Gb2" },
  { display: "Gb, Ges", value: "Gb2", alt: "F#2" },
  { display: "G", value: "G2" },
  { display: "G#, Gis", value: "G#2", alt: "Ab2" },
  { display: "Ab, As", value: "Ab2", alt: "G#2" },
  { display: "A", value: "A2" },
  { display: "A#, Ais", value: "A#2", alt: "Bb2" },
  { display: "Bb, Bes", value: "Bb2", alt: "A#2" },
  { display: "B", value: "B2" },
  { display: "cb, ces", value: "Cb2", alt: "B2" },

  // Octave 3 - Lowercase letters
  { display: "c", value: "C3" },
  { display: "c#, cis", value: "C#3", alt: "Db3" },
  { display: "db, des", value: "Db3", alt: "C#3" },
  { display: "d", value: "D3" },
  { display: "d#, dis", value: "D#3", alt: "Eb3" },
  { display: "eb, es", value: "Eb3", alt: "D#3" },
  { display: "e", value: "E3" },
  { display: "fb, fes", value: "Fb3", alt: "E3" },
  { display: "f", value: "F3" },
  { display: "f#, fis", value: "F#3", alt: "Gb3" },
  { display: "gb, ges", value: "Gb3", alt: "F#3" },
  { display: "g", value: "G3" },
  { display: "g#, gis", value: "G#3", alt: "Ab3" },
  { display: "ab, as", value: "Ab3", alt: "G#3" },
  { display: "a", value: "A3" },
  { display: "a#, ais", value: "A#3", alt: "Bb3" },
  { display: "bb, bes", value: "Bb3", alt: "A#3" },
  { display: "b", value: "B3" },
  { display: "cb', ces'", value: "Cb3", alt: "B3" },

  // Octave 4 - Lowercase with single apostrophe (Middle C region)
  { display: "c'", value: "C4" },
  { display: "c#', cis'", value: "C#4", alt: "Db4" },
  { display: "db', des'", value: "Db4", alt: "C#4" },
  { display: "d'", value: "D4" },
  { display: "d#', dis'", value: "D#4", alt: "Eb4" },
  { display: "eb', es'", value: "Eb4", alt: "D#4" },
  { display: "e'", value: "E4" },
  { display: "fb', fes'", value: "Fb4", alt: "E4" },
  { display: "f '", value: "F4" },
  { display: "f#', fis'", value: "F#4", alt: "Gb4" },
  { display: "gb', ges'", value: "Gb4", alt: "F#4" },
  { display: "g'", value: "G4" },
  { display: "g#', gis'", value: "G#4", alt: "Ab4" },
  { display: "ab', as'", value: "Ab4", alt: "G#4" },
  { display: "a'", value: "A4" },
  { display: "a#', ais'", value: "A#4", alt: "Bb4" },
  { display: "bb', bes'", value: "Bb4", alt: "A#4" },
  { display: "b'", value: "B4" },
  { display: "cb'', ces''", value: "Cb4", alt: "B4" },

  // Octave 5 - Lowercase with double apostrophe
  { display: "c''", value: "C5" },
  { display: "c#'', cis''", value: "C#5", alt: "Db5" },
  { display: "db'', des''", value: "Db5", alt: "C#5" },
  { display: "d''", value: "D5" },
  { display: "d#'', d#''", value: "D#5", alt: "Eb5" },
  { display: "eb'', es''", value: "Eb5", alt: "D#5" },
  { display: "e''", value: "E5" },
  { display: "fb'', fes''", value: "Fb5", alt: "E5" },
  { display: "f ''", value: "F5" },
  { display: "f#'', fis''", value: "F#5", alt: "Gb5" },
  { display: "gb'', ges''", value: "Gb5", alt: "F#5" },
  { display: "g''", value: "G5" },
  { display: "g#'', gis''", value: "G#5", alt: "Ab5" },
  { display: "ab'', as''", value: "Ab5", alt: "G#5" },
  { display: "a''", value: "A5" },
  { display: "a#'', ais''", value: "A#5", alt: "Bb5" },
  { display: "bb'', bes''", value: "Bb5", alt: "A#5" },
  { display: "b''", value: "B5" },
  { display: "cb''', ces'''", value: "Cb5", alt: "B5" },
    
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
        const vf = new Vex.Flow.Factory({renderer: {elementId: 'boo', width: 90, height: 200}}); // Hier wird eine neue VexFlow-Factory erstellt, die den Container "boo" verwendet und eine Breite von 150px und eine Höhe von 150px hat
        const score = vf.EasyScore();           // Hier wird ein EasyScore-Objekt erstellt, um die Noten zu verwalten
        const system = vf.System();             // Hier wird ein System-Objekt erstellt, um die Noten auf dem Notenblatt anzuordnen
        const voice = score.voice(score.notes('G4/wr')).setStrict(false); // Hier wird eine Stimme mit einer Viertelnote C4 erstellt

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
    
    // Choose clef based on octave and transpose if needed
    const octave = parseInt(noteValue.slice(-1));
    const clef = octave === 2 ? 'bass' : 'treble';
    
    // For bass clef (octave 2), transpose up one octave for correct display
    let displayNote = noteValue;
    if (octave === 2) {
      displayNote = noteValue.slice(0, -1) + '3'; // Replace octave 2 with 3 for display
    }
    
    const voice = score.voice(score.notes(`${displayNote}/wr`)).setStrict(false);
    
    system.addStave({
      voices: [voice]
    }).addClef(clef);
    
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
        note === givenNote.alt) { // Wenn die gespielte Note mit der generierten Note übereinstimmt (inklusive Alternativnamen)

    { // Wenn die gespielte Note mit der generierten Note übereinstimmt
        Feedback.textContent = "Richtig! Gut gemacht.🎶"; // Feedback für richtige Antwort
        element.classList.add("correct"); // Hier wird die angeklickte Taste mit der Klasse "correct" versehen, um visuelles Feedback zu geben
        streak++; // Streak wird erhöht
    }   
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


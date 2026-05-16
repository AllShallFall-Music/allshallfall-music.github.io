const intervalNamen = {
            1: "Prime",
            2: "Sekunde",
            3: "Terz",
            4: "Quarte",
            5: "Quinte",
            6: "Sexte",
            7: "Septime"
};

const C_Dur = {
  name: "C-Dur",
  notes: ["C", "D", "E", "F", "G", "A", "B"],
  intervals: {
    C: 1,
    D: 2,
    E: 3,
    F: 4,
    G: 5,
    A: 6,
    B: 7
  }
};














/*
// Weitere Dur-Tonleitern
const G_Dur = {
  name: "G-Dur",
  notes: ["G", "A", "B", "C", "D", "E", "F#"],
  intervals: {
    'G': 1,
    'A': 2,
    'B': 3,
    'C': 4,
    'D': 5,
    'E': 6,
    'F#': 7
  }
};

const D_Dur = {
  name: "D-Dur",
  notes: ["D", "E", "F#", "G", "A", "B", "C#"],
  intervals: {
    'D': 1,
    'E': 2,
    'F#': 3,
    'G': 4,
    'A': 5,
    'B': 6,
    'C#': 7
  }
};

const A_Dur = {
  name: "A-Dur",
  notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  intervals: {
    'A': 1,
    'B': 2,
    'C#': 3,
    'D': 4,
    'E': 5,
    'F#': 6,
    'G#': 7
  }
};

const E_Dur = {
  name: "E-Dur",
  notes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  intervals: {
    'E': 1,
    'F#': 2,
    'G#': 3,
    'A': 4,
    'B': 5,
    'C#': 6,
    'D#': 7
  }
};

const F_Dur = {
  name: "F-Dur",
  notes: ["F", "G", "A", "Bb", "C", "D", "E"],
  intervals: {
    'F': 1,
    'G': 2,
    'A': 3,
    'Bb': 4,
    'C': 5,
    'D': 6,
    'E': 7
  }
};

const Bb_Dur = {
  name: "Bb-Dur",
  notes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
  intervals: {
    'Bb': 1,
    'C': 2,
    'D': 3,
    'Eb': 4,
    'F': 5,
    'G': 6,
    'A': 7
  }
};

const Eb_Dur = {
  name: "Eb-Dur",
  notes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  intervals: {
    'Eb': 1,
    'F': 2,
    'G': 3,
    'Ab': 4,
    'Bb': 5,
    'C': 6,
    'D': 7
  }
};

const Ab_Dur = {
  name: "Ab-Dur",
  notes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  intervals: {
    'Ab': 1,
    'Bb': 2,
    'C': 3,
    'Db': 4,
    'Eb': 5,
    'F': 6,
    'G': 7
  }
};

const scales = [C_Dur, G_Dur, D_Dur, A_Dur, E_Dur, F_Dur, Bb_Dur, Eb_Dur, Ab_Dur];
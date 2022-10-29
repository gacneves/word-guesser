type GuessedLetterStatus = 'correct-position' | 'wrong-position' | 'nonexistent';

export type Guess = {
  word: string,
  active: boolean,
  guessedLettersStatus?: Array<GuessedLetterStatus>
}

// Initial mock value for guesses
const guesses: Array<Guess> = [
  { word: 'HORSE', active: false, guessedLettersStatus: ['nonexistent', 'nonexistent', 'correct-position', 'correct-position', 'correct-position'] },
  { word: 'MORSE', active: false, guessedLettersStatus: ['nonexistent', 'nonexistent', 'correct-position', 'correct-position', 'wrong-position'] },
  { word: 'PARSE', active: false, guessedLettersStatus: ['correct-position', 'correct-position', 'correct-position', 'correct-position', 'correct-position'] },
  { word: '', active: true },
  { word: '', active: true },
]

export default guesses;

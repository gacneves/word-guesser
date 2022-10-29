type GuessedLetterStatus = 'correct-position' | 'wrong-position' | 'nonexistent';

export type Guess = {
  word: string,
  active: boolean,
  guessedLettersStatus?: Array<GuessedLetterStatus>
}

export type GameInfo = {
  secretWord: string,
  guesses: [Guess, Guess, Guess, Guess, Guess, Guess],
  currentGuessIndex: number,
  score: number,
  highscore: number,
  gameOver: boolean
}
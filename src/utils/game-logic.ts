type GuessedLetterStatus = 'correct-position' | 'wrong-position' | 'nonexistent';

export type GameStatus = 'playing' | 'won' | 'lost';

export type Guess = {
  word: string,
  active: boolean,
  guessedLettersStatus?: Array<GuessedLetterStatus>
}

export type GameInfo = {
  secretWord: [string, string, string, string, string],
  currentSecretWordIndex: number,
  guesses: [Guess, Guess, Guess, Guess, Guess, Guess],
  currentGuessIndex: number,
  score: number,
  highscore: number,
  status: GameStatus
}

export const isPlaying = (status: GameStatus) => status === 'playing';

export const isCorrectGuess = (guessedLettersStatus: GuessedLetterStatus[]): boolean => guessedLettersStatus.every(status => status === 'correct-position');

// Creates the letters array of the input word
export const createLettersStatus = (guess: string, secret: string): Array<String> => {
  const letterStatus: Array<String> = []
  for (let i = 0; i < 5; i++) {
    if (secret.includes(guess[i])) {
      if (secret[i] === guess[i]) {
        letterStatus.push('correct-position');
      }
      else {
        letterStatus.push('wrong-position');
      }
    }
    else {
      letterStatus.push('nonexistent');
    }
  }
  return letterStatus;
};
import { createStore } from "redux";
import { GameInfo, GameStatus, isCorrectGuess, isPlaying } from "../utils/game-logic";

const INITIAL_STATE: GameInfo = {
  secretWord: 'TESTS',
  guesses: [
    { word: '', active: true },
    { word: '', active: true },
    { word: '', active: true },
    { word: '', active: true },
    { word: '', active: true },
    { word: '', active: true }
  ],
  currentGuessIndex: 0,
  score: 0,
  highscore: 0,
  status: 'playing'
}

function game(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'ADD_LETTER':
      if (!isPlaying(state.status)) return { ...state };
      const currentGuess = state.guesses[state.currentGuessIndex];
      currentGuess.word = currentGuess.word.length < 5 ? currentGuess.word + action.letter : currentGuess.word;
      return { ...state, guesses: state.guesses };
    case 'REMOVE_LETTER':
      if (!isPlaying(state.status)) return { ...state };
      const currentGuess2 = state.guesses[state.currentGuessIndex];
      currentGuess2.word = currentGuess2.word.slice(0, -1);
      return { ...state, guesses: state.guesses };
    case 'SUBMIT_GUESS':
      if (!isPlaying(state.status)) return { ...state };
      const currentGuessIndex = state.currentGuessIndex;
      const currentGuess3 = state.guesses[currentGuessIndex];
      currentGuess3.guessedLettersStatus = action.status;
      currentGuess3.active = false;
      state.currentGuessIndex = currentGuessIndex + 1;
      if (isCorrectGuess(action.status)) return { ...state, guesses: state.guesses, score: state.score + 1, status: ('won' as GameStatus) };
      else if (currentGuessIndex === 5) return { ...state, guesses: state.guesses, status: ('lost' as GameStatus), highscore: state.score > state.highscore ? state.score : state.highscore };
      return { ...state, guesses: state.guesses };
    default:
      return state;
  }
}

const store = createStore(game);

export type gameState = ReturnType<typeof game>;

export default store;
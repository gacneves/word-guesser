import { createStore } from "redux";
import { GameInfo } from "../utils/game-logic";

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
  gameOver: false
}

function game(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'ADD_LETTER':
      const currentGuess = state.guesses[state.currentGuessIndex];
      currentGuess.word = currentGuess.word.length < 5 ? currentGuess.word + action.letter : currentGuess.word;
      return { ...state, guesses: state.guesses };
    case 'REMOVE_LETTER':
      const currentGuess2 = state.guesses[state.currentGuessIndex];
      currentGuess2.word = currentGuess2.word.slice(0, -1);
      return { ...state, guesses: state.guesses };
    default:
      return state;
  }
}

const store = createStore(game);

export type gameState = ReturnType<typeof game>;

export default store;
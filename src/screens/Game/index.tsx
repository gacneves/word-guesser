import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { gameState } from '../../store';
import { createLettersStatus } from '../../utils/game-logic';
import Button from '../../components/button';
import Keyboard from '../../components/keyboard';
import WordGuess from '../../components/word-guess';
import globalStyles from '../../styles';
import theme from '../../theme';

const Game = () => {
  const gameInfo = useSelector((state: gameState) => state);

  const dispatch = useDispatch();

  function computeWord() {
    const currentGuess = gameInfo.guesses[gameInfo.currentGuessIndex].word;
    if (currentGuess.length === 5) {
      const status = createLettersStatus(currentGuess, gameInfo.secretWord);
      dispatch({ type: 'SUBMIT_GUESS', status })
    }
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.viewSection}>
        <Text style={[globalStyles.text, styles.header]}>Guess the word!</Text>
        <Text style={[globalStyles.text, styles.score]}>Score:{gameInfo.score}</Text>
        <View style={styles.guesses}>
          {gameInfo.guesses.map((guess, index) =>
            <WordGuess key={index} word={guess.word} active={guess.active} guessedLettersStatus={guess.guessedLettersStatus} />
          )}
        </View>
      </View>
      <View style={styles.inputSection}>
        <Button
          title='Guess'
          width={200}
          height={50}
          radius={10}
          titleSize={30}
          onPress={computeWord}
        />
        <View style={styles.keyboard}>
          <Keyboard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSection: {
    flex: 2.5,
    alignItems: 'center'
  },
  inputSection: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 32
  },
  score: {
    fontSize: 18,
    marginTop: 15,
    color: theme.colors.secondary
  },
  guesses: {
    marginTop: 10,
  },
  keyboard: {
    marginTop: 20
  }
});

export default Game;
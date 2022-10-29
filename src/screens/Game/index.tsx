import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { gameState } from '../../store';
import Button from '../../components/button';
import WordGuess from '../../components/word-guess';
import globalStyles from '../../styles';
import theme from '../../theme';

const Game = () => {
  const gameInfo = useSelector((state: gameState) => state);

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
          onPress={() => console.log('Guess')}
        />
        <Text style={globalStyles.text}>Keyboard</Text>
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
  }
});

export default Game;
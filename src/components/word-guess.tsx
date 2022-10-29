import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Guess } from '../utils/game-logic';
import globalStyles from '../styles';
import theme from '../theme';

const handleWord = (word: string): Array<string> => {
  const wordArray = word.split('');
  const wordArrayLength = wordArray.length;
  const wordArrayLengthDifference = 5 - wordArrayLength;
  if (wordArrayLengthDifference > 0) {
    for (let i = 0; i < wordArrayLengthDifference; i++) {
      wordArray.push('');
    }
  }
  return wordArray;
}

const WordGuess = ({ word, active, guessedLettersStatus }: Guess) => {
  const [wordArray, setWordArray] = React.useState(word.split(''));

  React.useEffect(() => {
    // Fixed word size to 5
    setWordArray(handleWord(word));
  }, [word]);

  return (
    <View style={styles.word}>
      {wordArray.map((letter, index) => (
        <View
          key={index}
          style={[
            styles.letterView,
            !active && styles.inactive,
            guessedLettersStatus && guessedLettersStatus[index] === 'correct-position' && styles.correct,
            guessedLettersStatus && guessedLettersStatus[index] === 'wrong-position' && styles.wrong
          ]}
        >
          <Text style={[globalStyles.text, styles.letterText]}>{letter}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  word: {
    width: 300,
    height: 55,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  letterView: {
    width: 55,
    borderColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactive: {
    backgroundColor: theme.colors.backgroundSecondary,
  },
  correct: {
    backgroundColor: theme.colors.primary,
  },
  wrong: {
    backgroundColor: theme.colors.secondary,
  },
  letterText: {
    fontSize: 32,
    // Fix the text centering due to the letter font
    marginTop: -5,
    marginLeft: 2
  }
});

export default WordGuess;

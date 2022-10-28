import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../components/button';
import globalStyles from '../../styles';
import theme from '../../theme';

const Game = () => {
  const currentScore = 6 // Initial mock value for tries

  const guesses = ['word', 'word', 'word', 'word', 'word', 'word'] // Initial mock value for guesses

  return (
    <View style={globalStyles.container}>
      <View style={styles.viewSection}>
        <Text style={[globalStyles.text, styles.header]}>Guess the word!</Text>
        <Text style={[globalStyles.text, styles.score]}>Score:{currentScore}</Text>
        {guesses.map((guess, index) => (
          <Text key={index} style={globalStyles.text}>{guess}</Text>
        ))}
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
    flex: 2,
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
  }
});

export default Game;
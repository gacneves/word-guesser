import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import globalStyles from '../styles';
import theme from '../theme';

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const Keyboard = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        {firstRow.map((letter, index) => (
          <TouchableOpacity key={index} style={styles.key} onPress={() => dispatch({ type: 'ADD_LETTER', letter })}>
            <Text style={[globalStyles.text, styles.letter]}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.secondRow}>
        {secondRow.map((letter, index) => (
          <TouchableOpacity key={index} style={styles.key} onPress={() => dispatch({ type: 'ADD_LETTER', letter })}>
            <Text style={[globalStyles.text, styles.letter]}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.thirdRow}>
        {thirdRow.map((letter, index) => (
          <TouchableOpacity key={index} style={styles.key} onPress={() => dispatch({ type: 'ADD_LETTER', letter })}>
            <Text style={[globalStyles.text, styles.letter]}>{letter}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.key} onPress={() => dispatch({ type: 'REMOVE_LETTER' })}>
          <Text style={[globalStyles.text, styles.letter]}>⏪</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  key: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: theme.colors.backgroundSecondary,
  },
  letter: {
    fontSize: 18,
    color: theme.colors.text,
    // Fix the text centering due to the letter font
    marginTop: -2,
    marginLeft: 1
  },
  firstRow: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondRow: {
    marginTop: 10,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdRow: {
    marginTop: 10,
    width: 290,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Keyboard;
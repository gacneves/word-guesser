import React from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
import globalStyles from '../../styles';
import theme from '../../theme';

const Home = () => {
  const highScore = 10 // Initial mock value for high score

  const animationState = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationState, {
          toValue: 5,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(animationState, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
    ).start();
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={styles.section}>
        <Animated.Text style={[globalStyles.text, styles.title, { transform: [{ translateY: animationState }] }]}>Word{'\n'}Guesser!</Animated.Text>
      </View>
      <View style={styles.section}>
        <Text style={[globalStyles.text, styles.score]}>High Score</Text>
        <Text style={[globalStyles.text, styles.score]}>{highScore}</Text>
      </View>
      <View style={styles.section}>
        <Text style={[globalStyles.text, styles.play]}>Start</Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: theme.colors.primary,
    marginRight: -15 // This is a hack to get the title centered because the symbol "!" is wider than the other characters
  },
  score: {
    fontSize: 28,
    textAlign: 'center',
    paddingBottom: 30,
    color: theme.colors.text,
  },
  play: {
    fontSize: 48,
    textAlign: 'center',
    color: theme.colors.secondary,
  }
});

export default Home;
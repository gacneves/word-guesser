import React from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { gameState } from '../../store';
import { StackParamList } from '../../navigators';
import Button from '../../components/button';
import globalStyles from '../../styles';
import theme from '../../theme';

// Getting the type of the game screen navigation prop
type GameScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Game'>;

const Home = () => {
  const navigation = useNavigation<GameScreenNavigationProp>();

  const highScore = useSelector((state: gameState) => state.highscore);

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

  const handleStart = () => {
    navigation.navigate('Game');
  }

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
        <Button
          title='Start'
          color={theme.colors.secondary}
          width={250}
          height={75}
          radius={10}
          titleSize={38}
          onPress={handleStart}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: theme.colors.primary,
    marginRight: -15 // This is a hack to get the title centered because the symbol "!" is wider than the other characters
  },
  score: {
    fontSize: 28,
    paddingBottom: 30,
    color: theme.colors.text,
  }
});

export default Home;
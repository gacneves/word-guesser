import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Game from '../screens/Game';

export type StackParamList = {
  Home: undefined;
  Game: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;
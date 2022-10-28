import { StyleSheet } from 'react-native';
import theme from './theme';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  text: {
    fontFamily: 'PublicPixel-z84yD',
    color: 'theme.colors.text'
  }
});

export default globalStyles;
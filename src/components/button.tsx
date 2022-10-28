import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import theme from '../theme';

type Props = {
  title: string,
  titleSize?: number,
  width?: number,
  height?: number,
  radius?: number,
  color?: string,
  onPress?: () => void
}

const Button = ({ title, titleSize, width, height, radius, color, onPress }: Props) => {

  const styles = StyleSheet.create({
    button: {
      width: width || 100,
      height: height || 50,
      backgroundColor: color || theme.colors.primary,
      borderRadius: radius || 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: titleSize || 20,
      color: theme.colors.textSecondary
    }
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[globalStyles.text, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
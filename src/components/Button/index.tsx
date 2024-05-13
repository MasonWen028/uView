import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ButtonProps {
  theme: string;
  size: 'default' | 'middle' | 'mini';
  shape: 'angle' | 'round';
  hollow: boolean;
  ripple: boolean;
  thinBorder: boolean;
  siLoading: boolean;
}

const Button = (): React.JSX.Element => {
  const btnStyles = StyleSheet.create({
    btnDefault: {
      color: '#606266',
      borderColor: '#c0c4cc',
      backgroundColor: '#ffffff',
    },
    btnPrimary: {
      color: '#2979ff',
      borderColor: '#a0cfff',
      backgroundColor: '#ecf5ff',
    },
    btnError: {
      color: '#fa3534',
      borderColor: '#fab6b6',
      backgroundColor: '#fef0f0',
    },
    btnWarning: {
      color: '#ff9900',
      borderColor: '#fcbd71',
      backgroundColor: '#fdf6ec',
    },
    btnSuccess: {
      color: '#19be6b ',
      borderColor: '#71d5a1',
      backgroundColor: '#dbf1e1',
    },
    btnBasis: {
      position: 'relative',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      borderRadius: 5,
    },
  });

  return <View></View>;
};

export default Button;

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

interface CircleProps {
  backColor: string;
  progColor: string;
  size: number;
}

function Circle({
  backColor = 'rgb(228, 228, 228)',
  progColor = '#000',
  size = 50,
}: CircleProps): React.JSX.Element {
  const styles = StyleSheet.create({
    circle: {
      width: size,
      height: size,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: size / 2,
      borderTopColor: backColor,
      borderLeftColor: backColor,
      borderRightColor: backColor,
      borderBottomColor: progColor,
    },
  });
  return <SafeAreaView style={styles.circle} />;
}

export default Circle;

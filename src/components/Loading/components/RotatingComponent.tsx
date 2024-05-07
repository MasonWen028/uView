import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import Circle from './Circle';
import Flower from './Flower';

interface RotatingComponentProps {
  color?: string;
  size?: number;
  rotate?: boolean;
  rotationSpeed?: number;
  type?: 'circle' | 'flower';
  backColor?: string;
  progColor?: string;
}

const RotatingComponent = ({
  rotate,
  rotationSpeed,
  type = 'circle',
  backColor = 'rgb(228, 228, 228)',
  progColor = '#000',
  size = 50,
}: RotatingComponentProps): React.JSX.Element => {
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (rotate) {
      const animateRotation = () => {
        rotateAnimation.setValue(0);
        Animated.timing(rotateAnimation, {
          toValue: 1,
          duration: rotationSpeed,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(animateRotation);
      };

      animateRotation();
      return () => rotateAnimation.stopAnimation();
    }
  }, [rotate, rotateAnimation, rotationSpeed]);

  const rotation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[styles.container, {transform: [{rotate: rotation}]}]}>
      {type === 'circle' && (
        <Circle backColor={backColor} progColor={progColor} size={size} />
      )}
      {type === 'flower' && <Flower size={size} />}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RotatingComponent;

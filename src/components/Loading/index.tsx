import React from 'react';
// import {IconOutline} from '@ant-design/icons-react-native';
// import {Animated, View, StyleSheet} from 'react-native';
import RotatingComponent from './components/RotatingComponent';
import Mask from '../Mask';
interface LoadingProps {
  size?: number;
  rotate?: boolean;
  rotationSpeed?: number;
  show: boolean;
  backColor?: string;
  progColor?: string;
  type?: 'circle' | 'flower';
}

const Loading = ({
  size = 34,
  show = true,
  rotate = true,
  rotationSpeed = 2000,
  type = 'circle',
}: LoadingProps) => {
  if (!show) {
    return null;
  }

  return (
    <Mask show={true}>
      <RotatingComponent
        size={size}
        type={type}
        rotate={rotate}
        rotationSpeed={rotationSpeed}
      />
    </Mask>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 50,
//     height: 50,
//   },
// });

export default Loading;

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import RotatingComponent from '../Loading/components/RotatingComponent';
import {IconOutline} from '@ant-design/icons-react-native';

interface ImageWithStatusProps {
  size?: number;
  src: string;
  shape: 'circle' | 'cube';
  loading?: React.JSX.Element;
  error?: React.JSX.Element;
  state?: number; //0 | 1 | -1
}

function ImageWithStatus({
  size,
  src,
  shape,
  loading,
  error,
  state,
}: ImageWithStatusProps): React.JSX.Element {
  const isCircle = shape === 'circle';

  const viewStyles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const borderRadius = isCircle ? size : 0;
  return (
    <View style={viewStyles.container}>
      {state === 0 && (
        <Image
          // onLoadStart={handleLoadStart}
          // onError={handleLoadError}
          // onLoad={handleLoaded}
          source={{uri: src, cache: 'only-if-cached'}}
          width={size}
          height={size}
          borderRadius={borderRadius}
        />
      )}
      {state === 1 &&
        (loading ? loading : <RotatingComponent type="flower" rotate={true} />)}
      {state === 2 && (error ? error : <IconOutline name="exclamation" />)}
    </View>
  );
}

export default ImageWithStatus;

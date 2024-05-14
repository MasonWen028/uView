import RotatingComponent from '@/components/Loading/components/RotatingComponent';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface InnerComponentProps {
  isLoading: boolean;
  text: string;
  style: Object;
  textColor: string;
}

const InnerComponent = ({
  isLoading,
  text,
  style,
  textColor,
}: InnerComponentProps): React.JSX.Element => {
  const innerContainer = StyleSheet.create({
    hasLoading: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <View style={innerContainer.hasLoading}>
      {isLoading && (
        <RotatingComponent
          type="flower"
          rotate={true}
          size={20}
          color={textColor}
        />
      )}
      <Text style={style}>{text}</Text>
    </View>
  );
};

export default InnerComponent;

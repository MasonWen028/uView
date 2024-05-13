import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

interface SegmentedControlProps {
  options: string[];
  mode?: 'button' | 'subsection';
  selectedIndex: number;
  activeColor?: string;
  onSelectedChanged: (index: number) => void;
}

const SegmentedControl = ({
  options,
  selectedIndex,
  mode = 'button',
  activeColor = '',
  onSelectedChanged,
}: SegmentedControlProps) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };
  const indicatorWidth = containerWidth / options.length;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const moveTo = (index: number) => {
    onSelectedChanged(index);
    let toVal = index * indicatorWidth;
    if (index === options.length - 1) {
      toVal = toVal - 2;
    }
    Animated.timing(animatedValue, {
      toValue: toVal,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: selectedIndex * indicatorWidth,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, indicatorWidth, selectedIndex]);
  const selectedColor = activeColor ? activeColor : 'rgb(48, 49, 51)';

  const textColor = (index: number) => {
    return selectedIndex === index ? selectedColor : '#303133';
  };

  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      marginRight: 1,
      borderRadius: responsiveFontSize(0.5),
      backgroundColor: 'rgb(242,242,242)',
      borderWidth: 1,
      borderColor: 'rgb(242,242,242)',
    },
    buttonContainer: {
      flexDirection: 'row',
      position: 'relative',
      height: responsiveFontSize(4.5),
    },
    segment: {
      flex: 1,
      textAlign: 'center',
      fontSize: responsiveFontSize(1.8),
      height: responsiveFontSize(4.5),
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    text: {
      color: 'black',
    },
    indicator: {
      position: 'absolute',
      padding: 2,
      bottom: 1,
      height: mode === 'button' ? responsiveFontSize(4.5) - 2 : 1,
      borderRadius: mode === 'button' ? responsiveFontSize(0.5) : 0,
      backgroundColor: mode === 'button' ? 'rgb(255, 255, 255)' : activeColor,
    },
    bottomIndicator: {
      bottom: 1,
    },
  });
  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.buttonContainer}>
        <Animated.View
          style={[
            styles.indicator,
            {
              width: indicatorWidth,
              transform: [{translateX: animatedValue}],
            },
            mode !== 'button' && styles.bottomIndicator,
          ]}
        />
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.segment}
            onPress={() => moveTo(index)}>
            <Text
              style={{
                color: textColor(index),
                lineHeight: responsiveFontSize(4.5),
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SegmentedControl;

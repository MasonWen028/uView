import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

interface ConfigItemProps {
  header: string;
  children: React.JSX.Element;
}

function ConfigItem({header, children}: ConfigItemProps): React.JSX.Element {
  const itemStyles = StyleSheet.create({
    titleContainer: {
      position: 'relative',
      paddingLeft: responsiveFontSize(0.5),
      height: responsiveFontSize(3),
    },
    beforeStyle: {
      position: 'absolute',
      width: responsiveFontSize(0.3),
      height: responsiveFontSize(3),
      backgroundColor: '#606266',
      borderRadius: responsiveFontSize(1.5),
      left: responsiveFontSize(1),
    },
    title: {
      fontSize: responsiveFontSize(2),
      position: 'relative',
      paddingLeft: responsiveFontSize(2),
    },
    wrap: {
      // alignItems: 'flex-start',
      // height: responsiveFontSize(5),
      display: 'flex',
    },
  });

  return (
    <View style={itemStyles.wrap}>
      <View style={itemStyles.titleContainer}>
        <View style={itemStyles.beforeStyle} />
        <Text style={itemStyles.title}>{header}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
}

export default ConfigItem;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

interface ColorBoxProps {
  title: string;
  items: {
    name: string;
    color: string;
    textColor?: string;
  }[];
}

const ColorBox = ({title, items}: ColorBoxProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.titleContainer}>
        <View style={styles.beforeStyle} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.colorBox}>
        {items.map((item, index) => (
          <View
            key={index}
            style={[styles.colorItem, {backgroundColor: item.color}]}>
            <Text
              style={(styles.colorTitle, {color: item.textColor || '#FFFFFF'})}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.colortextColor,
                {color: item.textColor || '#FFFFFF'},
              ]}>
              {item.color}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: responsiveFontSize(0.5),
    marginBottom: responsiveFontSize(0.5),
  },
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
  colorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveFontSize(2),
  },
  colorItem: {
    flex: 1,
    marginHorizontal: responsiveFontSize(1),
    flexDirection: 'column',
    borderRadius: responsiveFontSize(0.5),
    paddingVertical: responsiveFontSize(0.6),
    alignItems: 'center',
  },
  colorTitle: {
    fontSize: responsiveFontSize(2),
  },
  colortextColor: {
    fontSize: responsiveFontSize(1.5),
  },
});

export default ColorBox;

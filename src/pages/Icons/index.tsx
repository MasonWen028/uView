import {IconOutline} from '@ant-design/icons-react-native';
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Animated,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import icons from '@/data/icons.json';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const IconDisplay = () => {
  const selectIcon = (name: any) => {
    const copyText = `<IconOutline name="${name}" />`;
  };
  const [numColumns] = useState(3);

  return (
    <AnimatedFlatList
      style={styles.wrap}
      data={icons}
      numColumns={numColumns}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => selectIcon(item)}>
          <IconOutline
            name={item as any}
            size={responsiveFontSize(4)}
            color="#909399"
          />
          <Text style={styles.iconName}>{item as any}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrap: {
    margin: responsiveFontSize(1),
    paddingTop: responsiveFontSize(1),
  },
  iconItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveFontSize(15),
    flex: 0,
    flexGrow: 1,
    flexBasis: '33.33333333%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e4e7ed',
  },
  iconName: {
    color: '#909399',
    fontSize: responsiveFontSize(2),
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default IconDisplay;

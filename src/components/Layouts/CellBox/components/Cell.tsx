import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {IconOutline} from '@ant-design/icons-react-native';
import {CellProps} from '../type';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function Cell({icon, title, title_en, path}: CellProps): React.JSX.Element {
  const navigation = useNavigation();

  const {lang} = useSelector((state: any) => state.lang);

  const name = lang === 'en' ? title_en : title;

  const handlePress = () => {
    navigation.navigate(path, {title: name});
  };

  const getIcon = () => {
    return 'https://cdn.uviewui.com/uview/example/' + icon + '.png';
  };

  return (
    <TouchableOpacity style={styles.cell} onPress={handlePress}>
      <Image style={styles.cellImage} source={{uri: getIcon()}} />
      <Text style={styles.cellText}>{lang === 'en' ? title_en : title}</Text>
      <IconOutline style={styles.cellArrow} name="right" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    paddingVertical: responsiveFontSize(2),
    paddingHorizontal: responsiveFontSize(2),
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveFontSize(3),
    color: '#606266',
    backgroundColor: '#fff',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cellImage: {
    height: responsiveFontSize(3),
    width: responsiveFontSize(3),
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'left',
  },
  cellText: {
    flex: 1,
    marginLeft: responsiveFontSize(2),
    width: 'auto',
    fontWeight: '500',
  },
  cellArrow: {
    marginLeft: 5,
    color: '#969799',
    fontSize: responsiveFontSize(2),
  },
});

export default Cell;

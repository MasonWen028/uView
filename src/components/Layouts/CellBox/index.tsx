import {StyleSheet, View, Text} from 'react-native';
import Cell from './components/Cell';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {CellBoxProps} from './type';
import {useSelector} from 'react-redux';

function CellBox({
  groupName,
  groupName_en,
  list,
}: CellBoxProps): React.JSX.Element {
  const {lang} = useSelector((state: any) => state.lang);

  return (
    <View style={styles.container}>
      <Text style={styles.groupName}>
        {lang === 'en' ? groupName_en : groupName}
      </Text>
      {list.map(item => (
        <Cell {...item} key={item.path} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  groupName: {
    paddingTop: responsiveFontSize(2),
    paddingRight: responsiveFontSize(2),
    paddingBottom: responsiveFontSize(2),
    paddingLeft: responsiveFontSize(2),
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveFontSize(3),
    textAlign: 'left',
    color: '#909399',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 5,
  },
});
export default CellBox;

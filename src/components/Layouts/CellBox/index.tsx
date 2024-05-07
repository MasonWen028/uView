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
        <Cell {...item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  groupName: {
    paddingTop: responsiveFontSize(2),
    paddingRight: responsiveFontSize(2),
    paddingBottom: responsiveFontSize(0.5),
    paddingLeft: responsiveFontSize(2),
    fontSize: responsiveFontSize(2),
    textAlign: 'left',
    color: '#909399',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
export default CellBox;

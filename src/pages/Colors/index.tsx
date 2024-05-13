import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import colors from '@/data/colors.json';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <ScrollView style={styles.wrap}>
      {colors.map((group, index) => (
        <ColorBox key={index} title={group.category} items={group.items} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 18,
    marginTop: 0,
    flex: 1,
  },
});

export default App;

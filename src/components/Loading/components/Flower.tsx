import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';

function Flower({size = 50}): React.JSX.Element {
  const styles = StyleSheet.create({
    flower: {
      width: size,
      height: size,
    },
  });

  return (
    <SvgUri
      style={styles.flower}
      uri={require('../../../../assets/images/loading.svg')}
    />
  );
}

export default Flower;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import ConfigItem from './components/ConfigItem';
import {useSelector} from 'react-redux';
import SegmentedControl from '@/components/SegmentedControl';

type Item = {
  states: string[];
  states_en: string[];
  label: string;
  label_en: string;
  selected: number;
  selectedChanged: (val: number) => void;
};

type ItemsArray = {
  items: Item[];
};

function ConfigBox({items}: ItemsArray): React.JSX.Element {
  const {lang} = useSelector((state: any) => state.lang);
  const configStyles = StyleSheet.create({
    wrap: {
      backgroundColor: '#fff',
    },
    configTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      fontWeight: 'bold',
    },
  });
  return (
    <View style={configStyles.wrap}>
      <Text style={configStyles.configTitle}>参数配置</Text>
      {items.map(item => (
        <ConfigItem
          key={item.label}
          header={lang === 'en' ? item.label_en : item.label}>
          <SegmentedControl
            selectedIndex={item.selected}
            onSelectedChanged={item.selectedChanged}
            options={lang === 'en' ? item.states : item.states_en}
          />
        </ConfigItem>
      ))}
    </View>
  );
}

export default ConfigBox;

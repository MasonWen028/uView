import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useTranslation} from 'react-i18next';
import {TabBarItemProps} from './typs';
import TabBarItem from './components/TabbarItem';

function Tabbar(): React.JSX.Element {
  const {t} = useTranslation();

  const tabItemFontSize = responsiveFontSize(2);

  const [selectedItem, setSelectedItem] = useState('components');

  const handleItemSelect = (name: string) => {
    setSelectedItem(() => name);
  };

  const items: TabBarItemProps[] = [
    {
      name: 'components',
      labelSize: tabItemFontSize,
      iconSize: tabItemFontSize,
      onPress: handleItemSelect,
      selected: true,
      label: t('tab.components'),
      iconName: 'windows',
      selectedColor: '#e91e63',
    },
    {
      name: 'tools',
      labelSize: tabItemFontSize,
      iconSize: tabItemFontSize,
      onPress: handleItemSelect,
      selected: false,
      label: t('tab.tools'),
      iconName: 'tool',
      selectedColor: '#e91e63',
    },
    {
      name: 'templates',
      labelSize: tabItemFontSize,
      iconSize: tabItemFontSize,
      onPress: handleItemSelect,
      selected: false,
      label: t('tab.templates'),
      iconName: 'block',
      selectedColor: '#e91e63',
    },
  ];

  return (
    <SafeAreaView style={styles.tabbarBottom}>
      <SafeAreaView style={styles.tabbarBorder} />
      <SafeAreaView style={styles.tabbar}>
        {items.map(item => (
          <TabBarItem
            {...item}
            key={item.name}
            selected={selectedItem === item.name}
          />
        ))}
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabbarBottom: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 998,
    height: responsiveFontSize(6),
    backgroundColor: '#ffffff',
  },
  tabbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabbarBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 1,
    transform: [{scaleY: 0.5}],
  },
});

export default Tabbar;

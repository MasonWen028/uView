import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {IconOutline} from '@ant-design/icons-react-native';
import {useTranslation} from 'react-i18next';
import {TabBarItemProps} from '../typs';

const TabBarItem = ({
  selectedColor = '#000',
  followSystemTheme = false,
  iconName,
  label,
  selected,
  onPress,
  iconSize,
  labelSize,
  name,
}: TabBarItemProps) => {
  const {t} = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  let color = selected ? selectedColor : 'rgb(144, 147, 153)';
  if (isDarkMode && followSystemTheme) {
    color = selected ? selectedColor : 'white';
  }

  const handlePress = () => {
    if (!selected) {
      onPress(name);
    }
  };

  const styles = StyleSheet.create({
    tabbarItem: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flex: 1,
    },
    tabbarItemIcon: {
      height: iconSize + 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
    },
    tabbarItemLabel: {
      fontSize: labelSize,
      lineHeight: labelSize + 2,
      marginTop: 5,
    },
  });

  const selectedIconSize = selected ? iconSize + 4 : iconSize;

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.tabbarItem}
      activeOpacity={selected ? 1 : 0.2}>
      <SafeAreaView>
        <SafeAreaView style={styles.tabbarItemIcon}>
          <IconOutline
            name={iconName as any}
            size={selectedIconSize}
            color={color}
          />
        </SafeAreaView>
        <Text
          style={[
            styles.tabbarItemLabel,
            {
              fontSize: labelSize,
              color: color,
            },
          ]}>
          {t(label)}
        </Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default TabBarItem;

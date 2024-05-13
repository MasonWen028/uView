import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import TabBarItem from './testTabItem';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {CustomTabBarOptions} from '../../../components/Layouts/Tabbar/type';

function Tabbar({state, descriptors, navigation}: BottomTabBarProps) {
  const tabItemFontSize = responsiveFontSize(2);
  return (
    <SafeAreaView style={styles.tabbarBottom}>
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const options = descriptors[route.key].options as CustomTabBarOptions;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          console.log(descriptors);
          // 根据需要使用 options 或其他自定义逻辑设置图标等
          return (
            <TabBarItem
              key={route.key}
              label={label as string}
              selectedColor="#e91e63"
              selected={isFocused}
              onPress={onPress}
              iconName={options.iconName as string}
              iconSize={tabItemFontSize}
              labelSize={tabItemFontSize}
              name={''} // 需要的其他 props
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabbarBottom: {
    flex: 1,
    position: 'absolute',
    bottom: -1,
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
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
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

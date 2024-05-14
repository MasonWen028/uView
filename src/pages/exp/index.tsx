import React from 'react';
import ComponentsScreen from '@/pages/components';
import ToolsScreen from '@/pages/tools';
import TemplatesScreen from '@/pages/templates';
import {Provider} from 'react-redux';
import store from '@/stores';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Color from '@/pages/Colors';
import CustomTabNavigator from '@/components/Layouts/CustomTabNavigator';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import IconDisplay from '../Icons';
import Images from '../Images';
import Buttons from '../button';
import Layout from '../layout';

function MyTabs() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const containerStyle = {
    flex: 1,
    boder: 0,
  };

  const TabItems = [
    {
      name: 'Components',
      component: ComponentsScreen,
      icon: 'windows',
    },
    {
      name: 'Tools',
      component: ToolsScreen,
      icon: 'tool',
    },
    {
      name: 'Templates',
      component: TemplatesScreen,
      icon: 'block',
    },
  ];

  const stackItems = [
    {
      name: 'color',
      component: Color,
    },
    {
      name: 'icon',
      component: IconDisplay,
    },
    {
      name: 'image',
      component: Images,
    },
    {
      name: 'button',
      component: Buttons,
    },
    {
      name: 'layout',
      component: Layout,
    },
  ];

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <PageNav /> */}
      <SafeAreaView style={containerStyle}>
        <CustomTabNavigator NavItems={TabItems} StackItems={stackItems} />
      </SafeAreaView>
    </Provider>
  );
}

export default MyTabs;

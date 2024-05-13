import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Tabbar from '@/components/Layouts/Tabbar';
import {CustomTabBarOptions} from '@/components/Layouts/Tabbar/type';

interface TabNavigatorProps {
  NavItems: {
    name: string;
    component: React.ComponentType<any>;
    icon: string;
  }[];
  selectedColor?: string;
}

const Tab = createBottomTabNavigator();
function Nav({
  NavItems,
  selectedColor = '#e91e63',
}: TabNavigatorProps): React.JSX.Element {
  return (
    <Tab.Navigator
      backBehavior="history"
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <Tabbar {...props} selectedColor={selectedColor} />}
      screenOptions={{headerShown: false}}>
      {NavItems.map(tabItem => (
        <Tab.Screen
          name={tabItem.name}
          key={tabItem.name}
          component={tabItem.component}
          options={
            {
              iconName: tabItem.icon,
            } as CustomTabBarOptions
          }
        />
      ))}
    </Tab.Navigator>
  );
}

export default Nav;

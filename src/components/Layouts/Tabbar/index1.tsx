import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {IconOutline} from '@ant-design/icons-react-native';
import {NavigationContainer} from '@react-navigation/native';

interface TabBarIconProps {
  color: string;
  size: number;
}

interface TabBarProps {
  current: string;
  setCurrent: (screen: string) => void;
}

const Tab = createBottomTabNavigator();

function Tabbar({current, setCurrent}: TabBarProps): React.JSX.Element {
  const {t} = useTranslation();

  const componentIcon = useMemo(() => {
    return ({color, size}: TabBarIconProps) => (
      <IconOutline name="windows" color={color} size={size} />
    );
  }, []);

  const toolIcon = useMemo(() => {
    return ({color, size}: TabBarIconProps) => (
      <IconOutline name="tool" color={color} size={size} />
    );
  }, []);

  const templateIcon = useMemo(() => {
    return ({color, size}: TabBarIconProps) => (
      <IconOutline name="block" color={color} size={size} />
    );
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={current}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Feed"
          component={() => null}
          options={{
            tabBarLabel: t('tab.components'),
            tabBarIcon: componentIcon,
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              setCurrent('Feed');
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={() => null}
          options={{
            tabBarLabel: t('tab.tools'),
            tabBarIcon: toolIcon,
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              setCurrent('Notifications');
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={() => null}
          options={{
            tabBarLabel: t('tab.templates'),
            tabBarIcon: templateIcon,
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              setCurrent('Profile');
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabbar;

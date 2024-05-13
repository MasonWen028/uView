import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Nav from './components/Nav';

// 定义 TabNavigator 组件的 Props 类型
interface TabNavigatorProps {
  NavItems?: {
    name: string;
    component: React.ComponentType<any>;
    icon: string;
  }[];
  StackItems?: {
    name: string;
    component: React.ComponentType<any>;
  }[];
  selectedColor?: string;
}

// component={() => (
//   <Nav NavItems={NavItems} selectedColor={selectedColor} />
// )}

const Stack = createStackNavigator();

const CustomTabNavigator: React.FC<TabNavigatorProps> = ({
  NavItems,
  StackItems,
  selectedColor = '#e91e63',
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {NavItems && (
          <Stack.Screen name="main" options={{headerShown: false}}>
            {props => (
              <Nav
                {...props}
                NavItems={NavItems}
                selectedColor={selectedColor}
              />
            )}
          </Stack.Screen>
        )}
        {StackItems &&
          StackItems.map(stack => (
            <Stack.Screen
              name={stack.name}
              component={stack.component}
              options={({route}) => ({
                headerTransparent: false,
                headerTitle: route.params.title,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerShown: true,
                headerStyle: {backgroundColor: 'rgb(242,242,242)'},
              })}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomTabNavigator;

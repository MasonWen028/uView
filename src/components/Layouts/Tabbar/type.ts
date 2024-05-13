import {
  BottomTabNavigationOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

export interface CustomTabBarOptions extends BottomTabNavigationOptions {
  iconName?: string;
}
export interface CustomBottomTabBarProps extends BottomTabBarProps {
  selectedColor?: string;
}

export interface TabBarItemProps {
  selectedColor?: string;
  followSystemTheme?: boolean;
  iconName: string;
  label: string;
  selected: boolean;
  onPress: (name: string) => void;
  iconSize: number;
  labelSize: number;
  name: string;
}

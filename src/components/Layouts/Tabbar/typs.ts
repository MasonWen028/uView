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

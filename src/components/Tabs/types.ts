import { StyleProp, ViewStyle } from 'react-native';

export type TabsProps = {
  onTabSelected?: (tab: Tab) => void;
  childrenStyle?: StyleProp<ViewStyle>;
  tabs: Tab[];

  testID?: string;
};

interface Tab {
  info: {
    label: string;
  };
  component: JSX.Element;
}

export type Selected = {
  selected: boolean;
  color: string;
  borderColor: string;
};

import { BottomTabNavigationEventMap, BottomTabNavigationOptions, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Descriptor, NavigationHelpers, ParamListBase, RouteProp, TabNavigationState } from "@react-navigation/native";
import * as Icons from "phosphor-react-native";
import { TextStyle, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export type TypoProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  style?: TextStyle;
  onPress?:()=>void;
}

export type ScreenWrapperProps = {
    children: null | any;
    style?: ViewStyle;
    barStyle?: "dark-content" | "light-content";
    backgroundColor?: string;
}

export type InputProps = {
    label?: string;
    value: string;
    onChange: (text: string) => void;
    type?: "default" | "email-address" | "password" | "numeric" | "phone-pad";
    placeholder?: string;
    placeholderTextColor?: string;
    backgroundColor?: string;
}

export type NavigatingButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: object;
  icon?: keyof typeof Icons;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary";
  border?: boolean;
  disabled?: boolean;
}

export type BottomTabDescriptor = Descriptor<
  BottomTabNavigationOptions,
  BottomTabNavigationProp<ParamListBase>,
  RouteProp<ParamListBase>
>;

export type BottomTabDescriptorMap = Record<string, BottomTabDescriptor>;

export type BottomTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
};


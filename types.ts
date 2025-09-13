import * as Icons from "phosphor-react-native";
import { TextStyle, ViewStyle } from "react-native";

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


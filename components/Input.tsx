import { colors, radius } from "@/constants/colors";
import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import Typo from "./Typo";

interface Props extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  type?: "default" | "email-address" | "numeric" | "password";
  backgroundColor?: string;
  style?: StyleProp<TextStyle>;
  icon?: ReactNode; // ✅ icon prop
  iconPosition?: "left" | "right"; // ✅ position option
}

const Input = ({
  label,
  value,
  onChangeText,
  type = "default",
  placeholder,
  placeholderTextColor,
  backgroundColor = colors.neutral800,
  style,
  multiline = false,
  icon,
  iconPosition = "left",
  ...rest
}: Props) => {
  const isPassword = type === "password";

  return (
    <View style={styles.container}>
      {label && (
        <Typo size={15} fontWeight="300" color={colors.neutral200}>
          {label}
        </Typo>
      )}
      <View style={[styles.inputWrapper, { backgroundColor }]}>
        {icon && iconPosition === "left" && (
          <View style={styles.icon}>{icon}</View>
        )}
        <TextInput
          placeholder={isPassword ? "••••••" : placeholder}
          placeholderTextColor={placeholderTextColor || colors.neutral400}
          style={[styles.input, style]}
          value={value}
          onChangeText={onChangeText}
          keyboardType={isPassword ? "default" : type}
          secureTextEntry={isPassword}
          multiline={multiline}
          {...rest}
        />
        {icon && iconPosition === "right" && (
          <View style={styles.icon}>{icon}</View>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral400,
    borderRadius: radius._6,
    paddingHorizontal: 8,
    width: "100%",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.neutral50,
  },
  icon: {
    marginHorizontal: 6,
  },
});

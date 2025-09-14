import { colors, radius } from "@/constants/colors";
import React from "react";
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
}

const Input = ({
  label,
  value,
  onChangeText,
  type = "default",
  placeholder,
  placeholderTextColor,
  backgroundColor = colors.neutral800, // ✅ default bg
  style,
  multiline = false,
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
      <TextInput
        placeholder={isPassword ? "••••••" : placeholder}
        placeholderTextColor={placeholderTextColor || colors.neutral400}
        style={[styles.input, { backgroundColor }, style]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={isPassword ? "default" : type}
        secureTextEntry={isPassword}
        multiline={multiline}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.neutral400,
    borderRadius: radius._6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.neutral50, // ✅ brighter text for dark bg
    width: "100%",
  },
});

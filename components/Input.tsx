import { colors, radius } from "@/constants/colors";
import { InputProps } from "@/types";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Typo from "./Typo";

const Input = ({
  label,
  value,
  onChange,
  type = "default",
  placeholder,
  placeholderTextColor,
  backgroundColor = colors.neutral800, // ✅ new prop with default
}: InputProps) => {
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
        style={[styles.input, { backgroundColor }]} // ✅ applied here
        value={value}
        onChangeText={onChange}
        keyboardType={isPassword ? "default" : type}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: { marginVertical: 10, gap: 4 },
  input: {
    borderWidth: 1,
    borderColor: colors.neutral400,
    borderRadius: radius._6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.neutral300,
    width: "100%",
  },
});

import { colors, radius } from "@/constants/colors";
import { NavigatingButtonProps } from "@/types";
import * as Icons from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Typo from "./Typo";

const NavigatingButton = ({
  children,
  onPress,
  style,
  icon,
  iconPosition = "right",
  variant = "primary",
  border = false,
  disabled = false,
}: NavigatingButtonProps) => {
  const IconComponent = icon ? (Icons as any)[icon] : null;

  // 🔹 Variant styles
  const baseStyle =
    variant === "primary"
      ? { backgroundColor: colors.primaryDark }
      : {
          backgroundColor: "transparent",
          borderColor: border ? colors.primaryDark : "transparent",
          borderWidth: border ? 1 : 0,
        };

  // 🔹 Disabled overrides
  const disabledStyle = disabled
    ? {
        backgroundColor:
          variant === "primary" ? colors.neutral600 : "transparent",
        borderColor:
          variant === "secondary" && border ? colors.neutral600 : "transparent",
      }
    : {};

  // 🔹 Text & Icon color
  const textColor = disabled
    ? colors.neutral700
    : variant === "primary"
    ? colors.white
    : colors.white;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, baseStyle, disabledStyle, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && iconPosition === "left" && (
        <IconComponent size={20} color={textColor} />
      )}
      <Typo color={textColor} style={styles.text}>
        {children}
      </Typo>
      {icon && iconPosition === "right" && (
        <IconComponent size={20} color={textColor} />
      )}
    </TouchableOpacity>
  );
};

export default NavigatingButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: radius._3,
    gap: 8,
  },
  text: { fontWeight: "300" },
});

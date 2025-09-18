import { colors } from "@/constants/colors";
import { ScreenWrapperProps } from "@/types";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModalWrapper = ({
  children,
  style,
  barStyle = "light-content",
  backgroundColor = colors.neutral900,
}: ScreenWrapperProps) => {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor }, style]}
      edges={["top", "left", "right"]} // 👈 exclude bottom
    >
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      {children}
    </SafeAreaView>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 30 },
});

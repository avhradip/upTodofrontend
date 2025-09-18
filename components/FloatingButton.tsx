import * as Icon from "phosphor-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type FloatingButtonProps = {
  onPress?: () => void;
  color?: string;
};

export default function FloatingButton({
  onPress,
  color = "#8A7AFF",
}: FloatingButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Icon.Plus size={28} color="#fff" weight="bold" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 72,
    alignItems: "center",
    marginHorizontal: 6,
    justifyContent: "center",
    top: -26,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    // // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 6 },
    // shadowOpacity: 0.25,
    // shadowRadius: 6,
    // elevation: 8,
  },
});

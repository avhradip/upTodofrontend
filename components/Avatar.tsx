import { colors } from "@/constants/colors";
import { AvatarProps } from "@/types";
import * as Icon from "phosphor-react-native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const Avatar = ({ uri, size = 50, name }: AvatarProps) => {
  const borderRadius = size / 2;

  let content;
  if (uri) {
    // ✅ Show image
    content = (
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius }}
      />
    );
  } else if (name) {
    content = (
      <Text style={[styles.initial, { fontSize: size * 0.4 }]}>
        {name.charAt(0).toUpperCase()}
      </Text>
    );
  } else {
    content = <Icon.User size={size * 0.6} color="#fff" weight="bold" />;
  }

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius, borderWidth: size * 0.04 },
      ]}
    >
      {content}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral400,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    overflow: "hidden",
  },
  initial: {
    color: "#fff",
    fontWeight: "600",
  },
});

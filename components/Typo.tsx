import { colors } from "@/constants/colors";
import { TypoProps } from "@/types";
import React from "react";
import { Text } from "react-native";



const Typo = ({
  children,
  size = 16,
  color = colors.white,
  fontWeight = "300",
  style,
}: TypoProps) => {
  return (
    <Text style={[{ fontSize: size, color, fontWeight }, style]}>
      {children}
    </Text>
  );
};

export default Typo;

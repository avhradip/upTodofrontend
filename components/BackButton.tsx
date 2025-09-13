import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
      <Icons.CaretLeft size={24} color={colors.white} weight="bold" />
    </TouchableOpacity>
  );
};

export default BackButton;

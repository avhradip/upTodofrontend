import NavigatingButton from "@/components/NavigatingButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/colors";
import { verticalScale } from "@/utility/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const onboarding2 = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Skip Button */}
        <View style={styles.skipButtonContainer}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.push("/(onboarding)/Welcome")}
          >
            <Typo style={styles.skipText}>SKIP</Typo>
          </TouchableOpacity>
        </View>

        {/* Image + Indicators */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/appImages/Onboading2.png")}
            resizeMode="contain"
            style={{ width: 250, height: 250 }}
          />
          <View style={styles.indicators}>
            <Icons.Minus size={30} weight="bold" color={colors.neutral600} />
            <Icons.Minus size={30} weight="bold" color={colors.neutral100} />
            <Icons.Minus size={30} weight="bold" color={colors.neutral600} />
          </View>
        </View>

        {/* Text */}
        <View style={styles.textContainer}>
          <Typo size={35} fontWeight={"500"}>
            Create daily routine
          </Typo>
          <View style={{ width: "80%" }}>
            <Typo size={15} fontWeight={"300"} style={{ textAlign: "center" }}>
              In Uptodo you can create your personalized routine to stay
              productive
            </Typo>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.navigationButtonContainer}>
          <NavigatingButton variant="secondary" onPress={() => router.back()}>
            BACK
          </NavigatingButton>
          <NavigatingButton
            variant="primary"
            onPress={() => router.push("/(onboarding)/onboarding3")}
          >
            NEXT
          </NavigatingButton>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  skipButtonContainer: {
    alignItems: "flex-start", // ✅ right aligned
    padding: 4,
  },
  skipButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  skipText: {
    color: colors.neutral500,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 40,
  },
  textContainer: {
    alignItems: "center",
    gap: 35,
    marginBottom: verticalScale(130),
  },
  navigationButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

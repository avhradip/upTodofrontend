// import BackButton from "@/components/BackButton";
import BackButton from "@/components/BackButton";
import NavigatingButton from "@/components/NavigatingButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { verticalScale } from "@/utility/styling";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const welcome = () => {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/(auth)/login");
  };

  const handleClickRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Top Section */}
        <View>
          <View style={styles.backButtonContainer}>
            <BackButton />
          </View>

          <View style={styles.textContainer}>
            <Typo size={30} fontWeight={"500"} style={{ textAlign: "center" }}>
              Welcome to UpTodo
            </Typo>
            <Typo size={14} fontWeight={"200"} style={{ textAlign: "center" }}>
              Please login to your account or create a new account to continue
            </Typo>
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.buttonContainer}>
          <NavigatingButton
            variant="primary"
            style={{ width: "100%" }}
            onPress={handleClickLogin}
          >
            LOGIN
          </NavigatingButton>

          <NavigatingButton
            variant="secondary"
            border
            style={{ width: "100%" }}
            onPress={handleClickRegister}
          >
            CREATE ACCOUNT
          </NavigatingButton>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(20),
    paddingVertical: verticalScale(20),
  },
  backButtonContainer: {
    alignItems: "flex-start",
    paddingBottom: 16,
  },
  textContainer: {
    alignSelf: "center", // ✅ centers text block
    width: "80%",
    gap: 20,
    marginTop: verticalScale(100), // ✅ better than paddingTop: "40%"
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 16,
  },
});

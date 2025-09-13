import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import NavigatingButton from "@/components/NavigatingButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/colors";
import { verticalScale } from "@/utility/styling";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleClickLogin = () => {
  //   router.push("/(tabs)/home");
  // };

  const handleClickRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Back Button */}
        <View style={styles.backButton}>
          <BackButton />
        </View>

        {/* Title */}
        <View style={styles.textContainer}>
          <Typo size={30} fontWeight={"500"}>
            Login
          </Typo>
        </View>

        {/* Inputs */}
        <View style={styles.inputContainer}>
          <Input
            placeholderTextColor={colors.neutral400}
            type="email-address"
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="Enter your email"
            backgroundColor={colors.neutral800}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
            backgroundColor={colors.neutral800}
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <NavigatingButton
            variant="primary"
            style={{ width: "100%" }}
            // onPress={handleClickLogin}
          >
            LOGIN
          </NavigatingButton>
        </View>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Typo color={colors.neutral400}>or</Typo>
          <View style={styles.divider} />
        </View>

        <View style={styles.buttonContainer}>
          {/* Google Button */}
          <NavigatingButton
            border
            variant="secondary"
            style={{ width: "100%" }}
            icon="GoogleLogo" // 👈 phosphor-react-native Google icon
            iconPosition="left"
          >
            Register With Google
          </NavigatingButton>

          {/* Apple Button */}
          <NavigatingButton
            border
            variant="secondary"
            style={{ width: "100%" }}
            icon="AppleLogo" // 👈 phosphor-react-native Apple icon
            iconPosition="left"
          >
            Register With Apple
          </NavigatingButton>
        </View>

        <View style={styles.footer}>
          <Typo size={15} color={colors.neutral500}>
            Already have an account?
          </Typo>
          <TouchableOpacity onPress={handleClickRegister}>
            <Typo size={15} color={colors.primaryDark} fontWeight="500">
              Register
            </Typo>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: verticalScale(20),
    paddingVertical: verticalScale(10),
  },
  backButton: {
    paddingBottom: 16,
  },
  textContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.neutral400,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
      justifyContent: "center",
    gap:5,
    paddingBottom: 20,
  },
});

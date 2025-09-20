import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import NavigatingButton from "@/components/NavigatingButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/colors";
import { register } from "@/Redux/authSlice";
import { verticalScale } from "@/utility/styling";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch<any>() 

const handleClickRegister = (): void => {
  if (!email || !password || !confirmPassword || !name) {
    Alert.alert("Missing Fields", "Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert("Password Mismatch", "Passwords do not match.");
    return;
  }

  dispatch(register({ email, password, name, confirmPassword }))
    .unwrap()
    .then(() => {
      Alert.alert("Registration successful!");
      router.replace("/(taps)/home")
    })
    .catch((err: any) => {
      Alert.alert("Registration Failed", err || "Something went wrong.");
      console.log(err.message);
    });
};


  const handleClickLogin = () => {
    router.push("/(auth)/login");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Back Button */}
          <View style={styles.backButton}>
            <BackButton />
          </View>

          {/* Title */}
          <View style={styles.textContainer}>
            <Typo size={30} fontWeight={"500"}>
              Register
            </Typo>
          </View>

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <Input
              placeholderTextColor={colors.neutral400}
              type="default"
              label="Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              backgroundColor={colors.neutral800}
            />
            <Input
              placeholderTextColor={colors.neutral400}
              type="email-address"
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              backgroundColor={colors.neutral800}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              backgroundColor={colors.neutral800}
            />
            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Re-enter your password"
              backgroundColor={colors.neutral800}
            />
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <NavigatingButton
              variant="primary"
              style={{ width: "100%" }}
              onPress={handleClickRegister}
            >
              REGISTER
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

          {/* Footer */}
          <View style={styles.footer}>
            <Typo size={15} color={colors.neutral500}>
              Already have an account?
            </Typo>
            <TouchableOpacity onPress={handleClickLogin}>
              <Typo size={15} color={colors.primaryDark} fontWeight="500">
                Login
              </Typo>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: verticalScale(20),
    // paddingVertical: verticalScale(10),
  },
  backButton: {
    paddingBottom: 16,
  },
  textContainer: {
    marginBottom: 30,
    alignItems: "flex-start",
  },
  inputContainer: {
    gap: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 20,
    gap: 20,
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
    gap: 5,
    paddingBottom: 20,
  },
});

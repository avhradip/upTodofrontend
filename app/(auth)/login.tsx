import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import NavigatingButton from "@/components/NavigatingButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/colors";
import { login } from "@/Redux/authSlice";
import { verticalScale } from "@/utility/styling";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch<any>(); // ✅ allow thunk dispatch
  const { isAuthenticated, loading, error } = useSelector(
    (state: any) => state?.auth
  );
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(taps)/home"); // ✅ redirect to index
    }
  }, [isAuthenticated]);

  const handleClickLogin = () => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        Alert.alert("Login successful!");
      })
      .catch((err: any) => {
        Alert.alert("Login Failed", err || "Something went wrong.");
      });
  };

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
        </View>

        {/* Error message */}
        {/* {error ? (
          <Typo
            color="red"
            size={14}
            style={{ marginBottom: 10, textAlign: "center" }}
          >
            {error}
          </Typo>
        ) : null} */}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <NavigatingButton
            variant="primary"
            style={{ width: "100%" }}
            onPress={handleClickLogin}
            disabled={loading}
          >
            {loading ? <ActivityIndicator color="#fff" /> : "LOGIN"}
          </NavigatingButton>
        </View>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Typo color={colors.neutral400}>or</Typo>
          <View style={styles.divider} />
        </View>

        {/* Social Buttons */}
        <View style={styles.buttonContainer}>
          <NavigatingButton
            border
            variant="secondary"
            style={{ width: "100%" }}
            icon="GoogleLogo"
            iconPosition="left"
          >
            Register With Google
          </NavigatingButton>

          <NavigatingButton
            border
            variant="secondary"
            style={{ width: "100%" }}
            icon="AppleLogo"
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
    marginBottom: 10,
  },
  buttonContainer: {
    gap: 20,
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
    gap: 5,
    paddingBottom: 20,
  },
});

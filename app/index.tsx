import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

export default function Index() {

  const router = useRouter()
  const {isAuthenticated}=useSelector((state:any)=>state.auth)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        router.replace("/(onboarding)/onboarding1");
      } else {
        router.replace("/(taps)/home");
      }
      
    }, 1000);
    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/appImages/SplashImage.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});

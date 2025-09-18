import CustomTabs from "@/components/CustomTabs";
import { colors } from "@/constants/colors";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const scheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // completely hide default tab bar
        tabBarStyle: {
          height: 0,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      tabBar={(props) => (
        <CustomTabs
          {...props}
          scheme={scheme}
          activeTintColor={colors.primary}
          inactiveTintColor={
            scheme === "dark" ? colors.neutral400 : colors.neutral400
          }
          tabBarStyle={{
            backgroundColor:
              scheme === "dark" ? colors.neutral900 : colors.neutral900,
          }}
        />
      )}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

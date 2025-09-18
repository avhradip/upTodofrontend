import { colors } from "@/constants/colors";
import { verticalScale } from "@/utility/styling";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import * as Icon from "phosphor-react-native";
import React from "react";
import {
  ColorSchemeName,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FloatingButton from "./FloatingButton";

type CustomTabsProps = BottomTabBarProps & {
  scheme: ColorSchemeName | null;
  activeTintColor: string;
  inactiveTintColor: string;
  tabBarStyle?: object;
};

export default function CustomTabs({
  state,
  descriptors,
  navigation,
  scheme,
  activeTintColor,
  inactiveTintColor,
  tabBarStyle,
}: CustomTabsProps) {
  const insets = useSafeAreaInsets();
  const bottomOffset = (insets.bottom || 0) + verticalScale(12);

  const router= useRouter();

  // Only home + profile
  const routes = state.routes.filter(
    (r) => r.name === "home" || r.name === "profile"
  );

  const renderTab = (route: any, index: number) => {
    const isFocused =
      state.index === state.routes.findIndex((r) => r.name === route.name);
    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    };

    let TabIcon: React.ElementType = Icon.XCircle;
    if (route.name === "home") TabIcon = Icon.House;
    if (route.name === "profile") TabIcon = Icon.User;

    return (
      <TouchableOpacity
        key={route.key}
        accessibilityState={isFocused ? { selected: true } : {}}
        onPress={onPress}
        style={styles.tabButton}
      >
        <TabIcon
          size={isFocused ? verticalScale(30) : verticalScale(24)}
          color={isFocused ? activeTintColor : inactiveTintColor}
          weight={isFocused ? "fill" : "regular"}
        />
        <Text
          style={{
            fontSize: 10,
            marginTop: 4,
            color: isFocused ? activeTintColor : inactiveTintColor,
          }}
        >
          {route.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
      <View style={[styles.wrapper, { bottom: bottomOffset }]}>
        <View style={[styles.container, tabBarStyle]}>
          {/* Left (Home) */}
          {renderTab(routes[0], 0)}

          {/* Floating Button in center */}
          <FloatingButton onPress={()=>router.push("/tasksModal")} />

          {/* Right (Profile) */}
          {renderTab(routes[1], 1)}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 20,
    right: 20,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    // height: Platform.OS === "ios" ? verticalScale(70) : verticalScale(65),
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 12,
    // backgroundColor: "#000", // 👈 black background
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height:0},
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 30,
  },
});


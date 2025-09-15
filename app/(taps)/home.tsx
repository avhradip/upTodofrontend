import Avatar from "@/components/Avatar";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/colors";
import { verticalScale } from "@/utility/styling";
import * as Icons from "phosphor-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const home = () => {
  const [quary, setQuary] = useState("");
  const todos = [];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icons.FunnelSimple size={35} color={colors.white} />
          <Typo size={20} fontWeight={"500"}>
            Index
          </Typo>
          <View style={{ width: "auto", height: "auto", borderRadius: "50%" }}>
            <Avatar
              uri={`https://res.cloudinary.com/dhepipx1j/image/upload/v1753531139/vlfmxfmykx1dvz28ov2n.jpg`}
            />
          </View>
        </View>
        <View style={styles.search}>
          <Input
            icon={
              <Icons.MagnifyingGlass
                size={verticalScale(20)}
                color={colors.neutral400}
              />
            }
            value={quary}
            onChangeText={setQuary}
            placeholderTextColor={colors.neutral400}
            placeholder="Search for your task..."
          />
        </View>
        <View style={styles.todos}>
          {todos.length === 0 && (
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <Image
                source={require("../../assets/appImages/image1.png")}
                style={{ width: 200, height: 200, resizeMode: "contain" }}
              />
              <Text style={{ color: "#888", marginTop: 10, fontSize: 16 }}>
                No tasks yet. Add your first one!
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  search: {},
  todos: {},
});

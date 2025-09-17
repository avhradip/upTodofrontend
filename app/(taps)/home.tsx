import Avatar from "@/components/Avatar";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/colors";
import { verticalScale } from "@/utility/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const router = useRouter()
  const [query, setQuery] = useState("");
  const todos: any[] = []; // Placeholder for tasks

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Icons.FunnelSimple size={35} color={colors.white} />
          <Typo size={20} fontWeight="500">
            Index
          </Typo>
          <Avatar
            uri="https://res.cloudinary.com/dhepipx1j/image/upload/v1753531139/vlfmxfmykx1dvz28ov2n.jpg"
            size={40}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.search}>
          <Input
            icon={
              <Icons.MagnifyingGlass
                size={verticalScale(20)}
                color={colors.neutral400}
              />
            }
            value={query}
            onChangeText={setQuery}
            placeholder="Search for your task..."
            placeholderTextColor={colors.neutral400}
          />
        </View>

        {/* Todos */}
        <View style={styles.todos}>
          {todos.length === 0 && (
            <View style={styles.emptyContainer}>
              <Image
                source={require("../../assets/appImages/image1.png")}
                style={styles.emptyImage}
              />
              <Text style={styles.emptyText}>
                No tasks yet. Add your first one!
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  search: {
    marginVertical: 15,
  },
  todos: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  emptyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  emptyText: {
    color: "#888",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});

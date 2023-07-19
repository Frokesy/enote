import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={28} style={styles.icon} color="#ff9f80" />
      <FontAwesome name="user-circle" size={28} color="#ff9f80" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
  },
});

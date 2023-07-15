import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo</Text>
      <FontAwesome name="user-circle" size={28} color="#ff9f80" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#ff9f80",
    fontSize: 36,
    fontWeight: "bold",
  },
});

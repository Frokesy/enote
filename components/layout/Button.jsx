import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const Button = ({ value, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{value}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#ff9f80",
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.8,
  },
});

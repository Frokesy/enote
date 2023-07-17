import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const InputField = ({ label, value, placeholder, setValue, multiline }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      {multiline ? (
        <TextInput
          style={styles.multiline}
          multiline={true}
          value={value}
          numberOfLines={4}
          maxLength={100}
          placeholder={placeholder}
          placeholderTextColor="#999999"
          onChangeText={setValue}
          keyboardAppearance="dark"
        />
      ) : (
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#999999"
          onChangeText={setValue}
          keyboardAppearance="dark"
        />
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  label: {
    color: "#ccc",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  input: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#333333",
    color: "#fff",
  },
  multiline: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#fff",
    borderRadius: 10,
    backgroundColor: "#333333",
    height: 100,
  },
});

import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const InputField = ({ value, placeholder, setValue, multiline }) => {
  return (
    <View>
      {multiline ? (
        <TextInput
          style={styles.multiline}
          multiline={true}
          value={value}
          numberOfLines={4}
          maxLength={150}
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
  input: {
    marginTop: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    color: "#fff",
  },
  multiline: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    height: 50,
  },
});

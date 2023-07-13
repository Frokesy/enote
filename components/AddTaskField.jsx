import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import InputField from "./layout/InputField";
import { DateTimePick } from "./DateTimePicker";
import Button from "./layout/Button";

const AddTaskField = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <InputField label="Title" placeholder="e.g Daily reflection" />
        <InputField
          label="Add a note? (Optional)"
          placeholder="Add a note..."
          multiline
        />
        <DateTimePick />
        <InputField label="Category" placeholder="e.g Must do" />
        <View style={styles.buttonField}>
          <Button value="Add Task" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddTaskField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
  },
  buttonField: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});

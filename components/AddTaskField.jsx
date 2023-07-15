import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import InputField from "./layout/InputField";
import { DateTime } from "./DateTimePicker";
import Button from "./layout/Button";

const AddTaskField = ({ newTask, setOpenModal }) => {
  const [task, setTask] = useState({
    title: "",
    note: "",
    schedule: "",
    category: "",
  });

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const getSchedule = (schedule) => {
    setTask({ ...task, schedule: schedule });
  };

  const addTask = () => {
    console.log(task);
    setTask({
      title: "",
      note: "",
      schedule: "",
      category: "",
    });
    setOpenModal(false);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <InputField
          label="Title"
          value={task.title}
          setValue={(text) => setTask({ ...task, title: text })}
          placeholder="e.g Daily reflection"
        />
        <InputField
          label="Add a note? (Optional)"
          placeholder="Add a note..."
          multiline
          value={task.note}
          setValue={(text) => setTask({ ...task, note: text })}
        />
        <DateTime getSchedule={getSchedule} />
        <InputField
          label="Category"
          value={task.category}
          setValue={(text) => setTask({ ...task, category: text })}
          placeholder="e.g Must do"
        />
        <View style={styles.buttonField}>
          <Button value="Add Task" onPress={addTask} />
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
    marginTop: 10,
  },
});

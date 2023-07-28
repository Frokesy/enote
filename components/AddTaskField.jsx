import React, { useContext, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import InputField from "./layout/InputField";
import { DateTime } from "./DateTimePicker";
import Button from "./layout/Button";
import TaskContext from "../context/TaskContext";

const AddTaskField = ({ newTask, setOpenModal }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const [task, setTask] = useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    note: "",
    schedule: "",
    category: "",
    completed: false,
  });

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const getSchedule = (schedule) => {
    setTask({ ...task, schedule: schedule });
  };

  const addTask = () => {
    setTasks([...tasks, task]);
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
      <View>
        <InputField
          value={task.title}
          setValue={(text) => setTask({ ...task, title: text })}
          placeholder="Add a task..."
        />
        <InputField
          placeholder="Add a note..."
          multiline
          value={task.note}
          setValue={(text) => setTask({ ...task, note: text })}
        />
        <View style={styles.innerContainer}>
          <DateTime getSchedule={getSchedule} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddTaskField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
  },
  buttonField: {
    marginTop: 10,
  },
});

import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import TaskContext from "../context/TaskContext";

const TasksField = () => {
  const contextValue = useContext(TaskContext)
  return (
    <View>
      <Text style={styles.date}>Today</Text>
      <View style={styles.taskContainer}>
        <Text style={styles.text}>{contextValue}</Text>
      </View>
    </View>
  );
};

export default TasksField;

const styles = StyleSheet.create({
  date: {
    color: "#ccc",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskContainer: {
    flexDirection: "row",
    marginTop: 10,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
  },
});

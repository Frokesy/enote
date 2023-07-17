import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Alert } from "react-native";
import TaskContext from "../context/TaskContext";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Accordion from "./Accordion";

const TasksField = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const deleteTask = (id) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTasks(tasks.filter((task) => task.id !== id));
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.innerContainerOne}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.note}>{item.note}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        <Text style={styles.schedule}>Scheduled for: {item.schedule}</Text>
      </View>
      <View style={styles.innerContainerTwo}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark" size={20} color="green" />
          <Entypo
            name="cross"
            size={20}
            color="red"
            onPress={() => deleteTask(item.id)}
          />
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.screen}>
      <Accordion title="Completed Tasks" content={<Text>Content 1</Text>} count={0} />
      <Accordion
        title="Uncompleted Tasks"
        content={
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        }
        count={tasks.length}
      />
    </View>
  );
};

export default TasksField;

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    paddingBottom: 280,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  note: {
    color: "#bfbfbf",
    fontSize: 14,
    paddingBottom: 4,
  },
  schedule: {
    color: "#808080",
    fontSize: 12,
  },
  category: {
    color: "#808080",
    fontSize: 14,
    paddingVertical: 6,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  innerContainerOne: {
    width: "80%",
  },
  innerContainerTwo: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

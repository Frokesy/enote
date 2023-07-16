import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import TaskContext from "../context/TaskContext";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const TasksField = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <>
      <View>
        <Text style={styles.date}>Today</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.note}>{item.note}</Text>
                <Text style={styles.schedule}>Scheduled for:{" "}{item.schedule}</Text>
              </View>
              <View style={styles.innerContainerTwo}>
                <View style={styles.iconContainer}>
                  <Ionicons name="checkmark" size={20} color="green" />
                  <Entypo name="cross" size={20} color="red" />
                </View>
                <Text style={styles.category}>Category: {item.category}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
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
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  note: {
    color: "#bfbfbf",
    fontSize: 16,
    paddingBottom: 4,
  },
  schedule: {
    color: "#ccc",
    fontSize: 12,

  },
  category: {
    color: "#808080",
    fontSize: 14,
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
    marginBottom: 6,
  },
  innerContainerTwo: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

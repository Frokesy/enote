import React, { useContext, useEffect } from "react";
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

  const handleCheckTask = (id) => {
    Alert.alert(
      "Complete Task",
      "Mark as completed?",
      [
        {
          text: "Cancel",
          style: "destructive",
        },
        {
          text: "Check",
          style: "default",
          onPress: () => {
            setTasks(
              tasks.map((task) =>
                task.id === id ? { ...task, completed: true } : task
              )
            );
          },
        },
      ]
    );
  };

  const date = new Date();

  // const renderItem = ({ item }) => (
  //   <View style={[styles.taskContainer, item.completed && styles.completed]}>
  //     <View style={styles.innerContainerOne}>
  //       <Text style={styles.title}>{item.title}</Text>
  //       <Text style={[styles.note, item.completed && styles.completedText]}>{item.note}</Text>
  //       <Text style={[styles.schedule, item.completed && styles.completedText]}>{item.schedule}</Text>
  //       <Text style={[styles.category, item.completed && styles.completedText]}>Category: {item.category}</Text>
  //     </View>
  //     <View style={styles.innerContainerTwo}>
  //       {item.completed ? (
  //         <Ionicons name="checkmark-done" size={24} color="#fff" />
  //       ) : (
  //         <View style={styles.iconContainer}>
  //         <Ionicons
  //           name="checkmark-done-circle-outline"
  //           size={24}
  //           color="#ff9f80"
  //           onPress={() => handleCheckTask(item.id)}
  //         />
  //         <Entypo
  //           name="trash"
  //           size={24}
  //           color="#ff9f80"
  //           onPress={() => deleteTask(item.id)}
  //         />
  //       </View>
  //       )}
  //     </View>
  //   </View>
  // );
  


  return (
    <View style={styles.screen}>
      {/* <Accordion
        title={date.toDateString()}
        content={
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        }
        count={tasks.length}
      /> */}
      
    </View>
  );
};

export default TasksField;

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
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
  completedText: {
    color: "#fff",
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
    backgroundColor: "#404040",
    borderRadius: 8,
  },
  completed: {
    backgroundColor: "#009900",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
  },
  innerContainerOne: {
    width: "80%",
  },
  innerContainerTwo: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

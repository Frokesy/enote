import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import AddTaskModal from "../screens/AddTaskModal";
import TaskContext from "../context/TaskContext";

const NavTab = () => {
  const [openModal, setOpenModal] = useState(false);
  const { tasks, completedTasks } = useContext(TaskContext);
  const [totalCount, setTotalCount] = useState(tasks.length + completedTasks.length);
  const addNewTask = () => {
    setOpenModal(true);
  };
  useEffect(() => {
    setTotalCount(tasks.length + completedTasks.length);
  }, [tasks, completedTasks]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{totalCount} total tasks for today</Text>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={addNewTask}
        >
          <Feather name="edit" size={20} color="#ff9f80" />
        </Pressable>
      </View>

      {openModal && <AddTaskModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default NavTab;

const styles = StyleSheet.create({
  text: {
    color: "#ff9f80",
    fontSize: 16,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressed: {
    opacity: 0.5,
  },
});

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import AddTaskModal from "../screens/AddTaskModal";

const AddButton = () => {
  const [openModal, setOpenModal] = useState(false);

  const addNewTask = () => {
    setOpenModal(true);
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={addNewTask}>
        <Octicons
          name="plus"
          size={26}
          color="#fff"
        />
      </TouchableOpacity>
      {openModal && <AddTaskModal setOpenModal={setOpenModal} />}
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    right: 16,
    backgroundColor: "#ff9f80",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

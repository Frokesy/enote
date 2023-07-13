import React from "react";
import { Modal } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AddTaskField from "../components/AddTaskField";

const AddTaskModal = ({ setOpenModal }) => {
  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Hey Frokes,</Text>
            <Text style={styles.text}>Add a task to your schedule today</Text>
          </View>
          <Text onPress={() => setOpenModal(false)} style={styles.text}>
            Close
          </Text>
        </View>
        <AddTaskField />
      </View>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#262626",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#ccc",
    fontSize: 16,
  },
  headerText: {
    color: "#ff9f80",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 2,
  }
});

import React from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AddTaskField from "../components/AddTaskField";

const AddTaskModal = ({ setOpenModal }) => {
  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.modalShadow}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Text style={styles.cancelText}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.addText}>Add Task</Text>
          </View>
          <AddTaskField setOpenModal={setOpenModal} />
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#262626",
    marginTop: 150,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  modalShadow: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  cancelText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  addText: {
    color: "#ff9f80",
    fontSize: 18,
    fontWeight: "bold",
  },
});

import React from "react";
import { Modal } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const AddTaskModal = ({ setOpenModal }) => {
  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.text}>Add Task Modal</Text>
        <Text onPress={() => setOpenModal(false)} style={styles.text}>
          Close
        </Text>
      </View>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#262626",
  },
  text: {
    color: "#ccc",
    fontSize: 16,
  },
});

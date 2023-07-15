import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavTab from "./components/NavTab";
import Header from "./components/Header";
import TasksField from "./components/TasksField";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <TasksField />
      </View>
      <NavTab tasks={tasks} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#333333",
  }
});

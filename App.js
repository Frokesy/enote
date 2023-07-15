import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NavTab from "./components/NavTab";
import Header from "./components/Header";
import TasksField from "./components/TasksField";
import { useState } from "react";
import { TaskContextProvider } from "./context/TaskContext";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <TaskContextProvider>
      <View style={styles.container}>
        <View>
          <Header />
          <TasksField />
        </View>
        <NavTab tasks={tasks} />
        <StatusBar style="light" />
      </View>
    </TaskContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#333333",
  },
});

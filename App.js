import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NavTab from "./components/NavTab";
import Header from "./components/Header";
import TasksField from "./components/TasksField";
import { useState } from "react";
import { TaskContextProvider } from "./context/TaskContext";

export default function App() {
  return (
    <TaskContextProvider>
      <View style={styles.container}>
        <View>
          <Header />
          <TasksField />
        </View>
        <NavTab />
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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TaskContextProvider } from "./context/TaskContext";
import MainScreen from "./screens/MainScreen";
import AddButton from "./components/AddButton";

export default function App() {
  return (
    <TaskContextProvider>
      <View style={styles.container}>
        <View>
          <MainScreen />
        </View>
        <StatusBar style="light" />
      </View>
      <AddButton />
    </TaskContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 14,
    backgroundColor: "#333333",
    position: "relative",
  },
});

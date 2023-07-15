import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavTab from "./components/NavTab";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <Text style={styles.date}>Today</Text>
        <View style={styles.goalContainer}>
          <Text style={styles.text}>Learn React Native</Text>
        </View>
      </View>
      <NavTab />
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
  },
  date: {
    color: "#ccc",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
  },
  goalContainer: {
    flexDirection: "row",
    marginTop: 10,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
  },
});

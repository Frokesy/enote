import React from "react";
import { StyleSheet, Text, View } from "react-native";

//
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CalendarWithDate from "../CalendarWithDate";

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="drafts" size={24} color="orange" />
          <Text style={styles.title}>Drafts</Text>
        </View>
        <Text style={styles.count}>0</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
            <CalendarWithDate />
          <Text style={styles.title}>Today</Text>
        </View>
        <Text style={styles.count}>0</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Ionicons name="ios-calendar" size={24} color="#ff9f80" />
          <Text style={styles.title}>Scheduled</Text>
        </View>
          <Text style={styles.count}>0</Text>
      </View>
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
    backgroundColor: "#404040",
    borderRadius: 8,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 16,
  },
  count: {
    color: "#ccc",
    fontSize: 16,
    paddingRight: 10,
  },
});

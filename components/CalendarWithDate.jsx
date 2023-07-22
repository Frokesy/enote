import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CalendarWithDate = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.getDate();
    return formattedDate;
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="calendar-today" size={24} color="green" />
      <View style={styles.innerContainer}>
        <Text style={styles.date}>{getCurrentDate()}</Text>
      </View>
    </View>
  );
};

export default CalendarWithDate;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  date: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

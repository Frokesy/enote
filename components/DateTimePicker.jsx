import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const DateTime = ({ getSchedule }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    getSchedule(date.toLocaleString());
  };
  return (
    <View style={styles.dateTimeOuterContainer}>
      <Text style={styles.label}>Scheduled for: </Text>
      <View style={styles.dateTimeInnerContainer}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          style={styles.value}
          is24Hour={true}
          accentColor="#ff9f80"
          themeVariant="dark"
          onChange={onChange}
        />
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          style={styles.value}
          is24Hour={true}
          accentColor="#ff9f80"
          themeVariant="dark"
          onChange={onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#ccc",
    fontSize: 20,
    fontWeight: "bold",
  },
  dateTimeOuterContainer: {
    marginTop: 20,
  },
  dateTimeInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333333",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});

import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";

const Accordion = ({ title, content, count }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const screenHeight = Dimensions.get("window").height;

  const toggleAccordion = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setExpanded(!expanded);
  };

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screenHeight / 4],
  });
  const emptyContentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggleAccordion}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
      </TouchableOpacity>

      {count > 0 ? (
        <Animated.View style={{ height: contentHeight, overflow: "hidden" }}>
          <View style={styles.contentContainer}>{content}</View>
        </Animated.View>
      ) : (
        <Animated.View style={{ height: emptyContentHeight, overflow: "hidden" }}>
          <View style={styles.emptyTaskContainer}>
            <Text style={styles.emptyTaskText}>You have no new task here</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 16,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  count: {
    color: "#ccc",
    fontSize: 16,
  },
  contentContainer: {
    paddingBottom: 0,
    flex: 1,
  },
  emptyTaskContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",  
  },
  emptyTaskText: {
    color: "#ccc"
  }
});

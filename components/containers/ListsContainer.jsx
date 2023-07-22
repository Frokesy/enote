import React, { useContext, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Pressable,
  FlatList,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import TaskContext from "../../context/TaskContext";

const ListsContainer = () => {
  const { lists, setLists } = useContext(TaskContext);
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

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
    outputRange: [0, 400],
  });

  const renderList = ({ item }) => {
    return (
      <View style={styles.listInnerContainer}>
        <View
          style={{
            backgroundColor: item.theme,
            borderRadius: "100%",
            padding: 4,
          }}
        >
          <MaterialIcons name="list" size={20} color="white" />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={toggleAccordion}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={toggleAccordion}>
            <Text style={styles.headerText}>My Lists</Text>
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <Octicons
              onPress={() => console.log("keyboard-arrow-down")}
              name="plus"
              size={26}
              color="#fff"
            />
            <TouchableOpacity onPress={toggleAccordion}>
              {expanded ? (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  color="#fff"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
      <Animated.View style={{ height: contentHeight, overflow: "hidden" }}>
        <View style={styles.listContainer}>
          <FlatList
            data={lists}
            renderItem={renderList}
            keyExtractor={(item) => item.id.toString()}
            alwaysBounceVertical={false}
          />
        </View>
      </Animated.View>
      {/* <Animated.View style={{ height: contentHeight, overflow: "hidden" }}>
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>You have not created a list yet</Text>
        </View>
      </Animated.View> */}
    </View>
  );
};

export default ListsContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    position: "relative",
    
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  emptyListText: {
    color: "#ccc",
  },
  listContainer: {
    marginTop: 20,
    backgroundColor: "#404040",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  listInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    paddingLeft: 16,
  },
});

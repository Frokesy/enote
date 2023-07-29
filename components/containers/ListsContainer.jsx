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

import { ListItem } from "@rneui/base";
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
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={styles.headerText}>My Lists</ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        containerStyle={styles.headerContainer}
        icon={<Octicons name="chevron-down" size={24} color="white" />}
      >
        <View style={styles.listContainer}>
          <FlatList
            data={lists}
            renderItem={renderList}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ListItem.Accordion>
    </>
  );
};

export default ListsContainer;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    marginTop: 40,
    backgroundColor: "transparent",
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
    marginTop: 10,
    backgroundColor: "#404040",
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 10,
    height: 300,
  },
  listInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    paddingLeft: 16,
  },
});

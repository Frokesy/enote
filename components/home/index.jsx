import React from "react";
import MainContainer from "../containers/MainContainer";
import ListsContainer from "../containers/ListsContainer";
import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <MainContainer />
      <ListsContainer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({})


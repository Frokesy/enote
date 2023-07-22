import React from "react";
import { StyleSheet, View } from "react-native";
import AddButton from "../components/AddButton";
import Home from "../components/home";
import Header from "../components/Header";

const MainScreen = () => {
  return (
    <View >
      <Header />
      <Home />
    </View>
  );
};

export default MainScreen;

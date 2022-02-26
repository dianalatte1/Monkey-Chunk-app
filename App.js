import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Monkey Chunky"} />
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

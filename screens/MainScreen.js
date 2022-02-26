import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../components/Input";
import db from "../localdb";

const MainScreen = (props) => {
  let [text, setText] = useState("");
  let [chunks, setChunks] = useState([]);
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/monkey-chunky-logo.png")}
        style={styles.imageContent}
      />
      <Text style={styles.title}>Escribe una palabra!</Text>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          onChangeText={(t) => {
            setText(t.toLowerCase());
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Go"
            onPress={() => {
              setChunks(db[text].chunks);
            }}
          />
        </View>
        <View>
          {chunks.map((item) => {
            return (
              <TouchableOpacity style={styles.chunkButton}>
                <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    height: 150,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    width: 200,
    height: 100,
    justifyContent: "center",
  },
  imageContent: {
    width: "100%",
    height: 200,
  },
  input: {
    width: 50,
  },
  displayText: {
    textAlign: "center",
    fontSize: 25,
  },
  chunkButton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 10,
    width: "50%",
    height: 50,
    margin: 5,
  },
});

export default MainScreen;

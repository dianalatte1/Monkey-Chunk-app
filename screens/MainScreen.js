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
import PhonicSoundButton2 from "../components/PhonicSoundButton2";

import db from "../localdb";

const MainScreen = (props) => {
  let [text, setText] = useState("");
  let [chunks, setChunks] = useState([]);
  let [phones, setPhones] = useState([]);
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
              setPhones(db[text].phones);
            }}
          />
          {chunks.map((item, index) => {
            return (
              <PhonicSoundButton2
                key={index}
                wordChunk={chunks[index]}
                soundChunk={phones[index]}
              />
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          {/* {chunks.map((item) => {
            return (
              <TouchableOpacity style={styles.chunkButton}>
                <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
            );
          })} */}
          {/* {chunks.map((item, index) => {
            return (
              <PhonicSoundButton2
                key={index}
                wordChunk={chunks[index]}
                soundChunk={phones[index]}
              />
            );
          })} */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    display: "flex",
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
});

export default MainScreen;

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const PhonicSoundButton2 = ({ soundChunk, wordChunk }) => {
  const [sound, setSound] = React.useState();

  const playSound = async (soundChunk) => {
    let soundLink =
      "https://s3-whitehatjrcontent.whjr.online/phones/" + soundChunk + ".mp3";
    const { sound } = Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );

    setSound(sound);

    await sound?.playAsync();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      style={styles.chunkButton}
      onPress={() => {
        playSound(soundChunk);
      }}
    >
      <Text style={styles.displayText}>{wordChunk}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
export default PhonicSoundButton2;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

export default function App() {
  return (
    <>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: "100%", height: 200 }}
      />
      <View style={styles.bottomContainer}>
        <View>
          <Text>teste bloco esquerda</Text>
        </View>
        <View>
          <Text>teste bloco direita</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: "100%",
    height: 200
  },
  bottomContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 5
  }
});

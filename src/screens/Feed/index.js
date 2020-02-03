import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Video } from "expo-av";

function Feed() {
  return (
    <View style={styles.container}>
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
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 500
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
});

export default Feed;

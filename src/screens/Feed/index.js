import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import { Video } from "expo-av";

function Feed() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View>
            <TouchableOpacity>
              <Text style={styles.textTopBarLeft}>Seguindo</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.spanTopBar}>|</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.textTopBarRight}>Para você</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 400
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  topBar: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    alignItems: "center"
  },
  spanTopBar: { color: "white", fontSize: 10 },
  textTopBarLeft: {
    color: "grey",
    paddingHorizontal: 10,
    fontSize: 20
  },
  textTopBarRight: {
    color: "white",
    paddingHorizontal: 10,
    fontSize: 23,
    fontWeight: "bold"
  }
});

export default Feed;

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
        <View style={styles.header}>
          <View>
            <TouchableOpacity>
              <Text style={styles.textLeftHeader}>Seguindo</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.spanCenterHeader}>|</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.textRightHeader}>Para você</Text>
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
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={styles.name}>@wsl</Text>

            <Text style={styles.description}>Descrição</Text>
            <Text style={styles.hashtags}>#TikTok</Text>
            <Text style={styles.music}>Musicas</Text>
          </View>
          <View style={styles.rightContent}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  video: {
    width: "100%",
    height: 400,
    zIndex: 1
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    alignItems: "center",
    zIndex: 5
  },
  spanCenterHeader: { color: "white", fontSize: 10 },
  textLeftHeader: {
    color: "grey",
    paddingHorizontal: 10,
    fontSize: 20
  },
  textRightHeader: {
    color: "white",
    paddingHorizontal: 10,
    fontSize: 23,
    fontWeight: "bold"
  },
  content: {
    paddingHorizontal: 10,
    width: "100%",
    position: "absolute",
    bottom: 60,
    zIndex: 2
  },
  leftContent: {},
  rightContent: {},
  name: { color: "white", marginVertical: 5, fontSize: 19, fontWeight: "bold" },
  description: { color: "white", marginTop: 5, fontSize: 17 },
  hashtags: { color: "white", fontWeight: "bold" },
  music: { color: "white", marginTop: 5 },
  rightContent: {},
  iconProfile: {},
  iconsAction: {},
  iconAction: {},
  iconMusic: {}
});

export default Feed;

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";

import TextTicker from "react-native-text-ticker";

import comment from "../../../assets/comment.png";
import iconMusic from "../../../assets/music.png";
import whiteHeart from "../../../assets/white-heart.png";
import redHeart from "../../../assets/red-heart.png";

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
            // uri:
            // "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4"
          }}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          bounce={false}
          isLooping
          style={styles.video}
        />
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={styles.name}>@marlon.psilva</Text>

            <Text style={styles.description}>
              Node.js + ReactJS + React Native
            </Text>
            <Text style={styles.hashtags}>#TikTok</Text>
            <TouchableOpacity>
              <Text style={styles.translate}>VER TRADUÇÂO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.componentMusic}>
              <View style={styles.imageIconMusic}>
                <Image style={styles.iMusic} source={iconMusic} />
              </View>
              <TextTicker
                style={styles.nameMusic}
                duration={3000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={800}
              >
                I Don’t Care - Ed Sheeran Part Justin Bieber
              </TextTicker>
            </TouchableOpacity>
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
    bottom: 4 + 0,
    zIndex: 2
  },
  leftContent: {
    width: "100%"
  },
  rightContent: {},
  name: { color: "white", marginVertical: 3, fontSize: 17, fontWeight: "bold" },
  description: { color: "white", marginTop: 2, fontSize: 17 },
  hashtags: { color: "white", fontWeight: "bold" },
  componentMusic: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  imageIconMusic: {
    marginRight: 15
  },
  iMusic: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  nameMusic: {
    color: "white",
    fontSize: 15
  },
  translate: {
    fontWeight: "bold",
    color: "white",
    marginVertical: 5
  },

  rightContent: {},
  iconProfile: {},
  iconsAction: {},
  iconAction: {},
  iconMusic: {}
});

export default Feed;

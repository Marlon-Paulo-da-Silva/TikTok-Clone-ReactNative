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
import iconPlus from "../../../assets/iconplus.png";
import profile from "../../../assets/perfil-marlon.jpg";

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
          resizeMode="contain"
          shouldPlay
          bounce={false}
          isLooping
          style={styles.video}
          useNativeControls={true}
        />
        <View style={styles.content}>
          <View style={styles.InnerContent}>
            <TouchableOpacity>
              <Text style={styles.name}>@marlon.psilva</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.description}>
                Node.js + ReactJS + React Native
              </Text>
            </TouchableOpacity>
            <Text style={styles.hashtags}>#TikTok</Text>
            <TouchableOpacity>
              <Text style={styles.translate}>VER TRADUÇÂO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.componentMusic}>
              <View style={styles.imageIconMusic}>
                <Image style={styles.iMusic} source={iconMusic} />
              </View>
              <TextTicker
                style={styles.music}
                duration={4000}
                loop
                bounce={false}
                repeatSpacer={70}
                marqueeDelay={1000}
                shouldAnimateTreshold={40}
              >
                I Don’t Care - Ed Sheeran Part Justin Bieber
              </TextTicker>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentIcon}>
          <View style={styles.contentIconProfile}>
            <Image source={profile} style={styles.iconProfile} />
            <Image source={iconPlus} style={styles.iconPlusProfile} />
          </View>
          <View style={styles.iconsAction}>
            <Text>bgghfgh</Text>
          </View>
          <View style={styles.iconsMusic}>
            <Text>cgfhfgh</Text>
          </View>
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
    width: "75%",
    position: "absolute",
    left: 0,
    bottom: 60,
    zIndex: 2
  },
  InnerContent: {
    backgroundColor: "red",
    width: "100%",
    position: "relative",
    bottom: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    flexDirection: "column"
  },
  contentIcon: {
    backgroundColor: "blue",
    width: "25%",
    position: "absolute",
    bottom: 60,
    right: 0,
    alignItems: "center",
    zIndex: 2,
    height: 300
  },

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

  contentIconProfile: { color: "white", alignItems: "center" },
  iconProfile: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1
  },
  iconPlusProfile: {
    height: 25,
    width: 25,
    marginTop: -13
  },
  iconsAction: { color: "white" },
  iconAction: { color: "white" },
  iconMusic: { color: "white" }
});

export default Feed;

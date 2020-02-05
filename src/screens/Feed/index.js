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

import profile from "../../../assets/perfil-marlon.jpg";
import iconPlus from "../../../assets/iconplus.png";
import whiteHeart from "../../../assets/white-heart-fill.png";
import redHeart from "../../../assets/red-heart.png";
import comment from "../../../assets/comment.png";
import iconMusic from "../../../assets/music.png";
import whatsapp from "../../../assets/WhatsApp_Logo.png";

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
                style={styles.nameMusic}
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
            <TouchableOpacity>
              <Image source={profile} style={styles.iconProfile} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={iconPlus} style={styles.iconPlusProfile} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconsAction}>
            <TouchableOpacity style={styles.contentIconAction}>
              <Image source={whiteHeart} style={styles.iconAction} />
              <Text style={styles.textActions}>153.1K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentIconAction}>
              <Image source={comment} style={styles.iconAction} />
              <Text style={styles.textActions}>208</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentIconAction}>
              <Image source={whatsapp} style={styles.iconWhatsapp} />
              <Text style={styles.textActions}>Compar-tilhar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconsMusic}>
            <TouchableOpacity>
              <Image source={profile} style={styles.iconMusic} />
            </TouchableOpacity>
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
    bottom: 50,
    zIndex: 2
  },
  InnerContent: {
    width: "100%",
    position: "relative",
    bottom: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    flexDirection: "column"
  },

  name: { color: "white", marginVertical: 3, fontSize: 17, fontWeight: "bold" },
  description: { color: "white", marginTop: 2, fontSize: 17 },
  hashtags: { color: "white", fontWeight: "bold" },
  componentMusic: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: 200
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
  contentIcon: {
    width: "20%",
    position: "absolute",
    bottom: 50,
    right: 0,
    alignItems: "center",
    zIndex: 2
  },
  contentIconProfile: {
    alignItems: "center",
    marginBottom: 2
  },

  iconProfile: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 1
  },
  iconPlusProfile: {
    height: 35,
    width: 25,
    position: "relative",
    bottom: 20,
    zIndex: 4,
    resizeMode: "contain"
  },
  iconsAction: {
    alignItems: "center",
    marginBottom: 20
  },
  contentIconAction: {
    alignItems: "center",
    marginBottom: 13
  },
  iconAction: {
    height: 40,
    width: 40
  },
  iconWhatsapp: {
    height: 40,
    width: 40,
    resizeMode: "cover",
    borderRadius: 20
  },
  textActions: { color: "white", textAlign: "center", width: 54 },
  iconMusic: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 30
  }
});

export default Feed;

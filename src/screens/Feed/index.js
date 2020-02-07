import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions
} from "react-native";

import TextTicker from "react-native-text-ticker";
import VerticalViewPager from "react-native-vertical-view-pager";

const { width, height = height - 50 } = Dimensions.get("window");

import profile from "../../../assets/perfil-marlon.jpg";
import iconPlus from "../../../assets/iconplus.png";
import whiteHeart from "../../../assets/white-heart-fill.png";
import redHeart from "../../../assets/red-heart.png";
import comment from "../../../assets/comment.png";
import iconMusic from "../../../assets/music.png";
import whatsapp from "../../../assets/WhatsApp_Logo.png";

import api from "../../services/api.js";

import { Video } from "expo-av";

function Feed() {
  const [feed, setfeed] = useState([]);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  useEffect(() => {
    async function LoadFeed() {
      try {
        const response = await api.get("/feed?_expand=author&_limit=5");
        const data = await response.data;
        console.log(data);
        setfeed(data);
        console.log(feed);
      } catch (error) {
        console.log("Erro da busca: " + error);
      }
    }

    LoadFeed();
  }, []);

  return (
    <SafeAreaView>
      <View style={[{ zIndex: 7 }, styles.header]}>
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
      <View style={styles.container}>
        <VerticalViewPager showsVerticalScrollIndicator={false}>
          {feed.map(item => (
            <View key={item.id} style={[styles.page_container, styles.post]}>
              <View style={styles.video}>
                <Video
                  source={{
                    //  uri: "https://drive.google.com/file/d/1dO3vE8iOz8xoikcNeaJYhbQsUv3kbOgJ/view"
                    // uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                    uri: item.video_url
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="contain"
                  shouldPlay
                  bounce={false}
                  isLooping
                  style={styles.videoPlayer}
                  useNativeControls={false}
                />
              </View>
              <View style={styles.content}>
                <View style={styles.InnerContent}>
                  <TouchableOpacity>
                    <Text style={styles.name}>{item.author.name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.description} numberOfLines={5}>
                      {item.description}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.hashtags}>{item.hashtags}</Text>
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
                    <Image
                      source={{ uri: item.author.avatar }}
                      style={styles.iconProfile}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={iconPlus} style={styles.iconPlusProfile} />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconsAction}>
                  <View style={styles.contentIconAction}>
                    <TouchableOpacity onPress={handleLike}>
                      <Image
                        source={liked ? redHeart : whiteHeart}
                        style={styles.iconAction}
                      />
                    </TouchableOpacity>
                    <Text style={styles.textActions}>153.1K</Text>
                  </View>
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
                    <Image
                      source={{ uri: item.author.avatar }}
                      style={styles.iconMusic}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </VerticalViewPager>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height,
    backgroundColor: "black",
    zIndex: 1,
    alignSelf: "stretch"
  },
  post: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    zIndex: 2,
    alignSelf: "stretch",
    position: "relative",
    bottom: 30
  },
  page_container: {
    flex: 1,
    width,
    height
  },
  video: {
    width: "100%",
    flex: 1,
    zIndex: 2
  },
  videoPlayer: {
    width: "100%",
    zIndex: 2,
    flex: 1
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    left: 75,
    alignItems: "center"
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
    bottom: 0,
    zIndex: 3
  },
  InnerContent: {
    width: "100%",
    position: "relative",
    bottom: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    flexDirection: "column"
  },

  name: { color: "white", marginVertical: 3, fontSize: 15, fontWeight: "bold" },
  description: { color: "white", marginTop: 2, fontSize: 15 },
  hashtags: { color: "white", fontWeight: "bold" },
  componentMusic: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: 190
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
    bottom: 11,
    right: 0,
    alignItems: "center",
    zIndex: 3
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
    zIndex: 5,
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

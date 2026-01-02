import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

/* ---------------- DUMMY REELS ---------------- */
const REELS = [
  {
    id: "1",
    username: "deepak",
    video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    caption: "🔥 Trending Reel",
  },
  {
    id: "2",
    username: "rahul",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    caption: "Enjoy vibes 😎",
  },
];

export default function ReelsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<any[]>([]);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={REELS}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item, index }) => (
          <View style={styles.reel}>
            <Video
              ref={(ref) => (videoRefs.current[index] = ref)}
              source={{ uri: item.video }}
              style={styles.video}
              resizeMode="cover"
              shouldPlay={activeIndex === index}
              isLooping
            />

            {/* Overlay UI */}
            <View style={styles.overlay}>
              <Text style={styles.username}>@{item.username}</Text>
              <Text style={styles.caption}>{item.caption}</Text>
            </View>

            {/* Right Icons */}
            <View style={styles.actions}>
              <TouchableOpacity style={styles.iconBox}>
                <Ionicons name="heart-outline" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <Ionicons name="chatbubble-outline" size={28} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <Ionicons name="paper-plane-outline" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  reel: {
    height,
    width: "100%",
  },
  video: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 80,
    left: 15,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  caption: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
  },
  actions: {
    position: "absolute",
    right: 10,
    bottom: 120,
    alignItems: "center",
  },
  iconBox: {
    marginBottom: 18,
  },
});

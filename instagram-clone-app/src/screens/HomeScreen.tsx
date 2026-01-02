import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

/* ---------------- DUMMY POSTS ---------------- */
const POSTS = [
  {
    id: "1",
    username: "deepak",
    userImage: "https://i.pravatar.cc/150?img=1",
    postImage: "https://picsum.photos/500/500?random=1",
    caption: "My first post 🔥",
  },
  {
    id: "2",
    username: "rahul",
    userImage: "https://i.pravatar.cc/150?img=2",
    postImage: "https://picsum.photos/500/500?random=2",
    caption: "Enjoying life 😎",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function HomeScreen() {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id]
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: item.userImage }} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: item.postImage }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <Ionicons
            name={likedPosts.includes(item.id) ? "heart" : "heart-outline"}
            size={26}
            color={likedPosts.includes(item.id) ? "red" : "black"}
          />
        </TouchableOpacity>

        <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
        <Ionicons name="paper-plane-outline" size={24} />
      </View>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={styles.username}>{item.username} </Text>
        {item.caption}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>
        <Ionicons name="paper-plane-outline" size={24} />
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 55,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 350,
  },
  actions: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 12,
  },
  caption: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

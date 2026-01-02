import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type PostProps = {
  username: string;
  userImage: string;
  postImage: string;
  caption: string;
};

export default function PostCard({
  username,
  userImage,
  postImage,
  caption,
}: PostProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: userImage }} style={styles.avatar} />
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: postImage }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={26}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>

        <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
        <Ionicons name="paper-plane-outline" size={24} />
      </View>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={styles.username}>{username} </Text>
        {caption}
      </Text>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
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

import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

/* ---------------- DUMMY USER DATA ---------------- */
const USER = {
  username: "deepak",
  name: "Deepak Kumar",
  bio: "🚀 App Developer | 🔥 Dream Big",
  avatar: "https://i.pravatar.cc/150?img=3",
  posts: 12,
  followers: 340,
  following: 180,
};

/* ---------------- DUMMY POSTS ---------------- */
const POSTS = [
  { id: "1", image: "https://picsum.photos/300/300?random=1" },
  { id: "2", image: "https://picsum.photos/300/300?random=2" },
  { id: "3", image: "https://picsum.photos/300/300?random=3" },
  { id: "4", image: "https://picsum.photos/300/300?random=4" },
  { id: "5", image: "https://picsum.photos/300/300?random=5" },
  { id: "6", image: "https://picsum.photos/300/300?random=6" },
];

export default function ProfileScreen() {
  const renderPost = ({ item }: any) => (
    <Image source={{ uri: item.image }} style={styles.postImage} />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>{USER.username}</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileRow}>
        <Image source={{ uri: USER.avatar }} style={styles.avatar} />

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{USER.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{USER.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{USER.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bioSection}>
        <Text style={styles.name}>{USER.name}</Text>
        <Text style={styles.bio}>{USER.bio}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={3}
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
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileRow: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
  statLabel: {
    color: "gray",
    fontSize: 12,
  },
  bioSection: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  name: {
    fontWeight: "bold",
  },
  bio: {
    marginTop: 3,
  },
  buttons: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  editText: {
    fontWeight: "bold",
  },
  postImage: {
    width: "33.33%",
    height: 120,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
});

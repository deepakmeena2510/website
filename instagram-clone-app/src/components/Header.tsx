import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title?: string;
  onMessagePress?: () => void;
};

export default function Header({ title = "Instagram", onMessagePress }: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onMessagePress}>
          <Ionicons name="paper-plane-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    height: 55,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 18,
  },
});

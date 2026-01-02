import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/* ---------------- SCREENS ---------------- */

function LoginScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Login Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Home Feed</Text>
    </View>
  );
}

function ReelsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Reels</Text>
    </View>
  );
}

function AddPostScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Add Post</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

/* ---------------- NAVIGATION ---------------- */

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Reels") iconName = "play-circle";
          else if (route.name === "Add") iconName = "add-circle";
          else if (route.name === "Profile") iconName = "person";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Add" component={AddPostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

/* ---------------- MAIN APP ---------------- */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Main App */}
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

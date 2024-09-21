import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { auth } from "./apis/firebaseConfig";
import { signOut } from "firebase/auth";
export const HomeScreen = () => {
  const handleLogout = () => {
    signOut().catch(console.error("Error logging out", error));
  };
  return (
    <View style={styles.container}>
      <Pressable title="Sign Out" onPress={handleLogout} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

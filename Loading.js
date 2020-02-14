import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text1}>Getting the fucking weather</Text>
      <Text style={styles.text2}>good</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6aa",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 100
  },
  text1: {
    color: "#2c2c2c",
    fontSize: 20,
    fontWeight: "500"
  },
  text2: {
    color: "#2c2c2c"
  }
});

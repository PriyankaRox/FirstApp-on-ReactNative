import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function DimensionsApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dynamic Width: {width}px</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: width * 0.8,
    height: height * 0.2,
    backgroundColor: "#f5f5f5"
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  }
});

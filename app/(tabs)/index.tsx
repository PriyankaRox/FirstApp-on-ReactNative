import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  Platform,
  Button,
  Alert
} from "react-native";
import DimensionsApp from "./dimensionsApp";
import MediaQueriesApp from "./mediaQueriesApp";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const textStyles = StyleSheet.compose<any>(styles.text, styles.highlighted);
  // const textStyles  = StyleProp <TextStyle> = [styles.text, styles.highlighted]
  return (
    <View style={styles.container}>
      <Text>Hi I am Pinks here......</Text>
      <Text style={styles.text}>Hello, ReactNative!</Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/550x/c2/5e/31/c25e3114ebf041852be0292200727e92.jpg"
        }}
        style={{ width: 100, height: 100 }}
      ></Image>
      <TextInput
        placeholder="Enter your fav hobby"
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Text>Your fav hobby is: {text}</Text>

      <Button
        title="Press Me"
        onPress={() => Alert.alert("Button Pressed!")}
      ></Button>

      {/* <Text style={[styles.text, isHighlighted && styles.highlighted]}>Dynamic Styled text</Text> */}

      {/* Platform specific styling */}

      <Text style={styles.platformtext}>Platform Specific Styling</Text>

      <Text style={textStyles}>Reusable Styled Text</Text>
      <DimensionsApp />

      <MediaQueriesApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Platform.OS === "ios" ? "grey" : "#e0ffe0",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "black"
  },
  highlighted: {
    color: "red",
    fontWeight: "bold"
  },
  platformtext: {
    fontSize: Platform.OS === "ios" ? 18 : 20,
    color: Platform.select({ ios: "blue", android: "green" })
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute"
  }
});

import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image style={styles.reactLogo} />}
    >
      <ThemedText style={styles.headText}>Build with React Native</ThemedText>
      <ThemedText style={styles.headText}>tools created by ios</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headText: {
    fontWeight: 600,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 45,
    width: 45,
    top: 0,
    left: 0,
    position: "absolute",
  },
});

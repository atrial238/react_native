import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { fetchFonts } from "./utils/fetchFonts";

export default function App() {
  const [isApploaded, setIsAppLoaded] = useState(false);

  return isApploaded ? (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  ) : (
    <AppLoading startAsync={fetchFonts} onFinish={() => setIsAppLoaded(true)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const GlassEffect = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.2)"]}
      style={styles.linearGradient}
    >
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.2)", "transparent"]}
        locations={[0.5, 0.5]}
        style={{ ...styles.linearGradient }}
      >
        {children}
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    flex: 1,
  },
});

export default GlassEffect;

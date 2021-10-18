import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ScreenWrapper = ({ children }) => {
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default ScreenWrapper;

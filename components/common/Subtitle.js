import React from "react";
import { Text, StyleSheet } from "react-native";

const Subtitle = ({ children, style, ...rest }) => {
  return (
    <Text style={{ ...styles.root, ...style }} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Subtitle;

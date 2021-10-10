import React from "react";
import { Text, StyleSheet } from "react-native";

const Subtitle = ({ children, title, style, ...rest }) => {
  return (
    <Text style={{ ...styles.root, ...style }} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    fontFamily: "openSansBold",
    fontSize: 14,
  },
});

export default Subtitle;

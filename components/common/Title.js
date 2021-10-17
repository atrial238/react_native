import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ children, style, ...rest }) => {
  return (
    <Text style={{ ...styles.root, ...style }} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Title;

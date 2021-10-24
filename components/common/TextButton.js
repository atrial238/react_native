import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const TextButton = ({ lable, onPress, style, ...rest }) => {
  return (
    <View style={{ ...styles.wrapper, ...style }} {...rest}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.root}>
          <Text>{lable}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  wrapper: {
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default TextButton;

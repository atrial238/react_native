import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const CustomButton = ({ lable, onPress, style, ...rest }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{ ...styles.root, ...style }} {...rest}>
        <Text style={styles.text}>{lable}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 3,
    backgroundColor: "#b30213",
    padding: 7,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default CustomButton;

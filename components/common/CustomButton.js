import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const CustomButton = ({ lable, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.root}>
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
    padding: 5,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default CustomButton;

import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const ButtonIcon = ({ onPress, style, icon, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={{ ...styles.root, ...style }} {...rest}>
          {icon}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: "hidden",
  },
  root: {
    padding: 7,
  },
});

export default ButtonIcon;

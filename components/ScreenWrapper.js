import React from "react";
import { View, StyleSheet } from "react-native";

const ScreenWrapper = (props) => {
  const { children, style, ...rest } = props;

  return (
    <View style={{ ...styles.root, ...style }} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

export default ScreenWrapper;

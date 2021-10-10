import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import Subtitle from "./Subtitle";

const Category = ({ title, style, navigation, backgroundImage, ...rest }) => {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("Details", { title: `${title} meals` })
      }
      useForeground={true}
      background={TouchableNativeFeedback.Ripple("black")}
    >
      <View style={{ ...styles.root, ...style }} {...rest}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.textWrapper}>
            <Subtitle style={styles.text}>{title}</Subtitle>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "35%",
    height: 120,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "black",
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  textWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    textAlign: "right",
    color: "white",
    paddingRight: 5,
    paddingBottom: 5,
  },
  touchable: {
    overflow: "hidden",
  },
});

export default Category;

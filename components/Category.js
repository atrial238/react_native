import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";
import Subtitle from "./Subtitle";
import GlassEffect from "./GlassEffect";

const Category = ({
  title,
  style,
  navigation,
  categoryId,
  backgroundImage,
  ...rest
}) => {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("Details", { title: `${title}`, categoryId })
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
          <GlassEffect>
            <View style={styles.textWrapper}>
              <Subtitle style={styles.text}>{title}</Subtitle>
            </View>
          </GlassEffect>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Dimensions.get("window").width * 0.35,
    height: Dimensions.get("window").width * 0.35,
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
    //  backgroundColor: "rgba(0, 0, 0, 0.5)",
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

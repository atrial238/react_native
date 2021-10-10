import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.2)"]}
            style={styles.linearGradient}
          >
            <LinearGradient
              colors={[
                //   "rgba(255, 255, 255, 1)",
                "rgba(255, 255, 255, 0.2)",
                "transparent",
              ]}
              locations={[0.5, 0.5]}
              style={styles.linearGradient}
            >
              <View style={styles.textWrapper}>
                <Subtitle style={styles.text}>{title}</Subtitle>
              </View>
            </LinearGradient>
          </LinearGradient>
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
  linearGradient: {
    width: "100%",
    flex: 1,
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

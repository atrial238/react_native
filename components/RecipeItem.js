import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import GlassEffect from "./GlassEffect";
import Subtitle from "./Subtitle";

const RecipeItem = ({
  title,
  duration,
  imageUrl,
  complexity,
  affordability,
  id,
  navigation,
}) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("Meal", { title: `${title}`, mealId: id });
      }}
      useForeground={true}
      background={TouchableNativeFeedback.Ripple("black")}
    >
      <View style={styles.root}>
        <View style={styles.header}>
          <ImageBackground
            source={{ uri: imageUrl }}
            resizeMode="cover"
            style={styles.backImg}
          >
            <GlassEffect>
              <View style={styles.wrapperTitle}>
                <Subtitle style={styles.title}>{title}</Subtitle>
              </View>
            </GlassEffect>
          </ImageBackground>
        </View>
        <View style={styles.wrapperDescription}>
          <Text>{duration}</Text>
          <Text>{complexity}</Text>
          <Text>{affordability}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: Dimensions.get("window").width * 0.5,
    borderRadius: 6,
    overflow: "hidden",
    marginVertical: 15,
  },
  header: {
    width: "100%",
    height: "85%",
  },
  backImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  wrapperTitle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  wrapperDescription: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ccc",
    flex: 1,
    alignItems: "center",
  },
});

export default RecipeItem;

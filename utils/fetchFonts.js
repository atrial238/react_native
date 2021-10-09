import * as Font from "expo-font";

export const fetchFonts = () => {
  return Font.loadAsync({
    openSans: require("../assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
  });
};

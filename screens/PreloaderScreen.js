import React, { useEffect } from "react";
import { Text, View } from "react-native";
import compareAsc from "date-fns/compareAsc";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshTokenThunk } from "../store/slice/auth";
import addMilliseconds from "date-fns/addMilliseconds";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

const PreloaderScreen = ({ navigation }) => {
  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");

      const userData = (user && JSON.parse(user)) || {};
      const { idToken, expiresIn, createdAt } = userData;
      const expirationDate = addMilliseconds(createdAt, expiresIn * 1000);
      if (idToken && compareAsc(expirationDate, new Date()) === -1) {
        navigation.navigate("main");
        refreshTokenThunk(
          differenceInMilliseconds(expirationDate, new Date()) - 5000
        );
      } else if (idToken) {
        refreshTokenThunk(null, "refereshNow");
      } else {
        navigation.navigate("auth");
      }
    })();
  }, []);

  return (
    <View>
      <Text>Preloader</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default PreloaderScreen;

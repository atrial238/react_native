import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { fetchFonts } from "./utils/fetchFonts";
import DetailsMeals from "./screens/DetailsMeals";
import Categories from "./screens/Categories";
import Meals from "./screens/Meals";

export default function App() {
  const [isApploaded, setIsAppLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  return isApploaded ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={Categories} />
        <Stack.Screen
          name="Details"
          component={DetailsMeals}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="Meals" component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setIsAppLoaded(true)}
      onError={(error) => console.log(error)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

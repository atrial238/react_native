import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ShopStackScreen,
  OrdersStackScreen,
  UserProductStackScreen,
} from "./navigation/Navigation";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Drawer.Screen name="shop" component={ShopStackScreen} />
        <Drawer.Screen name="orders" component={OrdersStackScreen} />
        <Drawer.Screen name="user" component={UserProductStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

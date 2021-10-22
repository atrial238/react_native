import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ShopStackScreen,
  OrdersStackScreen,
  UserProductStackScreen,
} from "./navigation/Navigation";
import { Provider } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import store from "./store/store/store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Drawer.Screen
            name="shop"
            component={ShopStackScreen}
            options={{
              drawerIcon: ({ size, color }) => (
                <MaterialIcons name="shopping-cart" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="orders"
            component={OrdersStackScreen}
            options={{
              drawerIcon: ({ size, color }) => (
                <MaterialIcons
                  name="format-list-bulleted"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="admin"
            component={UserProductStackScreen}
            options={{
              drawerIcon: ({ size, color }) => (
                <MaterialIcons
                  name="admin-panel-settings"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

//shop => allProductsScreen cartScreen detailsProductScreen
//orders => ordersHistoryScreen
// manage Own products => ownProductsScreen editOwnProduct
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsOverview from "../screens/shop/ProductsOverview";
import Cart from "../screens/user/Cart";
import ProductDetails from "../screens/shop/ProductDetails";
import OrdersHistory from "../screens/user/OrdersHistory";
import UserProducts from "../screens/user/UserProducts";
import EditProduct from "../screens/user/EditProduct";
import MaterialHeaderButton from "../components/hederButtons/MaterialHeaderButton";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Login from "../screens/user/Login";
import PreloaderScreen from "../screens/PreloaderScreen";

const Shop = createNativeStackNavigator();
const Orders = createNativeStackNavigator();
const UserProduct = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Main = createNativeStackNavigator();

function ShopStackScreen() {
  return (
    <Shop.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#c93c4a",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "#fff",
      }}
    >
      <Shop.Screen
        name="shopAllProducts"
        component={ProductsOverview}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MaterialHeaderButton
              title="menu"
              iconName="menu-book"
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Shop.Screen
        name="shopCart"
        component={Cart}
        options={{ title: "Cart" }}
      />
      <Shop.Screen
        name="shopProductDetail"
        component={ProductDetails}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Shop.Navigator>
  );
}

function OrdersStackScreen() {
  return (
    <Orders.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#c93c4a",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "#fff",
      }}
    >
      <Orders.Screen
        name="userOrdersHistory"
        component={OrdersHistory}
        options={({ navigation }) => ({
          title: "Order history",
          headerLeft: () => (
            <MaterialHeaderButton
              title="menu"
              iconName="menu-book"
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Orders.Navigator>
  );
}

function UserProductStackScreen() {
  return (
    <UserProduct.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#c93c4a",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "#fff",
      }}
    >
      <UserProduct.Screen
        name="userOwnProduct"
        component={UserProducts}
        options={({ navigation }) => ({
          title: "Your Products",
          headerLeft: () => (
            <MaterialHeaderButton
              title="menu"
              iconName="menu-book"
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialHeaderButton
              title="create product"
              iconName="add-box"
              color="white"
              onPress={() => navigation.navigate("userCreateProduct")}
            />
          ),
        })}
      />
      <UserProduct.Screen
        name="userEditOwnProduct"
        component={EditProduct}
        options={() => ({
          title: "Edit product",
        })}
      />
      <UserProduct.Screen
        name="userCreateProduct"
        component={EditProduct}
        options={() => ({
          title: "Create product",
        })}
      />
    </UserProduct.Navigator>
  );
}

function DrawerNavigator() {
  return (
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
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Main.Screen name="preload" component={PreloaderScreen} />
        <Main.Screen name="auth" component={Login} />
        <Main.Screen name="main" component={DrawerNavigator} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

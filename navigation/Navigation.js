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

const Shop = createNativeStackNavigator();
const Orders = createNativeStackNavigator();
const UserProduct = createNativeStackNavigator();

export function ShopStackScreen() {
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

export function OrdersStackScreen() {
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

export function UserProductStackScreen() {
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
      <UserProduct.Screen name="userEditOwnProduct" component={EditProduct} />
    </UserProduct.Navigator>
  );
}

import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import FavoritesMeals from "./screens/FavoritesMeals";
import FavoriteMeal from "./screens/FavoriteMeal";
import Filter from "./screens/Filter";
import Categories from "./screens/Categories";
import DetailsMeals from "./screens/DetailsMeals";
import Meal from "./screens/Meal";
import { fetchFonts } from "./utils/fetchFonts";
import store from "./store/Store";

const MealsStack = createNativeStackNavigator();

function MealsStackScreen() {
  return (
    <MealsStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <MealsStack.Screen name="Home" component={Categories} />
      <MealsStack.Screen
        name="Details"
        component={DetailsMeals}
        options={({ route }) => ({ title: route.params.title })}
      />
      <MealsStack.Screen
        name="Meal"
        component={Meal}
        options={({ route }) => ({ title: route.params.title })}
      />
    </MealsStack.Navigator>
  );
}

const FavoriteStack = createNativeStackNavigator();

function FavoriteMealsStackScreen() {
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <FavoriteStack.Screen name="Favorite" component={FavoritesMeals} />
      <FavoriteStack.Screen
        name="FavoriteMeal"
        component={FavoriteMeal}
        options={({ route }) => ({ title: route.params.title })}
      />
    </FavoriteStack.Navigator>
  );
}

const FilterStack = createNativeStackNavigator();

const FilterStackScreen = () => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <FilterStack.Screen name="FilterScreen" component={Filter} />
    </FilterStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainStackTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="MealsTab"
        component={MealsStackScreen}
        options={{
          tabBarActiveTintColor: "#0979e8",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons name="dinner-dining" size={size} color={color} />
            );
          },
          tabBarButton: (props) => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteMealsStackScreen}
        options={{
          tabBarActiveTintColor: "#e64040",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="favorite" size={size} color={color} />;
          },
          tabBarButton: (props) => <TouchableOpacity {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  const [isApploaded, setIsAppLoaded] = React.useState(false);

  if (!isApploaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsAppLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationContainer independent={true}>
          <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Main" component={MainStackTabNavigation} />
            <Drawer.Screen name="Filter" component={FilterStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NavigationContainer>
    </Provider>
  );
}

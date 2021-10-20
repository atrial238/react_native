import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import MaterialHeaderButton from "../../components/hederButtons/MaterialHeaderButton";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverview = ({ navigation }) => {
  const allProducts = useSelector((state) => state.allProducts);
  const cart = useSelector((state) => state.cart);

  React.useLayoutEffect(() => {
    const icon = cart.length ? "add-shopping-cart" : "shopping-cart";
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButton
          title="cart"
          iconName={icon}
          color="white"
          onPress={() => navigation.navigate("shopCart")}
        />
      ),
      title: "Products",
    });
  }, [navigation, cart.length]);

  const renderItem = ({ item }) => {
    return <ProductItem product={item} navigation={navigation} />;
  };

  return (
    <ScreenWrapper>
      <FlatList data={allProducts} renderItem={renderItem} />
    </ScreenWrapper>
  );
};

export default ProductsOverview;

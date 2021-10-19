import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverview = ({ navigation }) => {
  const allProducts = useSelector((state) => state.allProducts);
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart was added");
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

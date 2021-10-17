import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverview = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const renderItem = ({ item }) => {
    return <ProductItem product={item} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={allProducts} renderItem={renderItem} />
    </View>
  );
};

export default ProductsOverview;

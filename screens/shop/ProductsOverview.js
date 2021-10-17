import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverview = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={styles.root}>
      <FlatList data={allProducts} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default ProductsOverview;

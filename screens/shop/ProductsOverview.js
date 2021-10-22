import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import MaterialHeaderButton from "../../components/hederButtons/MaterialHeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import useCartHeaderButton from "../../hooks/useCartHeaderButton";

const ProductsOverview = ({ navigation }) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const cart = useSelector((state) => state.cart);

  useCartHeaderButton(navigation, cart);

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

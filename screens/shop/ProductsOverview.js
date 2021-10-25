import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../store/slice/cart";

import ScreenWrapper from "../../components/common/ScreenWrapper";
import ProductItem from "../../components/shop/ProductItem";
import useCartHeaderButton from "../../hooks/useCartHeaderButton";
import { fetchAllProducts } from "../../store/slice/products";

const ProductsOverview = ({ navigation }) => {
  const allProducts = useSelector((state) => state.products.allProducts);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useCartHeaderButton(navigation, cart);

  const goToProductDetails = (product) => {
    navigation.navigate("shopProductDetail", {
      productId: product.id,
      title: product.title,
    });
  };

  const addToCartProduct = (product) => {
    dispatch(addtoCart(product));
  };

  const renderItem = ({ item }) => {
    return (
      <ProductItem
        product={item}
        leftButton={{ lable: "view details", onPress: goToProductDetails }}
        rightButton={{ lable: "add to cart", onPress: addToCartProduct }}
      />
    );
  };

  return (
    <ScreenWrapper>
      <FlatList data={allProducts} renderItem={renderItem} />
    </ScreenWrapper>
  );
};

export default ProductsOverview;

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import ProductItem from "../../components/shop/ProductItem";
import { deleteFromCart } from "../../store/slice/cart";
import { deleteProduct } from "../../store/slice/products";

const UserProducts = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const userProducts = useSelector((state) => state.products.userProducts);

  const deleteMyProduct = (product) => {
    dispatch(deleteProduct(product.id));
    dispatch(deleteFromCart({ productId: product.id, forceDelete: true }));
  };
  return (
    <ScreenWrapper>
      <View style={styles.root}>
        <FlatList
          data={userProducts}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              leftButton={{
                lable: "edit product",
                onPress: () => {},
              }}
              rightButton={{ lable: "delete", onPress: deleteMyProduct }}
            />
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "90%",
  },
});

export default UserProducts;

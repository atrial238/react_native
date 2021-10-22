import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import ProductItem from "../../components/shop/ProductItem";

const UserProducts = ({ navigation, route }) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  console.log(route, navigation);

  return (
    <ScreenWrapper>
      <View style={styles.root}>
        <FlatList
          data={userProducts}
          renderItem={({ item }) => (
            <ProductItem product={item} navigation={navigation} />
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

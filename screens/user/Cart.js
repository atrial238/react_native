import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import ItemCart from "../../components/cart/ItemCart";
import CustomButton from "../../components/common/CustomButton";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import Title from "../../components/common/Title";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice =
    Math.floor(cart.reduce((acc, product) => acc + product.data.price, 0)) || 0;

  const renderItem = ({ item }) => {
    return (
      <ItemCart
        amount={item.totalCount}
        title={item.data.title}
        price={item.data.price}
      />
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.root}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerTextWrapper}>
            <Title>Total</Title>
            <Title style={styles.price}>{totalPrice}</Title>
          </View>
          <CustomButton lable="Order" />
        </View>
        <FlatList
          data={cart}
          contentContainerStyle={styles.orderWrapper}
          renderItem={renderItem}
          keyExtractor={(item) => item.data.id}
          numColumns={1}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "90%",
    alignItems: "center",
  },
  headerWrapper: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 8,
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  headerTextWrapper: {
    flexDirection: "row",
  },
  price: {
    color: "red",
    marginLeft: 10,
  },
  orderWrapper: {
    width: Dimensions.get("window").width * 0.8,
  },
});

export default Cart;

import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import Order from "../../components/orders/Order";

const OrdersHistory = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <ScreenWrapper>
      <View style={styles.root}>
        <FlatList
          data={orders}
          renderItem={({ item }) => <Order order={item} />}
          contentContainerStyle={styles.ordersWrapper}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "95%",
  },
  ordersWrapper: {
    padding: 10,
  },
});

export default OrdersHistory;

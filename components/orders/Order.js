import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../common/CustomButton";
import Subtitle from "../common/Subtitle";

const Order = ({ order }) => {
  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Subtitle style={styles.price}>{order.totalPrice}</Subtitle>
        <Text>{order.date}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton lable="show details" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 8,
    padding: 10,
    marginVertical: 20,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Order;

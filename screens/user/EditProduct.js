import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EditProduct = ({ navigation, route }) => {
  const productId = route.params;
  console.log(route);
  return (
    <View>
      <Text>{`${productId ? " edit" : " create"}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProduct;

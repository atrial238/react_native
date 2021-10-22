import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useSelector } from "react-redux";
import Subtitle from "../../components/common/Subtitle";

const EditProduct = ({ navigation, route }) => {
  const productId = route.params?.productId;
  const editProduct = useSelector((state) =>
    state.products.userProducts.find((product) => product.id === productId)
  );

  const [stateInputs, setStateInputs] = useState({
    title: editProduct ? editProduct.title : "",
    imageUrl: editProduct ? editProduct.imageUrl : "",
    price: "",
    description: editProduct ? editProduct.description : "",
  });

  const inputHandler = (value, name) => {
    setStateInputs((state) => ({ ...state, [name]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <Subtitle style={styles.inputText}>Title</Subtitle>
          <TextInput
            style={styles.input}
            onChangeText={(value) => inputHandler(value, "title")}
            value={stateInputs.title}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Subtitle style={styles.inputText}>Image Url</Subtitle>
          <TextInput
            style={styles.input}
            onChangeText={(value) => inputHandler(value, "imageUrl")}
            value={stateInputs.imageUrl}
          />
        </View>

        {!editProduct && (
          <View style={styles.inputWrapper}>
            <Subtitle style={styles.inputText}>Price</Subtitle>
            <TextInput
              style={styles.input}
              onChangeText={(value) => inputHandler(value, "price")}
              value={stateInputs.price}
            />
          </View>
        )}

        <View style={styles.inputWrapper}>
          <Subtitle style={styles.inputText}>Description</Subtitle>
          <TextInput
            style={styles.input}
            onChangeText={(value) => inputHandler(value, "description")}
            value={stateInputs.description}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  formWrapper: {
    width: "90%",
  },
  inputWrapper: {
    marginVertical: 10,
  },
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  inputText: {
    marginBottom: 5,
  },
});

export default EditProduct;

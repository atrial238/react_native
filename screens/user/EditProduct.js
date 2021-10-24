import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "../../components/common/Subtitle";
import MaterialHeaderButton from "../../components/hederButtons/MaterialHeaderButton";
import {
  addUserProducts,
  //   createProduct,
  updateProduct,
} from "../../store/slice/products";

const EditProduct = ({ navigation, route }) => {
  const productId = route.params?.productId;
  const dispatch = useDispatch();
  const editProduct = useSelector((state) =>
    state.products.userProducts?.find((product) => product.id === productId)
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

  const submitHandler = () => {
    editProduct
      ? dispatch(updateProduct({ id: productId, data: stateInputs }))
      : dispatch(addUserProducts({ ...stateInputs }));

    // : dispatch(createProduct({ ...stateInputs }));
    //  navigation.navigate("userOwnProduct");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButton
          title="edit product"
          iconName="check-box"
          color="white"
          onPress={() => submitHandler()}
        />
      ),
    });
  }, [stateInputs]);

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

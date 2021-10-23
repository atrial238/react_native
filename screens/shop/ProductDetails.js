import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import CustomButton from "../../components/common/CustomButton";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import { addtoCart } from "../../store/slice/cart";
import useCartHeaderButton from "../../hooks/useCartHeaderButton";

const ProductDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const productId = route.params.productId;
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) =>
    state.products.allProducts.find((product) => product.id === productId)
  );
  useCartHeaderButton(navigation, cart);

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{ uri: product.imageUrl }}
              resizeMode="contain"
            />
          </View>
          <CustomButton
            lable="add to cart"
            style={styles.button}
            onPress={() => dispatch(addtoCart(product))}
          />
          <Text style={styles.price}>$ {product.price}</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    height: Dimensions.get("window").width * 0.7,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginBottom: 40,
  },
  price: {
    textAlign: "center",
    fontSize: 18,
    opacity: 0.5,
  },
  description: {
    margin: 20,
  },
  descriptionText: {
    textAlign: "center",
  },
});

export default ProductDetails;

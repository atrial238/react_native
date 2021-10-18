import React from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import CustomButton from "../../components/common/CustomButton";
import ScreenWrapper from "../../components/common/ScreenWrapper";

const ProductDetails = ({ route }) => {
  const productId = route.params.productId;
  const product = useSelector((state) =>
    state.allProducts.find((product) => product.id === productId)
  );

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
          <CustomButton lable="add to cart" style={styles.button} />
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

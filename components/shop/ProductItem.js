import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../common/CustomButton";
import Title from "../common/Title";

const ProductItem = ({ product, leftButton, rightButton }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <TouchableNativeFeedback
        useForeground
        onPress={() => leftButton.onPress(product)}
      >
        <View>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: product.imageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.contentWrapper}>
            <Title style={styles.title}>{product.title}</Title>
            <Text style={styles.price}>{product.price}</Text>
            <View style={styles.buttonWrapper}>
              <CustomButton
                lable={leftButton.lable}
                onPress={() => leftButton.onPress(product)}
              />
              <CustomButton
                lable={rightButton.lable}
                onPress={() => rightButton.onPress(product)}
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    elevation: 5,
    margin: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  imageWrapper: {
    width: "100%",
    height: Dimensions.get("window").width * 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    padding: 10,
  },
  title: {
    marginBottom: 5,
  },
  price: {
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductItem;

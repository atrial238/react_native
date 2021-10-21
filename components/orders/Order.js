import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import ItemCart from "../cart/ItemCart";
import CustomButton from "../common/CustomButton";
import Subtitle from "../common/Subtitle";

const Order = ({ order }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Subtitle style={styles.price}>{order.totalPrice}</Subtitle>
        <Text>{order.date}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton
          lable="show details"
          onPress={() => setShowDetails((state) => !state)}
        />
      </View>
      {showDetails && (
        <View style={styles.detailsWrapper}>
          {order.data.map((cartItem) => (
            <ItemCart
              amount={cartItem.totalCount}
              title={cartItem.data.title}
              price={cartItem.data.price}
              productId={cartItem.data.id}
              withoutDeleteBtn
              key={Date.now().toString()}
            />
          ))}
        </View>
      )}
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
  detailsWrapper: {
    paddingHorizontal: Dimensions.get("window").width * 0.05,
  },
});

export default Order;

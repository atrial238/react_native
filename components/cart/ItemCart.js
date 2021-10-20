import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ButtonIcon from "../common/ButtonIcon";
import Subtitle from "../common/Subtitle";

const ItemCart = ({ amount, title, price }) => {
  const trueTitle = title.length > 20 ? title.slice(0, 20) + "...." : title;
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text>{amount}</Text>
        <Subtitle style={styles.subtitle}>{trueTitle}</Subtitle>
      </View>
      <View style={styles.buttonWrapper}>
        <Subtitle style={styles.price}>{price}</Subtitle>
        <ButtonIcon
          icon={<MaterialIcons name="delete" size={24} color="red" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    marginLeft: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    marginRight: 20,
  },
});

export default ItemCart;

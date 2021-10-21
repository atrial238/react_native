import React from "react";
import MaterialHeaderButton from "../components/hederButtons/MaterialHeaderButton";

const useCartHeaderButton = (navigation, cart) => {
  React.useLayoutEffect(() => {
    const icon = cart.length ? "add-shopping-cart" : "shopping-cart";
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButton
          title="cart"
          iconName={icon}
          color="white"
          onPress={() => navigation.navigate("shopCart")}
        />
      ),
      title: "Products",
    });
  }, [navigation, cart.length]);
};

export default useCartHeaderButton;

import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

const AntDesignHeaderButton = (props) => (
  <HeaderButton
    IconComponent={AntDesign}
    iconSize={23}
    color="blue"
    {...props}
  />
);

export const AntDesignHeaderButtons = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={AntDesignHeaderButton} {...props} />
  );
};

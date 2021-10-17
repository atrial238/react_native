import React from "react";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

const MatirialButton = (props) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

const MaterialHeaderButton = ({ title, iconName, onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={MatirialButton}>
      <Item title={title} iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  );
};

export default MaterialHeaderButton;

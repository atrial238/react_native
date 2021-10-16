import React from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

const FilterSwitch = ({ lable, onchange, value }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.lable}>{lable}</Text>
      <Switch value={value} onValueChange={onchange} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FilterSwitch;

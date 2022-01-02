import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./common/AppText";

function ExpenditureBoxHead(props) {
  return (
    <View style={styles.head}>
      <AppText>No.</AppText>
      <AppText>Item</AppText>
      <AppText>Cost</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.secondary,
    padding: "2%",
    borderRadius: 5,
  },
});

export default ExpenditureBoxHead;

import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

import Icon from "../components/common/Icon";

function AddExpenditureButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name="plus"
          backgroundColor={colors.primary}
          size={50}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderColor: colors.light,
    borderWidth: 10,
    height: 70,
    elevation: 9,
    width: 70,
    borderRadius: 35,
    bottom: 25,
  },
});

export default AddExpenditureButton;

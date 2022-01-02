import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    // opacity: 0.5,
    marginVertical: 3,
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AppButton;

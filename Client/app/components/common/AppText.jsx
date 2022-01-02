import { StyleSheet, Text } from "react-native";
import React from "react";

function AppText({
  children,
  size = 16,
  color = "#1a1715",
  weight = "normal",
  uppercase = false,
  ...otherProps
}) {
  var captitalize = uppercase == true ? "uppercase" : "none";
  console.log(captitalize);
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: size,
          color: color,
          fontWeight: weight,
          textTransform: captitalize,
        },
        { ...otherProps },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#807a74",
  },
});

export default AppText;

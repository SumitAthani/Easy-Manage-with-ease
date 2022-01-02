import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "./AppText";

function ListItem({ title, subTitle, image, ImageComponent, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  subTitle: {
    color: "#6e6969",
    fontSize: 16,
  },
});

export default ListItem;

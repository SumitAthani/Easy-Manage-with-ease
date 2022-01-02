import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native";

function Screen({ children, style }) {
  console.log(children);
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    // backgroundColor: "green",
  },
  view: {
    flex: 1,
  },
});

export default Screen;

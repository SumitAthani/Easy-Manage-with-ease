import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";



function OfflineNotice(props) {
  const netinfo = useNetInfo();

  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 75,
    // position: "absolute",
    display: "flex",
    zIndex: 10,

    padding: 10,
    top: Constants.statusBarHeight,
    width: "100%",
  },
});

export default OfflineNotice;

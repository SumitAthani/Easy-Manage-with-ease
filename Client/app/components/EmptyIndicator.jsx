import React from "react";
import LottieView from "lottie-react-native";

function EmptyIndicator(props) {
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/empty.json")}
    ></LottieView>
  );
}

export default EmptyIndicator;

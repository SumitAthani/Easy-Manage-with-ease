import { StyleSheet, View, ImageBackground, Image } from "react-native";
import React from "react";
import AppButton from "../components/common/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      <Image source={require("../assets/logo1.png")} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Sign Up"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 15,
  },
  logo: {
    height: 400,
    width: 400,
    position: "absolute",
    top: 25,
  },
});

export default WelcomeScreen;

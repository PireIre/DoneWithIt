import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Platform,
  Text,
  StatusBar,
} from "react-native";

import backgroundImage from "./../assets/background.jpg";
import logo from "./../assets/logo-red.png";
import Button from "../components/Button";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.redBar}>
        <Button onPress={() => console.log("click me")} title="Login" />
      </View>
      <View style={styles.blueBar}>
        <Button
          onPress={() => console.log("click me")}
          color="secondary"
          title="Register"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 100,
  },
  redBar: {
    width: "100%",
    padding: 20,
  },
  blueBar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    width: "100%",
  },
  tagline: {
    fontWeight: 700,
    fontSize: 25,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

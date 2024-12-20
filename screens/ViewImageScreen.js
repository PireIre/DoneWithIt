import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  Text,
  StatusBar,
} from "react-native";

import colors from "../config/colors";

const selectedImage = require("./../assets/chair.jpg");
import logo from "./../assets/logo-red.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <View style={styles.closeButton}>
        <AntDesign name="close" size={35} color="#FFF" />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="#FFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;

import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;

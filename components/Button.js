import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function Button({ onPress, title, color = "primary" }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
  },
  text: {
    textTransform: "uppercase",
    color: colors.white,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Button;

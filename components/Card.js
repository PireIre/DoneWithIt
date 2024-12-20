import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const cardPlaceholderImg = require("./../assets/card-placeholder.jpg");

function Card({ title, subTitle, image = cardPlaceholderImg }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 300,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  text: {
    padding: 15,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontWeight: "700",
    color: "green",
    fontSize: 16,
  },
});

export default Card;

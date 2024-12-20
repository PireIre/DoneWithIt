import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

import Card from "../components/Card";
import ListItem from "../components/ListItem";

const avatarPlaceholder = require("./../assets/mosh.jpg");

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Card title="Red jacket for Sale" subTitle="100 EUR" />
      <ListItem
        image={avatarPlaceholder}
        title="Mosh Hamedani"
        subTitle="5 Listings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4", // Background for better visibility
  },
});

export default ListingDetailsScreen;

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";

import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red jacket for Sale",
    subTitle: "100 EUR",
    image: require("./../assets/card-placeholder.jpg"),
  },
  {
    id: 2,
    settingText: "My Messages",
    title: "Couch in great condition",
    subTitle: "1000 EUR",
    image: require("./../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <Card
              style={styles.card}
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
  card: {
    paddingBottom: 10,
  },
});

export default ListingScreen;

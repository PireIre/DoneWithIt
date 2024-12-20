import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

import colors from "../config/colors";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Aligns avatar and text horizontally
    alignItems: "center", // Vertically centers items
    padding: 15, // Adds padding around the component
    backgroundColor: colors.white,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25, // Ensures circular shape
    marginRight: 15, // Spacing between avatar and text
    backgroundColor: colors.gray,
  },
  textContainer: {
    flexShrink: 1, // Prevents text overflow
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
  },
  subTitle: {
    fontSize: 14,
    color: colors.gray,
  },
});

export default ListItem;

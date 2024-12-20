import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";

const ListSetting = ({ iconName, settingText, onPress, avatarColor }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            iconName={iconName}
            size={35}
            iconColor={colors.white}
            backgroundColor={avatarColor}
          />
        </View>

        <Text style={styles.textContainer}>{settingText}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Aligns avatar and text horizontally
    alignItems: "center", // Vertically centers items
    padding: 15, // Adds padding around the component
    backgroundColor: colors.white,
  },
  icon: {
    padding: 10,
  },
  textContainer: {
    flexShrink: 1, // Prevents text overflow
    fontSize: 16,
    fontWeight: 700,
    color: colors.gray,
  },
});

export default ListSetting;

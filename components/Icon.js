import React from "react";
import { View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function Icon({
  iconName,
  size = 40,
  iconColor = "#fff",
  backgroundColor = "#000",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons
        name={iconName}
        size={size * 0.5} // Adjust icon size relative to the container
        color={iconColor}
      />
    </View>
  );
}

export default Icon;

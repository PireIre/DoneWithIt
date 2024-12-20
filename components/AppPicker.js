import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppPicker({ icon, ...otherProps }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          size={20}
          color={colors.medium}
          name={icon}
          style={styles.icon}
        />
      )}
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  picker: {
    flex: 1,
  },
});

export default AppPicker;

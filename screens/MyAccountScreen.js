import React from "react";
import { View, FlatList } from "react-native";

import ListSetting from "../components/ListSetting";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";

import ListItemSeparator from "../components/ListItemSeparator";

const avatarPlaceholder = require("./../assets/mosh.jpg");

const settings = [
  {
    id: 1,
    settingText: "My Listings",
    avatarColor: "#fc5c65",
    iconName: "format-list-bulleted",
  },
  {
    id: 2,
    settingText: "My Messages",
    avatarColor: "#4ecdc4",
    iconName: "email",
  },
  {
    id: 3,
    settingText: "Log out",
    avatarColor: "#ffe66d",
    iconName: "logout",
  },
];

const MyAccountScreen = () => {
  return (
    <Screen>
      <ListItem
        image={avatarPlaceholder}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
      />
      <FlatList
        data={settings}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListSetting
            onPress={() => console.log("message selected", item)}
            settingText={item.settingText}
            avatarColor={item.avatarColor}
            iconName={item.iconName}
          />
        )}
      />
    </Screen>
  );
};

export default MyAccountScreen;

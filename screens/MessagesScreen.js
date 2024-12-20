import React, { useState } from "react";
import { View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const avatarPlaceholder = require("./../assets/mosh.jpg");

const initialMessages = [
  { id: 1, title: "T1", description: "D1", image: avatarPlaceholder },
  { id: 2, title: "T2", description: "D2", image: avatarPlaceholder },
  { id: 3, title: "T3", description: "D3", image: avatarPlaceholder },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        refreshing={refreshing}
        onRefresh={() => setMessages(messages)}
        data={messages}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log("message selected", item)}
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;

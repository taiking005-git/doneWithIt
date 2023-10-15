import { FlatList, StyleSheet, StatusBar, Platform } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "./Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    title: "1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the selected message
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            key={item.id}
            onPress={() => {
              console.log("Pressed : %s", item);
            }}
            renderRightAction={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={() => setMessages([
          {
            id: 2,
            title: "2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
          }
        ])}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

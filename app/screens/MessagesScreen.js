import { FlatList} from "react-native";
import ListItem from "../components/list/ListItem";
import Screen from "./Screen";
import ListItemSeparator from "../components/list/ListItemSeparator";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";
import { useState } from "react";


const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
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

        refreshing={refreshing}
        
        
        // refreshing={() => setMessages([
        //   {
        //     id: 2,
        //     title: "2",
        //     description: "D2",
        //     image: require("./../assets/mosh.jpg"),
        //   }
        // ])}
      />
    </Screen>
  );
};

export default MessagesScreen;


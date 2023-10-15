import { SafeAreaView, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/screens/Screen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My listing"
        subTitle={"hello world"}
        ImageComponent={<Icon name={"mail"} backgroundColor="red" />}
      />
    </Screen>
  );
}

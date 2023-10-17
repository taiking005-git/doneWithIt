import { SafeAreaView, TextInput, View, Text, Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/screens/Screen";
import ListItem from "./app/components/ListItem";
import ListingScreen from "./app/screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppButton from "./app/components/AppButton";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
const [isVisible, setIsVisible] = useState(false)

  return (
    <Screen>
      <Switch value={isVisible} onValueChange={(value) => setIsVisible(value)} />
    </Screen>
  );
}

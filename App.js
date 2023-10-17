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
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";
import PickerItem from './app/components/PickerItem';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {
  const [category, setCategories] = useState(categories[0])
  return (
    <Screen>
      <AppPicker
        onSeletedItem={(items) => setCategories(items)}
        selectedItem ={category}
        items={categories}
        iconText={"apps"}
        placeholder={"categories"}
      />
      <AppTextInput iconText={"email"} placeholder={"Email"} />
    </Screen>
  );
}

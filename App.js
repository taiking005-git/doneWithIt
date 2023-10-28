
import { Button, Image, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import ListEditingScreen from "./app/screens/ListEditingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListItem from "./app/components/list/ListItem";
import Screen from "./app/screens/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

import * as ImagePicker from "expo-image-picker"
import { useEffect, useState } from "react";
import AppImageInput from "./app/components/ImageInput";
import ImageList from "./app/components/ImageList";
import FormImagePicker from "./app/components/form/FormImagePicker";



export default function App() {

  return (
    <Screen>
      <ListEditingScreen />
    </Screen>
  );
}

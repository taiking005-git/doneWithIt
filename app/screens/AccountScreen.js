import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const AccountScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={"Mosh COde"}
          subTitle={"programmingwithmosh@g.com"}
        />
        <ListItem
          icon={"trash-can"}
          title={"My Listings"}
        />
        <ListItem
          icon={"trash-can"}
          title={"My Listings"}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
  },
});

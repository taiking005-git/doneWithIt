import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import ListItem from "../components/list/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/list/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
]

const AccountScreen = ({navigation}) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={"Mosh Code"}
          subTitle={"programmingwithmosh@g.com"}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen) }
            />
          }
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />

      </View>
      <ListItem
        IconComponent={
          <Icon
            name={"logout"}
            backgroundColor={colors.log}
          />
        }
        title={"Log Out"}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    paddingVertical: 20,
  }
});

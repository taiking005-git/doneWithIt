import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <View style={styles.detail}>
          <AppText style={styles.title}>Red jacket for sale</AppText>
          <AppText style={styles.subtitle}>$100</AppText>
        </View>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={"Mosh Code"}
        subTitle="5 Listing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
  },
  detail: {
    padding: 10,
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;

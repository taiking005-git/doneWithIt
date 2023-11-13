import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/list/ListItem";


const ListingDetailsScreen = ({ navigation, route }) => {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: listing.images[0].url}} />
        <View style={styles.detail}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.subtitle}>${listing.price}</AppText>
        </View>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={"Mosh Code"}
        subTitle="5 Listing"
        onPress={() => navigation.navigate("Account")}
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

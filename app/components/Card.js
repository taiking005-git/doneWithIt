import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },
  cardImage: {
    height: 220,
    width: "100%",
  },
  detailContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight:"bold",
  }
});

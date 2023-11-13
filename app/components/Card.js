import { StyleSheet, View, Image, Pressable } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";


export default function Card({ title, subtitle, imageUrl, onPress }) {

  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <Image style={styles.cardImage} source={{ uri: imageUrl }} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </Pressable>
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
    height: 200,
    width: "100%",
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight:"bold",
  }
});

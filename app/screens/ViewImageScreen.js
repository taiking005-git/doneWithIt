import { View, Image, StyleSheet } from "react-native";
// import second from ''
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={"white"} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={"white"} size={35} />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: colors.black
  },
  closeIcon: {
    position: "absolute",
    left: 10,
    top: 70,
  },
  deleteIcon: {
    position: "absolute",
    right: 10,
    top: 70,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;

import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";


const ViewImageScreen = () => {
  return (
    <View>

      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
 
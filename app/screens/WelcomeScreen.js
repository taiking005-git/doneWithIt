import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";


import AppButton from "../components/AppButton";

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={5}
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't Needs</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Login"}
          onPress={() => navigation.navigate("Login") }
        />
        <AppButton
          title={"Register"}
          color={"secondary"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width:"100%",
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    paddingTop: 40,
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  }
});

export default WelcomeScreen;

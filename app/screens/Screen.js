import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.light,
  },
});

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import defaultStyle from "../config/style";

const AppButton = ({ title, onPress, color="primary" }) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: defaultStyle.colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyle.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: defaultStyle.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

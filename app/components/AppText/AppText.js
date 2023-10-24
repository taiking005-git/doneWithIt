import { Text } from "react-native";

import styles from "../../config/style";

const AppText = ({ children, style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} >{children}</Text>;
};

export default AppText;



import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";


const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightAction,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.listDetailContainer}>
            <View style={styles.mediaContainer}>
              {IconComponent}
              {image && <Image style={styles.avatar} source={image} />}
            </View>
            <View style={styles.textContainer}>
              <AppText style={styles.listTitle}>{title}</AppText>
              { subTitle && <AppText style={styles.listSubTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  listDetailContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  textContainer: {
    width: "100%",
    justifyContent:"center",
    gap: 2,
  },
  listTitle: {
    fontWeight: "700",
    fontSize: 20,
  },
  listSubTitle: {
    fontWeight: "bold",
    color: colors.medium,
  },

});

export default ListItem;

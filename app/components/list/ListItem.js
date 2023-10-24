import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../AppText/AppText";
import colors from "../../config/colors";


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
              <AppText style={styles.listTitle} numberOfLines={1}> {title}</AppText>
              { subTitle && <AppText style={styles.listSubTitle} numberOfLines={2}>{subTitle}</AppText>}
            </View>
              <MaterialCommunityIcons name={"chevron-right"} size={25} color={colors.medium}  />
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
    alignItems:"center"
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
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

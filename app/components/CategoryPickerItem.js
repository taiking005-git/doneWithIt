import { StyleSheet, Pressable } from 'react-native'
import Icon from './Icon'
import AppText from './AppText'

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <Pressable style={styles.container}  onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{ item.label}</AppText>
        </Pressable>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 15,
        alignItems: "center",
        gap: 5,
    },

})
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyle from '../config/style'

const AppTextInput = ({ icon, width="100%", onChangeText, ...otherProps }) => {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyle.colors.medium} />}
            <TextInput
                placeholderTextColor={defaultStyle.colors.medium}
                style={[defaultStyle.text, { width: "100%" }]}
                onChangeText={onChangeText}
                {...otherProps}
            />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        flexDirection: "row",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        gap: 10,
        marginVertical: 10,
        overflow: "hidden",
    },
})
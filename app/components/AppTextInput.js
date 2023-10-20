import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyle from '../config/style'

const AppTextInput = ({ iconText, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {iconText && <MaterialCommunityIcons name={iconText} size={25} color={defaultStyle.colors.medium} />}
            <TextInput {...otherProps} style={[defaultStyle.text, { width: "100%" }]} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        width: "100%",
        flexDirection: "row",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        gap: 10,
        marginVertical: 10,
        overflow: "hidden",
    },
})
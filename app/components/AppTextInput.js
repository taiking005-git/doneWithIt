import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import colors from '../config/colors';
import defaultStyle  from '../config/style'

const AppTextInput = ({iconText, ...otherProps}) => {
    return (
        <View style={styles.container}>
            {iconText && <MaterialCommunityIcons name={iconText} size={25} color={defaultStyle.colors.medium} />}
            <TextInput {...otherProps} style={defaultStyle.text} />
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
    },
})
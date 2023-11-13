import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

const NewListEditingButton = ({color, size}) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' size={size*2} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        width: 60,
        height: 60,
        backgroundColor: colors.medium,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        bottom: 20,
        borderWidth: 5,
        borderColor: colors.light,
    }
 })

export default NewListEditingButton
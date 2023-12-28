import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

const OfflineIndicator = ({ visible = false }) => {

    if (!visible) return null;
    
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
    )
}

export default OfflineIndicator

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    text: {
        color: colors.light
    }
})
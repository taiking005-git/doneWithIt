import { View, Text } from 'react-native'
import React from 'react'
import LottiView from 'lottie-react-native'

const ActivityIndicator = ({ visible = false }) => {
    if (!visible) return null;
    return (
        <View style={{flex:1, width:"100%", height:"100%"}}>
            <LottiView
                autoPlay
                loop
                source={require("../assets/animations/loader.json")}
            />
        </View>

    )
}

export default ActivityIndicator
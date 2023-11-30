import { View, Text } from 'react-native'
import React from 'react'
import LottiView from 'lottie-react-native'

const ActivityIndicator = ({ visible = false }) => {
    if (!visible) return null;
    return (
        <LottiView
            autoPlay
            loop
            source={require("../assets/animations/loader.json")}
        />
    )
}

export default ActivityIndicator
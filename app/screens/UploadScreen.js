import { View, Modal, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'

import React from 'react'
import colors from '../config/colors'
import LottiView from 'lottie-react-native'


const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ?
                    <Progress.Bar progress={progress} color={colors.primary} width={200} /> :
                    <LottiView
                        style={styles.animation}
                        autoPlay
                        onAnimationFinish={onDone}
                        loop={false}
                        source={require("../assets/animations/done.json")} />
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: 150,
        color: colors.primary
    }
})

export default UploadScreen
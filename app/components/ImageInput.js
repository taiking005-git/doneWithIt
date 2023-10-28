import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import * as ImagePicker from "expo-image-picker"


import Icon from './Icon'
import colors from '../config/colors'
import { Alert } from 'react-native'

const AppImageInput = ({ imageUri, onChangeImage }) => {

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) alert("You need to enable permission!")
    }

    useEffect(() => {
        requestPermission()
    }, []);

    const handlePress = () => {
        if (!imageUri)
            pickImage()
        else Alert.alert("Delete", "Are you sure you want to delete this message",
            [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ])
    }

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });

            if (!result.canceled)
                onChangeImage(result.assets[0].uri);
        } catch (error) {
            console.log("Error reading an image", error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <Icon name={"camera"} size={80} color={colors.medium} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AppImageInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        height: 100,
        width: 100,
        overflow: "hidden",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
    }
})
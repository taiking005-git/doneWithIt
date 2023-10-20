import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import AppPicker from '../components/AppPicker'

const ListEditingScreen = () => {
    return (
        <Screen>
            <AppTextInput placeholder={"Title"} />
            <AppTextInput placeholder={"Price"} />
            <AppPicker placeholder={"Category"}/>
            <AppTextInput placeholder={"Description"} />
            <AppButton title={"Post"} />
        </Screen>
    )
}

export default ListEditingScreen

const styles = StyleSheet.create({

})
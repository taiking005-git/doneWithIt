import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from './Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

const RegisterScreen = () => {
  return (
      <Screen style={styles.container}>
          <AppTextInput iconText={"account"} placeholder={"Name"} />
          <AppTextInput iconText={"email"} placeholder={"Email"} />
          <AppTextInput secureTextEntry iconText={"lock"} placeholder={"Password"} />
          <AppButton title={"Register"} />
      </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
    }
})
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { AppForm, AppFormField, SubmitButton } from '../components/form'

import Screen from './Screen'
import AppTextInput from '../components/AppTextInput'

const valiadationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("Name"),
    email: Yup.string().required().min(4).label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={value => console.log(value)}
                valiadationSchema={valiadationSchema}
            >
                <AppFormField
                    icon={"account"}
                    placeholder={"Name"}
                    name={"name"}
                    autoCapitalize="none"
                />
                <AppFormField
                    icon={"email"}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <AppFormField
                    secureTextEntry
                    icon={"lock"}
                    placeholder={"Password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <SubmitButton title={"Register"} />
            </AppForm>
        </Screen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        justifyContent:"center"
    }
})
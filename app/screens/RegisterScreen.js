import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { Form, FormField, SubmitButton } from '../components/form'

import Screen from './Screen'

const valiadationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("Name"),
    email: Yup.string().required().min(4).label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={value => console.log(value)}
                valiadationSchema={valiadationSchema}
            >
                <FormField
                    icon={"account"}
                    placeholder={"Name"}
                    name={"name"}
                    autoCapitalize="none"
                />
                <FormField
                    icon={"email"}
                    placeholder={"Email"}
                    name={"email"}
                    keyboardType={"email-address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormField
                    secureTextEntry
                    icon={"lock"}
                    name={"password"}
                    placeholder={"Password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <SubmitButton title={"Register"} />
            </Form>
        </Screen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center"
    }
})
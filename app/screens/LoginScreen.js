import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from './Screen'
import { Form, FormField, SubmitButton} from '../components/form'

const valiadationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
            <Image style={styles.image} resizeMode='contain' source={require("../assets/logo-red.png")} />
            <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={valiadationSchema}
            >
                <FormField
                    iconText={"email"}
                    placeholder={"Email"}
                    name={"email"}
                    autoCapitalize="none"
                    keyboardType={"email-address"}
                    autoCorrect={false}
                />
                <FormField
                    iconText={"lock"}
                    placeholder={"password"}
                    secureTextEntry
                    name={"password"}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <SubmitButton title={"Login"} />
            </Form>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    image: {
        height: 80,
        width: 80,
        alignSelf: "center",
        marginBottom: 50,

    }
})
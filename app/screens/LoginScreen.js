import { Image, StyleSheet, Text } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from './Screen'
import AppTextInput from './../components/AppTextInput';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';

const valiadationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
            <Image style={styles.image} resizeMode='contain' source={require("../assets/logo-red.png")} />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={valiadationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput
                            iconText={"email"}
                            placeholder={"Email"}
                            autoCapitalize="none"
                            keyboardType={"email-address"}
                            onBlur={() => setFieldTouched("email")}
                            autoCorrect={false}
                            onChangeText={handleChange("email")}
                        />
                       <ErrorMessage error={errors.email} visible={touched.email} />
                        <AppTextInput
                            secureTextEntry
                            iconText={"lock"}
                            placeholder={"Password"}
                            onBlur={()=> setFieldTouched("password")}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("password")}
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}/>
                        <AppButton title={"Login"} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
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
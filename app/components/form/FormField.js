
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'



const FormField = ({ name, width, ...otherProps }) => {
    const { setFieldTouched, touched, errors, setFieldValue, values } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormField


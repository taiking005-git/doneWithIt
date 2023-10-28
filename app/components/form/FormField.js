
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'



const FormField = ({ name, width, ...otherProps }) => {
    const { setFieldTouched, touched, handleChange, errors } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormField


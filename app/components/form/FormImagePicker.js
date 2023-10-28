import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';
import ImageList from '../ImageList';


const FormImagePicker = ({ name}) => {
    const { errors, touched, setFieldValue, values } = useFormikContext();
    const imageUris = values[name];

    const handleImageAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    }

    const handleImageRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imagerUri) => imagerUri !== uri))
    }

    return (
        <>
            <ImageList
                imageUris={imageUris}
                onAddImage={handleImageAdd}
                onDeleteImage={handleImageRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormImagePicker

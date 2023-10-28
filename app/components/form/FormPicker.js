import React from 'react'
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';



const FormPicker = ({ name, numberOfColumns, width, items, PickerItemComponent, placeholder, icon }) => {
    const { values, setFieldValue, touched, errors } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                onSeletedItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
                placeholder={placeholder}
                iconText={icon}
                width={width}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormPicker

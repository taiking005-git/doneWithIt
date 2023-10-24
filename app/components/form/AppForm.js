import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, valiadationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={valiadationSchema}
        >
            {() =>
                <>
                    {children}
                </>
            }
        </Formik>
    )
}

export default AppForm


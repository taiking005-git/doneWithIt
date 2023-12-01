import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import { Form, FormField, FormPicker, SubmitButton } from '../components/form';
import FormImagePicker from '../components/form/FormImagePicker';
import Screen from './Screen';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';
import { useState } from 'react';

const valiadationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image "),
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    categories: Yup.object().label("Categories"),
    description: Yup.string().required().nullable().label("Description"),
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "floor-lamp" },
    { label: "Car", value: 2, backgroundColor: "green", icon: "car" },
    { label: "Camera", value: 3, backgroundColor: "blue", icon: "camera" },
    { label: "Games", value: 4, backgroundColor: "orange", icon: "gamepad-variant" },
    { label: "Clothing", value: 5, backgroundColor: "yellow", icon: "shoe-sneaker" },
    { label: "Sports ", value: 6, backgroundColor: "brown", icon: "basketball" },
    { label: "Movies & Music ", value: 7, backgroundColor: "black", icon: "music" },
    { label: "Books", value: 8, backgroundColor: "gray", icon: "book-open-variant" },
    { label: "Others", value: 9, backgroundColor: "blue", icon: "application" },
]

const ListEditingScreen = () => {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingsApi.addListings(
            { ...listing, location },
            progress => setProgress(progress))

        if (!result.ok) {
            setUploadVisible(false)
            return alert("Could not save the listing")
        }

        resetForm();
    };

    return (
        <Screen>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <Form
                initialValues={{
                    images: [],
                    title: "",
                    price: "",
                    categories: null,
                    description: ""
                }}
                onSubmit={handleSubmit}
                valiadationSchema={valiadationSchema}

            >
                <FormImagePicker
                    name={"images"}
                />
                <FormField
                    placeholder={"Title"}
                    name={"title"}
                    maxLength={255}
                />
                <FormField
                    placeholder={"Price"}
                    name={"price"}
                    keyboardType="numeric"
                    maxLength={8}
                    width={120}
                />
                <FormPicker
                    placeholder={"Category"}
                    name={"categories"}
                    items={categories}
                    width={"50%"}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                />
                <FormField
                    placeholder={"Description"}
                    name={"description"}
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                />
                <SubmitButton title={"Post"} />
            </Form>
        </Screen>
    )
}

export default ListEditingScreen

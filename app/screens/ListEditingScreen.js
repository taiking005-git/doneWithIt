import { StyleSheet } from 'react-native'

import Screen from './Screen'
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/form'
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

const valiadationSchema = Yup.object().shape({
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
    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    categories: null,
                    description: ""
                }}
                onSubmit={(value) => console.log(value)}
                valiadationSchema={valiadationSchema}
            >
                <AppFormField
                    placeholder={"Title"}
                    name={"title"}
                    maxLength={255}
                />
                <AppFormField
                    placeholder={"Price"}
                    name={"price"}
                    keyboardType="numeric"
                    maxLength={8}
                    width={120}
                />
                <AppFormPicker
                    placeholder={"Category"}
                    name={"categories"}
                    items={categories}
                    width={"50%"}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                />
                <AppFormField
                    placeholder={"Description"}
                    name={"description"}
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                />
                <SubmitButton title={"Post"} />
            </AppForm>

        </Screen>
    )
}

export default ListEditingScreen

const styles = StyleSheet.create({

})
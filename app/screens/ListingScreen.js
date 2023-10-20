import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './Screen'
import ListItem from '../components/list/ListItem'
import Card from '../components/Card'
import colors from '../config/colors'

const listingItem = [{
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: "100"

},
{
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: "1000"
}]

const ListingScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listingItem}
                keyExtractor={listingItem => listingItem.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        image={item.image}
                        title={item.title}
                        subtitle={"$" + item.price}
                    />
                }
            />
        </Screen>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
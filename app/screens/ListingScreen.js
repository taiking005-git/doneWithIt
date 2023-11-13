import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import listingApi from '../api/listings'
import Screen from './Screen'
import Card from '../components/Card'
import colors from '../config/colors'


const ListingScreen = ({ navigation }) => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        loadListings()
    }, []);

    const loadListings = async () => {
        const response = await listingApi.getListings()
        setListings(response.data)
    }


    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listingItem => listingItem.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        imageUrl={item.images[0].url}
                        title={item.title}
                        subtitle={"$" + item.price}
                        onPress={() => navigation.navigate("detailScreen", item)}
                    />
                }
            />
        </Screen>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    }
})
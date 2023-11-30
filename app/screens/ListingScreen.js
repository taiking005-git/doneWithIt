import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import listingApi from '../api/listings'
import Screen from './Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'


const ListingScreen = ({ navigation }) => {
    const getListingApi = useApi(listingApi.getListings)
    
    useEffect(() => {
        getListingApi.request()
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingApi.error && (
                <>
                    <AppText>Error loading listings</AppText>
                    <AppButton title={"Retry"} onPress={getListingApi.request} />
                </>)}
            <ActivityIndicator visible={getListingApi.loading} />
            <FlatList
                data={getListingApi.data}
                keyExtractor={listingItem => listingItem.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        imageUrl={item.images[0].url}
                        title={item.title}
                        subtitle={"$" + item.price}
                        onPress={() => navigation.navigate("detailScreen", item)}
                    />
                }
                refreshing={getListingApi.loading}
                onRefresh={() => {
                    getListingApi.request()
                }}
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
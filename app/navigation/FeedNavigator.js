
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

import React from 'react'
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const FeedNavigator = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
          }}
          
      >
          <Stack.Screen name='listingScreen' component={ListingScreen} />
          <Stack.Screen name='detailScreen' component={ListingDetailsScreen} />
      </Stack.Navigator>
  )
}

export default FeedNavigator


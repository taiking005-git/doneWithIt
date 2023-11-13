import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListEditingScreen from '../screens/ListEditingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListEditingButton from './NewListEditingButton';

const Tab = createBottomTabNavigator();


const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='Feed'
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='email' size={size} color={color} />
                }} />
            <Tab.Screen name='Add'
                component={ListEditingScreen}
                options={{
                    tabBarIcon: ({ size, color }) => <NewListEditingButton size={size} color={color} />
                }}
            />
            <Tab.Screen name='Account'
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigation;
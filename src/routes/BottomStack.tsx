import { Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale } from 'react-native-size-matters';
import { borderColor, lightWhite } from '../assets/colors/color';
import Home from '../screens/HomeScreen/Home';
import Cart from '../screens/CartScreen/Cart';
import OfferScreen from '../screens/OfferScreen/OfferScreen';
import Account from '../screens/AccountScreen/Account';
import { bottomAccount, bottomCart, bottomHome, bottomOffer } from '../assets/images';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:lightWhite,
                    height:"12%"},
            }}>
            <Tab.Screen
                name= "Home"
                component={Home}
                options={{
                    headerTitle:"Home",
                    headerTintColor:borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={ {color: focused ? borderColor : color,
                                fontSize: focused ?  scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)

                            }}>Home</Text>
                    ),
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Image
                                source={bottomHome}
                                style={{
                                    tintColor: focused ? borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25)
                                }} />
                        )
                    }
                }} />
            <Tab.Screen
                name="Offer"
                component={OfferScreen}
                options={{
                    headerTitle:"Offer",
                    headerTintColor:borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={ {
                                color: focused ? borderColor : color,
                                fontSize: focused ?  scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)
                            }}>Offer</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={bottomOffer}
                                style={{
                                    tintColor: focused ? borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25)
                                }} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle:"Cart",
                    headerTintColor:borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color: focused ? borderColor : color,
                                fontSize: focused ?  scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)
                            }}>Cart</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={bottomCart}
                                style={{
                                    tintColor: focused ? borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25)
                                }} />
                        )
                    }
                }} />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerTitle:"Account",
                    headerTintColor:borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color: focused ? borderColor : color,
                                fontSize: focused ?  scale(11) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)
                            }}>Account</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={bottomAccount}
                                style={{
                                    tintColor: focused ? borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ?scale(30) : scale(25),
                                }} />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}
export default BottomStack
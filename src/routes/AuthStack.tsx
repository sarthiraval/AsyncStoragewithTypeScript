import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import { borderColor } from '../assets/colors/color';
import { scale } from 'react-native-size-matters';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Landing from '../screens/LandingScreen/Landing';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name="Landing" component={Landing}
                options={{
                    headerTitle: "Landing",
                    headerTintColor: borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={Register}
            />
            <Stack.Screen name="Home" component={BottomStack} />
        </Stack.Navigator>

    )
}
export default AuthStack
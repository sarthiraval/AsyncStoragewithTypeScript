import { Image, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import Line from '../../components/Line/Line'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { LandingMap } from '../../assets/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
const SplashScreen = () => {
    const navigation : any = useNavigation()
    const getData = async()=>{
        const email = await AsyncStorage.getItem("Email")
        if(email != ''){
            navigation.navigate("Home")   
        }
        else{
            navigation.navigate("Login")   
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 5000);
    }, [])
        return (
            <SafeAreaView style={styles.mainView}>
                <Image source={LandingMap} style={styles.mapImage} />
                <Text style={styles.companyName}>SSR</Text>
                <Line />
            </SafeAreaView>
        )
}


export default SplashScreen


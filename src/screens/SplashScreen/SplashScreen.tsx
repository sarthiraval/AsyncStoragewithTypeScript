import { Image, SafeAreaView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import Line from '../../components/Line/Line'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { LandingMap } from '../../assets/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
const SplashScreen = () => {
    const [timePassed, setTimePassed] = useState(false);
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
            setTimePassed(true)
            // getData()
        }, 5000);
    }, [])
    if (!timePassed) {
        return (
            <SafeAreaView style={styles.mainView}>
                <Image source={LandingMap} style={styles.mapImage} />
                <Text style={styles.companyName}>SSR</Text>
                <Line />
            </SafeAreaView>
        )
    }
    navigation.replace('Landing');
    return
}


export default SplashScreen


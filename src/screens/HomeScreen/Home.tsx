import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { solidBlack } from '../../assets/colors/color'
import { scale } from 'react-native-size-matters'

const Home = () => {
  const navigation: any = useNavigation()

  const Logout = () => {
    AsyncStorage.clear()
    navigation.navigate("Register")
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => Logout()}>
        <Text style={{color:solidBlack,fontSize:scale(20)}}>HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Home 
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Home = () => {
  const navigation: any = useNavigation()

  const Logout =()=>{
    AsyncStorage.clear()
    navigation.navigate("Register")
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=>Logout()}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Home 
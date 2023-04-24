import { FlatList, Image, SafeAreaView, View } from "react-native"
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { foodDelivery, foodParty, pizza } from "../../assets/images";
import styles from "./style";

// const slides = [
//   {
//     id: 1,
//     title: 'discover Best Places',
//     description: 'SSR',
//     images: Images.pizza
//   },
//   {
//     id: 2,
//     title: 'discover Best Places',
//     description: 'SSR',
//     images: Images.foodParty
//   }, {
//     id: 3,
//     title: 'discover Best Places',
//     description: 'SSR',
//     images: Images.foodDelivery
//   }
// ]
const Landing = () => {
  const navigation: any = useNavigation()
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={pizza} style={styles.onBoardingImages} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={foodParty}style={styles.onBoardingImages} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={foodDelivery} style={styles.onBoardingImages} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}
export default Landing
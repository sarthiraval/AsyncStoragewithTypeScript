import { StyleSheet } from "react-native";
import {scale} from 'react-native-size-matters';
import { solidWhite } from "../../assets/colors/color";
const styles = StyleSheet.create({
    mainView:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"black"
    },
    mapImage:{
        height:scale(100),
        width:scale(100)
    },
    companyName:{
        fontSize:scale(30),
        color:solidWhite
    }
})
export default styles
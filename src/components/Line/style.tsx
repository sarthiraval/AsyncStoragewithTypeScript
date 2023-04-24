import { StyleSheet } from "react-native";
import {solidRed} from "../../assets/colors/color"
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    lineView:{
        borderBottomWidth: 1,
        marginTop:scale(10),
        borderBottomColor: solidRed,
        width: scale(200),
    }
})
export default styles
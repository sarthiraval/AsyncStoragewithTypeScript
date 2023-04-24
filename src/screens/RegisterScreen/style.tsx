import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native"
import { solidBlack } from "../../assets/colors/color";
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    splashImages: {
        height: scale(60),
        width: scale(60),
        resizeMode: "stretch",
        alignSelf: "center",
    },
    textRegister: {
        fontSize: scale(20),
        marginVertical: scale(15),
        color: solidBlack,
        alignSelf: "center"
    },
    loginText: {
        fontSize: scale(10),
        marginTop: scale(15),
        color: solidBlack,
        marginBottom: scale(30),
        alignSelf: "center"
    },
    errorMessage: {
        fontSize: scale(10),
        marginVertical: scale(15),
        marginLeft: scale(10),
        color: solidBlack,
        alignSelf: "flex-end"
    },
    baseView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    registerButton: {
        marginTop:scale(20)
},
})
export default styles
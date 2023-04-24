import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native"
import { solidBlack } from "../../assets/colors/color";
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: scale(10)
    },
    splashImages: {
        height: scale(60),
        width: scale(60),
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: scale(10)
    },
    textLogin: {
        fontSize: scale(20),
        marginVertical: scale(15),
        color: solidBlack,
        alignSelf: "center"
    },
    registerText: {
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
    loginButton: {
            marginTop:scale(20)
    },
    baseView:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default styles
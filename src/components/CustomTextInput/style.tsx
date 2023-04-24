import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    marginHorizontal: scale(20),
    padding: scale(10),
    marginTop:scale(20)
  },
  customIcon: {
    height: scale(20),
    width: scale(20),
    resizeMode:"stretch"
  },
  customTextInput:{
    marginLeft:scale(10)
  }
});
export default styles;

import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native"
import { solidBlack, solidWhite } from "../../assets/colors/color";

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: solidBlack,
    borderRadius: scale(50),
    padding: scale(10),
    marginHorizontal: scale(20),
  },
  buttonText: {
    fontSize: scale(15),
    fontWeight: "600",
    color:solidWhite
  },
});
export default styles;

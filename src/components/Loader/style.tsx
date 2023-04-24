import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  designView: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  customTextInput: {
    marginLeft: scale(10)
  }
});
export default styles;

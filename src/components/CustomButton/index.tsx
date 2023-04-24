import styles from "./style";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, title, testStyle={}, innerStyle = {}, disable }:any)=> (
  <TouchableOpacity
    disabled={disable}
    style={[styles.mainView,innerStyle]}
    onPress={() => {
      onPress();
    }}>
    <Text style={[testStyle, styles.buttonText]}>{title}</Text>
  </TouchableOpacity>
);
export default CustomButton;

import { Text } from "react-native"
import styles from "./style"

const CustomText = ({label,innerStyle={}}:any) => {
    return(
        <Text style={[styles.mainText,innerStyle]}>{label}</Text>
    )
}
export default CustomText
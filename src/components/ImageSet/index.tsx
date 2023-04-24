import { Image, Text } from "react-native"
import styles from "./style"
import { pizza } from "../../assets/images"

const CustomImage = ({label,innerStyle={}}:any) => {
    return(
        <Image source={pizza} style={[styles.mainText,innerStyle]} />
    )
}
export default CustomImage
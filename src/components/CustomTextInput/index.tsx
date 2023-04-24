import { Image, TextInput, View } from "react-native"
import styles from "./style"

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type }: any) => {
    return (
        <View style={styles.mainView}>
            <Image source={icon} style={styles.customIcon} />
            <TextInput
                value={value}
                placeholder={placeholder}
                secureTextEntry={type == "password" ? true : false}
                style={styles.customTextInput}
                onChangeText={txt => { onChangeText(txt) }}
            />
        </View>
    )
}
export default CustomTextInput
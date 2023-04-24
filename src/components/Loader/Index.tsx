import { ActivityIndicator, Modal, View } from "react-native"
import styles from "./style"
import React from "react"

const Loder = ({ ModelVisble, setModelVisible }:any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ModelVisble}
            onRequestClose={() => {
                setModelVisible(!ModelVisble)
            }}>
            <View style={styles.mainView}>
                <View style={styles.designView}>
                <ActivityIndicator size={"large"} />
                </View>
            </View>
        </Modal>
    )
}
export default Loder
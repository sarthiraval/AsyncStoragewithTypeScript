import styles from "./style";
import { Alert, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { pizza } from "../../assets/images";
import { solidBlack, solidWhite } from "../../assets/colors/color";
import CustomText from "../../components/customText";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import CustomImage from "../../components/ImageSet";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const navigation: any = useNavigation()

  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [badEmail, setBadEmail]: any = useState(false);
  const [badpassword, setBadPassword]: any = useState(false);
  const [buttonDisable, setButtonDisable]: any = useState(false)

  const gestStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("email")
      const passwords = await AsyncStorage.getItem("password")
      // console.log(passwords);
      if (password != passwords || email != value) {
        // console.log("sarthi");
        Alert.alert('invalid Login')
      } else {

        Alert.alert("Success Login",
          "Click to Process to Continue", [
          { text: 'Cancel', onPress: () => (console.log('Cancel Pressed')) },
          {
            text: 'OK', onPress: () => {

              navigation.navigate("Home")
            }
          }
        ],
          { cancelable: false })
      }
      setEmail("")
      setPassword("")
    
  }
    catch (error) {
    console.log("error :", error);
  }
}
  const emailvalida = (text: any) => {
    let re = /(?=.*[a-z])/
    let result = /\S+@([A-Z|a-z])+\S+\.([A-Z|a-z]){2,3}$/;

    setEmail(text);
    if (result.test(text) && re.test(text)) {
      setBadEmail(false);
      setButtonDisable(false)
    } else {
      setBadEmail(true);
    }
  }
  const passwordvaild = (text: any) => {
    let re = /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/;
    setPassword(text)
    if (re.test(text)) {
      setBadPassword(false);
      setButtonDisable(false)
    } else {
      setBadPassword(true);
    }
  }

  const validation = () => {
    setButtonDisable(true)
    if (email == '' || password == '') {
      setButtonDisable(false)
      Alert.alert('Please Enter Details');
    }
    else if (badEmail == true || badpassword == true) {
      setButtonDisable(false)
      Alert.alert('Please Enter Correct Details');
    }
    else {
      gestStorage()
    }
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Image source={pizza} style={styles.splashImages} />
      <CustomText
        innerStyle={styles.textLogin}
        label={"Login"}
      />

        <CustomTextInput
          icon={pizza}
          placeholder={"Enter Emai ID"}
          value={email}
          onChangeText={emailvalida}
        />
        {badEmail === true && (
          <CustomImage />
        )}
 
        <CustomTextInput
          value={password}
          type={"password"}
          icon={pizza}
          placeholder={"Enter a Password"}
          onChangeText={passwordvaild}
        />
        {badpassword === true && (
          // <CustomText
          //   innerStyle={styles.errorMessage}
          //   label={"Please Enter a password"}
          // />
          <CustomImage />
        )}
      <CustomButton
        title={"Login"}
        onPress={() => {
          validation();
        }}
        innerStyle={[buttonDisable ? "display: inline" : "none", styles.loginButton]}
        disable={buttonDisable}
      />
      <TouchableOpacity onPress={() => {
        navigation.navigate("Register");
      }}>
        <CustomText
          label={"Go to Register !!!"}
          innerStyle={styles.registerText}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Register;



import React,{useCallback} from "react";
import { StatusBar,View } from 'react-native'
import Animated_ActivityIndicator from "./CustomComponents/Animated_ActivityIndicator";
import SharedElement_Logo from "./CustomComponents/SharedElement_Logo";
import { styles } from "./styles";
import { setCoin } from "../../Components/Carousel2.0/CoinVariables";
import { TerciaryColor } from "../../../Defaults";
import { useFocusEffect } from "@react-navigation/native";

const Preload = () =>
{
    useFocusEffect(
        useCallback(() => {

            StatusBar.setBackgroundColor(TerciaryColor,true)
            StatusBar.setBarStyle("dark-content",true)
            StatusBar.setTranslucent(false)
            StatusBar.setHidden(false)
            setCoin(1)
           
        }, [])
    )
  
    return (
        <View style = {styles.Container}>
  
            <SharedElement_Logo/>

            <Animated_ActivityIndicator />

        </View>
    )
}
export default Preload
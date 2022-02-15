import React,{useEffect} from "react";
import { StatusBar } from 'react-native'
import Animated_ActivityIndicator from "./CustomComponents/Animated_ActivityIndicator";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedElement_Logo from "./CustomComponents/SharedElement_Logo";
import { useSharedValue,useAnimatedStyle,withSpring } from "react-native-reanimated";
import { styles } from "./styles";
import { setCoin } from "../../Components/Carousel2.0/CoinVariables";
import { TerciaryColor } from "../../../Defaults";

const Preload = ({navigation}) =>
{
    setTimeout(() => 
    {  
       //offset.value = withSpring(0)
       navigation.reset({ routes:[{name: "StartScreen"} ]})

    }, 1500);

    useEffect(()=>{
        setCoin(1)
    },[])
      
    return (
        <SafeAreaView style = {styles.Container}>

            <StatusBar barStyle="dark-content" backgroundColor={TerciaryColor}/>
            
            <SharedElement_Logo/>

            <Animated_ActivityIndicator />

        </SafeAreaView>
    )
}
export default Preload
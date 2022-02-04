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
    const offset = useSharedValue(0)
    const reanimatedStyle = useAnimatedStyle(()=>
    {
        //console.log(progress.value )
        return{
            //opacity:progress.value,
            opacity:offset.value,
            transform:[{scale:offset.value},]
        }
    },[])

    setTimeout(() => 
    {  
       offset.value = withSpring(0)
       navigation.reset({ routes:[{name: "StartScreen"} ]})

    }, 1500);


    useEffect(()=>{
        offset.value = withSpring(1)
        setCoin(1)
    },[])
      
    return (
        <SafeAreaView style = {styles.Container}>

            <StatusBar
            backgroundColor = {TerciaryColor}
            barStyle={'dark-content'}
            
            />   
            
            <SharedElement_Logo/>

            <Animated_ActivityIndicator reanimatedStyle={reanimatedStyle}/>

        </SafeAreaView>
    )
}
export default Preload
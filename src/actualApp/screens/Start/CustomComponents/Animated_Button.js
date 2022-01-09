import React,{useEffect} from "react";
import {PixelRatio} from 'react-native'
import FAB from '../../../Components/FAB'
import Animated,{withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated";
import { styles } from "../styles";
import { DeliciousButtonPressAnimation } from "../../../Helpers/FewPresetAnimations";

export default AnimatedButton = ({navigation}) =>
{
    useEffect(()=>{
        StartBoffset.value = withSpring(1)   
    },[])

    const StartBoffset = useSharedValue(0)

    const StartBAnimStyle = useAnimatedStyle(()=>
    {
        //console.log(progress.value )
        return{
            //opacity:progress.value,
            opacity:StartBoffset.value,
            transform:[{scale:StartBoffset.value},]
        }
    },[])

    function ReenterAnimation()
    {
        StartBoffset.value = withSpring(1)   
    } 

    return (
        <Animated.View
        style={[
            styles.AnimatedButton,
            StartBAnimStyle,
            ]}
        >
            <FAB 
            text="Começar" 
            height={PixelRatio.getPixelSizeForLayoutSize(25)} 
            width={PixelRatio.getPixelSizeForLayoutSize(65)}
            color={'#2B2D42'} 
            
            onPress={()=>
                {
                    DeliciousButtonPressAnimation(StartBoffset)
                
                    navigation.navigate('MainScreen',{ReenterAnimation:ReenterAnimation})  
                }}
            />
        </Animated.View>
    )
}
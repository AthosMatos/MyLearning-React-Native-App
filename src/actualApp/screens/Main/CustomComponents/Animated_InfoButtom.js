import React,{useEffect} from "react"
import {TouchableOpacity,PixelRatio} from "react-native"
import { Icon } from "react-native-elements";
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated";
import {width} from '../styles'
import { SuperZoomButtonPressAnimation } from "../../../Helpers/FewPresetAnimations";
import { ToogleAll } from "./GeneralAnimation";

var offsetY
var offsetScale

export function InAnimation()
{
        offsetY.value = withSpring(0,{mass:0.8})   
        offsetScale.value = withSpring(1)  
}

export default InfoButtom = ({navigation}) =>
{
    useEffect(()=>{
        offsetY.value = withSpring(0,{mass:0.8})   
    },[])

    offsetY = useSharedValue(-width)
    offsetScale = useSharedValue(1)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            //opacity:offset.value,
            transform:[
                {translateY:offsetY.value},
                {scale:offsetScale.value},
            ]
        }
    },[])

    return (
        <Animated.View
        style={[AnimatedStyle]}
        >
            <TouchableOpacity 
            style={{flexDirection:'row',flex:1,justifyContent:'flex-start',marginLeft:PixelRatio.roundToNearestPixel(20)}} 
            onPress={()=>
                {
                    SuperZoomButtonPressAnimation(offsetScale)
                    navigation.navigate('Info')
                }}>
                <Icon name='info' color={'#2B2D42'} size={PixelRatio.roundToNearestPixel(40)}/>
            </TouchableOpacity>
        </Animated.View>
        
    )
}
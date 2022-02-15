import React,{useEffect, useState} from "react"
import { PixelRatio } from "react-native"
import FABv3 from "../../../Components/FABv3"
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {height} from '../styles'

var offsetY
var offsetScale

export function InAnimation()
{
    offsetY.value = withSpring(0,{damping:15}) 
    offsetScale.value = withSpring(1,{damping:15})  
}

export default HistoricButton = ({navigation}) =>
{
    useEffect(()=>{
        offsetY.value = withSpring(0,{damping:15}) 
    },[])

    offsetY = useSharedValue(-height)
    offsetScale = useSharedValue(1)

    const AnimatedStyleEnter = useAnimatedStyle(()=>
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
        style={[{flexDirection:'row',flex:1,justifyContent:'flex-end'},
        //AnimatedStyleEnter
        ]}>
            <FABv3 
            onPress={()=>
                {   
                    //SuperZoomButtonPressAnimation(offsetScale)

                    navigation.navigate('Historic')
                }} 
            text='Historico' 
            color={'#EDF2F4'} 
            fontColor={'#2B2D42'} 
            fontSize={14}
            border={true}
            />
        </Animated.View>
    )
}
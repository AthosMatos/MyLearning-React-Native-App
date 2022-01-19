import React,{useEffect, useState} from 'react'
import {PixelRatio,View,Text} from 'react-native'
import FABv2 from '../../../Components/FABv2'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle} from "react-native-reanimated"
import {height, width} from '../styles'
import { DeliciousButtonPressAnimation,DeliciousButtonShowAnimation } from '../../../Helpers/FewPresetAnimations'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

var offsetScale,offsetY

export function OnUploadAnimation()
{
    offsetY.value = withSpring(-(height*0.02),0,()=>
    {
        offsetY.value = withSpring(height)
    })
}

export default ResetButton = ({show,setphoto,setshowReset,LayoutRef}) =>
{
    useEffect(()=>{
        if(show)
        {
            offsetScale.value=0
            offsetY.value=0
            offsetScale.value = withSpring(1)
        }
        
    },[show])
    
   
    offsetScale = useSharedValue(0)
    offsetY = useSharedValue(0)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            opacity:offsetScale.value,
            transform:[
                {scale:offsetScale.value},
                {translateY:offsetY.value}
            ],
        }
    },[])

    return(
        <>
        {show&&
        <Animated.View 
        style={[    
        {
            //paddingBottom:height*0.01,
            justifyContent:'flex-start',
            alignItems:'center',
           // borderColor:'#000',
           // borderWidth:2,
           marginHorizontal:PixelRatio.roundToNearestPixel(10)
        },
        AnimatedStyle
        ]}     
        >
        
        <TouchableOpacity style={
            {
                width:PixelRatio.roundToNearestPixel(115),
                height:PixelRatio.roundToNearestPixel(115),
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:PixelRatio.roundToNearestPixel(20),
                elevation:4
            }}
            onPress={()=>
            {
                offsetScale.value = withSpring(1.1)
                offsetScale.value = withSpring(0)
                if(LayoutRef.current){LayoutRef.current.animateNextTransition()}
                setphoto(null)
                if(LayoutRef.current){LayoutRef.current.animateNextTransition()}
                setshowReset(false)
            }}>
            <Icon name={'close'} color='#FFF'/>
        </TouchableOpacity>
       
        </Animated.View>
        }
        </>
        

    )
}
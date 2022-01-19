import React,{useEffect, useState} from 'react'
import {PixelRatio,View,Text} from 'react-native'
import FABv2 from '../../../Components/FABv2'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {width} from '../styles'
import { OnUploadAnimation as CCB_onUpAnim } from './Animated_ChooseCoinButton'
import { OnUploadAnimation as RB_onUpAnim } from './Animated_ResetButton'

var offsetX,offsetScale

export function InAnimation()
{ 
    offsetX.value = withSpring(0,{damping:15})
    offsetScale.value = withSpring(1)
}

export function OnUploadAnimation()
{
    offsetScale.value = withSpring(1.1,0,()=>
    {
        offsetScale.value = withSpring(0)
       
    })
}

export default PhotoButtom = ({photo,requestCameraPermission,handleUploadPhoto}) =>
{
    useEffect(()=>{
        offsetX.value = withSpring(0,{damping:15})   
    },[])

    offsetX = useSharedValue(width)
    offsetScale = useSharedValue(1)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            opacity:offsetScale.value,
            transform:[
                {translateX:offsetX.value},
                {scale:offsetScale.value}
            ],
        }
    },[])
    

    return(
        <Animated.View 
        style={[
        {
            flex:1,
            marginHorizontal:PixelRatio.roundToNearestPixel(10)
        },
        AnimatedStyle
        ]}>
        
        {!photo ?
        <FABv2 
        text="Tirar Foto" 
        onPress={requestCameraPermission} 
        color='#EF233C' 
        icon='camera-alt'
        fontSize={PixelRatio.roundToNearestPixel(15)}
        />
        :
        <FABv2 
        text="Enviar Foto" 
        onPress={()=>
            {
                offsetScale.value = withSpring(1.1,0,()=>
                {
                    offsetScale.value = withSpring(0)
                   
                })
                CCB_onUpAnim()
                RB_onUpAnim()
                handleUploadPhoto()
            }}
        color='#7605FF'
        icon='upload'
        type='font-awesome'
        fontSize={PixelRatio.roundToNearestPixel(15)}
        /> 
        }
       
        </Animated.View>

    )
}
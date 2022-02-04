import React,{useEffect, useState} from 'react'
import {PixelRatio,View,Text} from 'react-native'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle} from "react-native-reanimated"
import { TerciaryColor } from '../../../../Defaults'
import {height, width} from '../styles'
import { styles } from '../styles'

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
        AnimatedStyle,
        {flexGrow:1}
        ]}>

        <ButtomWithIcon 
        icon={'close'} 
        iconcolor={TerciaryColor} 
        Buttonstyle={styles.Buttom3Style}
        ContainerInsideStyle={{alignItems:'center',justifyContent:'center',}}
        iconContainerStyle={{marginBottom:0}}
        iconStyle={styles.iconsize}
        textstyle={styles.font}
        onPress={()=>{ 
            LayoutRef.current.animateNextTransition()
            offsetScale.value = withSpring(1.1)
            offsetScale.value = withSpring(0)
            setphoto(null)
            setshowReset(false)
        }}
        /> 
        </Animated.View>
        }
        </>
        

    )
}
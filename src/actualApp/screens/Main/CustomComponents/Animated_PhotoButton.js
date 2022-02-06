import React,{useEffect, useState} from 'react'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {width} from '../styles'
import { OnUploadAnimation as CCB_onUpAnim } from './Animated_ChooseCoinButton'
import { OnUploadAnimation as RB_onUpAnim } from './Animated_ResetButton'
import ButtomWithIcon from '../../../Components/ButtomWithIcon/ButtomWithIcon'
import { TerciaryColor } from '../../../../Defaults'
import { styles } from '../styles'

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

export default PhotoButtom = ({requestCameraPermission,handleUploadPhoto,photo,LayoutRef}) =>
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
        AnimatedStyle,
        photo&& {flexGrow:1}
        ]}>
            <ButtomWithIcon 
            icon={!photo? 'camera': 'upload'} 
            iconcolor={TerciaryColor} 
            text={!photo&& "Tirar Foto"} 
            Buttonstyle={[styles.Buttom2Style,photo&& {backgroundColor:'#7605FF'}]}
            onPress={photo?
                ()=>
                {
                    
                    handleUploadPhoto()
                    //LayoutRef.current.animateNextTransition()
                }
                :
                ()=>
                {
                    requestCameraPermission()
                    //LayoutRef.current.animateNextTransition()
                }
        
            }
            ContainerInsideStyle={photo&& {alignItems:'center',justifyContent:'center',}}
            iconContainerStyle={photo&& {marginBottom:0}}
            iconStyle={photo&& styles.iconsize}
            textstyle={styles.font}
            />
       
        </Animated.View>

    )
}
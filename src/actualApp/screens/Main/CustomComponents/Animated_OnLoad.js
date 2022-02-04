import React,{useEffect, useState} from 'react'
import {PixelRatio,View,Text} from 'react-native'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native-paper'
import { height } from '../styles'
import { Icon } from 'react-native-elements'
import { ToogleInAll } from './GeneralAnimation'

var offsetScale

export function InAnimation()
{ 
    offsetScale.value = withSpring(1)
}

export default OnLoad = ({show,uploadDone,loading,setuploadDone,setisLoading,setuploadstatus,setphoto,setshowReset,setshowloadingButton}) =>
{
    useEffect(()=>{
        if(show) offsetScale.value = withSpring(1,{damping:15})   
        else offsetScale.value = withSpring(0)   
       
    },[show])

    offsetScale = useSharedValue(0)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            opacity:offsetScale.value,
            transform:[
                {scale:offsetScale.value}
            ],
        }
    },[])

    return(
        <>
        {show&&
            <Animated.View 
            style={[
            {
                alignItems: 'center',
                paddingBottom:height*0.05
            },
            AnimatedStyle
            ]}>
            
            <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#EF233C',
                borderRadius:PixelRatio.getPixelSizeForLayoutSize(80),
                width:PixelRatio.getPixelSizeForLayoutSize(50),
                height:PixelRatio.getPixelSizeForLayoutSize(50),
            }}
            onPress={()=>
            {
                if(uploadDone)
                {
                    setuploadDone(false)
                    setisLoading(false)
                    setuploadstatus('IDLE')
                    setphoto(null)
                    setshowReset(false)
                    ToogleInAll()
                    setshowloadingButton(false)
                }
            }}
            >
                {loading&&
                <ActivityIndicator size={'large'} color='white'/>
                }
                {uploadDone&&
                <Icon name='close' color='white'/>
                }
                
            </TouchableOpacity>

            </Animated.View>
        }
        </>
    )
}
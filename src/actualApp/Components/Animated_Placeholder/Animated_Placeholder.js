import React,{useCallback, useEffect, useState} from "react"
import {StatusBar as RNStatusBar, Text,ActivityIndicator, InteractionManager, View} from "react-native"
import Animated,{useSharedValue,useAnimatedStyle,withSpring, runOnJS} from "react-native-reanimated"
import styles from './styles'
import { TerciaryColor,PrimaryColor } from "../../../Defaults"
import { useFocusEffect } from "@react-navigation/native"

export default Placeholder = ({style,textStyle,activityindicatorColor,StatusBarcolor,StatusBarStyle,children}) => 
{
   const [show,setshow]= useState(false)

    useFocusEffect(
        useCallback(() => {

            if(!StatusBarcolor)RNStatusBar.setBackgroundColor(TerciaryColor,true)
            else RNStatusBar.setBackgroundColor(StatusBarcolor,true)

            if(StatusBarStyle)RNStatusBar.setBarStyle(StatusBarStyle,true)
            else RNStatusBar.setBarStyle('dark-content',true)

            offset.value = withSpring(1)  

            InteractionManager.runAfterInteractions(()=>
            {   
                offset.value = withSpring(0)
                setshow(true)
            })
        }, [])
    )
    const offset = useSharedValue(-1)
    const AnimatedStyle = useAnimatedStyle(()=>
    {
       // console.log(offset.value )
        return{
            //opacity:progress.value,
            opacity:offset.value,
            transform:[{scale:offset.value},]
        }
    },[])

    return (
    !show?
    <View style={[{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:TerciaryColor
    },
    style]}>
        <Animated.View 
        style={[
        AnimatedStyle
        ]}
        >
            <Text style={[styles.Text,textStyle]}>Carregando...</Text>
            <ActivityIndicator style={styles.activityindicator} size={'large'} color={!activityindicatorColor? PrimaryColor : activityindicatorColor}/>
        
        </Animated.View>
    </View>
   
    :
    children
    )
}




import React,{useCallback, useEffect, useState} from "react"
import {StatusBar as RNStatusBar, Text} from "react-native"
import { ActivityIndicator } from "react-native-paper"
import Animated,{useSharedValue,useAnimatedStyle,withSpring} from "react-native-reanimated"
import styles from './styles'
import { TerciaryColor,PrimaryColor } from "../../../Defaults"
import { useFocusEffect } from "@react-navigation/native"

export default Placeholder = ({style,textStyle,activityindicatorColor,StatusBar}) => 
{
    const [remount,setremount] = useState() 

    useEffect(()=>{
        offset.value = withSpring(1)   
    },[])

    useFocusEffect(
        useCallback(() => {

            setremount(true) 
        
            return () =>{
            
                setremount(false)
            }
        }, [])
    )
    const offset = useSharedValue(-1)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        //console.log(progress.value )
        return{
            //opacity:progress.value,
            opacity:offset.value,
            transform:[{scale:offset.value},]
        }
    },[])

    return (
    <Animated.View 
    style={[{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:TerciaryColor
    },
    style,
    //AnimatedStyle
    ]}
    >
        <Text style={[styles.Text,textStyle]}>Carregando...</Text>
        <ActivityIndicator style={styles.activityindicator} size={'large'} color={!activityindicatorColor? PrimaryColor : activityindicatorColor}/>

    </Animated.View>
    )
}




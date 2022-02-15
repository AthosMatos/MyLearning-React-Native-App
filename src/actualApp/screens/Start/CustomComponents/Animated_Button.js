import React,{useCallback, useEffect, useState} from "react";
import Animated,{withSpring,useSharedValue,useAnimatedStyle, withRepeat } from "react-native-reanimated";
import { styles } from "../styles";

import StandardButtom from "../../../Components/StandardButtom/StandardButtom";
import { useFocusEffect } from "@react-navigation/native";

export default AnimatedButton = ({navigation}) =>
{
    const scaleMutiplier = useSharedValue(0)
    const opacity = useSharedValue(0)

    useFocusEffect(
        useCallback(() => {
          //alert('Screen was focused');
          scaleMutiplier.value = withSpring(1)
          opacity.value = withSpring(1)
          
          return () => {
            scaleMutiplier.value = 0
            //alert('Screen was unfocused');
            // Useful for cleanup functions

          }
        }, [])
    );

    const StartBAnimStyle = useAnimatedStyle(()=>
    {
        //console.log(scaleMutiplier.value)
        //setanimating(scaleMutiplier.value)

        return{
            //opacity:progress.value,
            opacity:opacity.value,
            transform:[{scale:scaleMutiplier.value},]
        }
    },[])

    return (
    
        <Animated.View
        style={[
            styles.AnimatedButton,
            StartBAnimStyle,
            ]}
            >
            <StandardButtom text={"Começar"} 
            onPressIn={()=>
            {
                scaleMutiplier.value = withRepeat(withSpring(1.3,{velocity:1.2}),0,true)
            }}
            onPressOut={()=>
            {
                scaleMutiplier.value = withSpring(1)
                opacity.value = withSpring(0)
                navigation.navigate('MainScreen')
            }}
            />
            

        </Animated.View>
        
    )
}
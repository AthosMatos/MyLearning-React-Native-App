import { SharedElement } from "react-navigation-shared-element";
import React, { useCallback } from "react";
import { Image} from 'react-native'
import { styles } from "../styles";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";

export default SharedElement_Logo = () =>
{
    const offset = useSharedValue(0)

    useFocusEffect(
        useCallback(()=>
        {
            offset.value = withSpring(1)

            return () =>
            {

            }
        },[])
    )

    const animatedStyle = useAnimatedStyle(()=>
    {
        return {
            transform:[{scale:offset.value}]
        }
    },[])

    return (
        <Animated.View
        style={[
            animatedStyle
        ]}>
            <SharedElement id="image">
                <Image style={styles.logo} 
                source = { 
                    //require('../../../assets/logo.png') 
                    require('../../../../assets/newOldLogo.png') 
                }/>
            </SharedElement>  
        </Animated.View>
        
    )
}
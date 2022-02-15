import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "../styles";
import { PrimaryColor } from "../../../../Defaults";

export default AnimatedActivityIndicator = () =>
{
    useEffect(()=>{
        offset.value = withSpring(1)

    },[])

    const offset = useSharedValue(0)
    const reanimatedStyle = useAnimatedStyle(()=>
    {
        //console.log(progress.value)
        return{
          
            //opacity:offset.value,
            transform:[{scale:offset.value},]
        }
    },[])
    return (
        <Animated.View 
        style={[
        reanimatedStyle,
        ]}
        >
            <ActivityIndicator style={styles.activityindicator} size="large" color={PrimaryColor}/>

        </Animated.View>
    )
}
import React, { useCallback } from "react";
import { ActivityIndicator } from "react-native"; 
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "../styles";
import { PrimaryColor } from "../../../../Defaults";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default AnimatedActivityIndicator = () =>
{
    const offset = useSharedValue(0)
    const navigation = useNavigation()
 
    useFocusEffect(
        useCallback(()=>
        {
            const gotonextScreen = () =>
            {
                navigation.reset({ routes:[{name: "StartScreen"} ]})
            }

            offset.value = withSpring(1)
            setTimeout(() => 
            {
                offset.value = withSpring(1.4,undefined,(isFinished)=>
                {
                    if(isFinished)
                    {
                        offset.value = withSpring(0,{overshootClamping:10},(isFinished)=>
                        {
                            if(isFinished)
                            {
                                //console.log('animationfinished2')
                                runOnJS(gotonextScreen)()
                            }
                        })
                    }
                })
            }, 1500)

            return ()=>{}
        },[])
    )
  
    const reanimatedStyle = useAnimatedStyle(()=>
    {
        return{  
            transform:[{scale:offset.value},]
        }
    },[])

    return (
        <Animated.View 
        style={[
        reanimatedStyle,
        styles.activityindicatorContainer
        ]}
        >
            <ActivityIndicator style={styles.activityindicator} size="large" color={PrimaryColor}/>

        </Animated.View>
    )
}
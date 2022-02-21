import React,{useCallback, useEffect, useState} from "react";
import Animated,{withSpring,useSharedValue,useAnimatedStyle, withRepeat, runOnJS } from "react-native-reanimated";
import { styles } from "../styles";
import StandardButtom from "../../../Components/StandardButtom/StandardButtom";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default AnimatedButton = () =>
{
    const scaleMutiplier = useSharedValue(0)
    const opacity = useSharedValue(0)
    const navigation = useNavigation()
    
    useFocusEffect(
        useCallback(() => {
         
          scaleMutiplier.value = withSpring(1)
          opacity.value = withSpring(1)
          
          return () => {}
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
                const gotonextScreen = () =>
                {
                    navigation.navigate('MainScreen')
                }
                scaleMutiplier.value = withSpring(1.3,{velocity:1.2},(isFinished)=>
                {
                    if(isFinished)
                    {
                        opacity.value = withSpring(0)
                        scaleMutiplier.value = withSpring(0,{overshootClamping:10,velocity:1.2},(isFinished)=>
                        {
                            if(isFinished)
                            {
                                runOnJS(gotonextScreen)()
                            }
                        })
                    }
                })
            }}
            />
            

        </Animated.View>
        
    )
}
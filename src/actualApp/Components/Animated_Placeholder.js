import React,{useEffect} from "react"
import {PixelRatio, Text} from "react-native"
import { ActivityIndicator } from "react-native-paper"
import Animated,{useSharedValue,useAnimatedStyle,withSpring} from "react-native-reanimated"

export default Placeholder = () => 
{
    useEffect(()=>{
        offset.value = withSpring(1)   
    },[])

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
        backgroundColor:'#EDF2F4'
    },
    AnimatedStyle
    ]}
    >
        <Text style={{
            color:'#2B2D42', 
            fontWeight:'bold',
            paddingVertical:PixelRatio.roundToNearestPixel(20),
            fontSize:PixelRatio.roundToNearestPixel(18)
            }}>Carregando...</Text>
        <ActivityIndicator size={'large'} color="#EF233C"/>
    </Animated.View>
    )
        
}



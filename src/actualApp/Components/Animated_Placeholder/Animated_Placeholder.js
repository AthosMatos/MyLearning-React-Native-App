import React,{useEffect} from "react"
import {Text} from "react-native"
import { ActivityIndicator } from "react-native-paper"
import Animated,{useSharedValue,useAnimatedStyle,withSpring} from "react-native-reanimated"
import styles from './styles'
import { TerciaryColor,PrimaryColor } from "../../../Defaults"

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
        backgroundColor:TerciaryColor
    },AnimatedStyle
    ]}
    >
        <Text style={styles.Text}>Carregando...</Text>
        <ActivityIndicator style={styles.activityindicator} size={'large'} color={PrimaryColor}/>

    </Animated.View>
    )
}




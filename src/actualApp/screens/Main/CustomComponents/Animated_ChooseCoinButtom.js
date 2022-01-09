import React,{useEffect} from 'react'
import {View,PixelRatio} from 'react-native'
import FABv2 from '../../../Components/FABv2'
import { coinPhoto } from '../../../Components/Carousel2.0/CoinVariables'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {height} from '../styles'

var offset

export function InAnimation()
{
    offset.value = withSpring(0,{damping:15})   
}


export default ChooseCoinButtom = ({toggleModal}) =>
{
    useEffect(()=>{
        offset.value = withSpring(0,{damping:15})   
    },[])

    offset = useSharedValue(height)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            //opacity:offset.value,
            transform:[{translateY:offset.value},]
        }
    },[])

    return(
        <Animated.View
        style={[{
            flex:2,
            marginHorizontal:PixelRatio.roundToNearestPixel(10)
        },
        AnimatedStyle
        ]}>
            <FABv2 
            text="Escolher Moeda"
            onPress={toggleModal} 
            color='#2B2D42' 
            image={!coinPhoto? require('../../../../assets/Icons/coin.png') : coinPhoto}
            fontSize={PixelRatio.roundToNearestPixel(15)}
            />
        </Animated.View>
    )
}
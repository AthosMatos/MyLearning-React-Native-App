import React,{useEffect} from 'react'
import {View,PixelRatio} from 'react-native'
import FABv2 from '../../../Components/FABv2'
import { coinPhoto } from '../../../Components/Carousel2.0/CoinVariables'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {height} from '../styles'
import { OutJelloDown } from '../../../Helpers/FewPresetAnimations'

var osffsetY,flex

export function InAnimation()
{
    osffsetY.value = withSpring(0,{damping:15})   
}

export function OnUploadAnimation()
{
    OutJelloDown(osffsetY)
}

export default ChooseCoinButtom = ({toggleModal}) =>
{
    useEffect(()=>{
        osffsetY.value = withSpring(0,{damping:15})   
    },[])

    osffsetY = useSharedValue(height)
    flex = useSharedValue(1)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            //opacity:offset.value,
            transform:[
                {translateY:osffsetY.value},
            ],
            flex:flex.value,

        }
    },[])

    return(
        <Animated.View
        style={[{
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
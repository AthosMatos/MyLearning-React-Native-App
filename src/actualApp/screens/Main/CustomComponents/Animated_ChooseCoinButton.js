import React,{useEffect} from 'react'
import {PixelRatio} from 'react-native'
import ButtomWithIcon from '../../../Components/ButtomWithIcon/ButtomWithIcon'
import { coinPhoto } from '../../../Components/Carousel2.0/CoinVariables'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {height} from '../styles'
import { OutJelloDown } from '../../../Helpers/FewPresetAnimations'
import { styles } from '../styles'

var osffsetY,flex

export function InAnimation()
{
    osffsetY.value = withSpring(0,{damping:15})   
}

export function OnUploadAnimation()
{
    OutJelloDown(osffsetY)
}

export default ChooseCoinButtom = ({toggleModal,photo}) =>
{
    useEffect(()=>{
        osffsetY.value = withSpring(0,{damping:15})   
    },[])


    osffsetY = useSharedValue(height)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            //opacity:offset.value,
            transform:[
                {translateY:osffsetY.value},
            ],
        }
    },[])

    return(
        <Animated.View
        style={[
        AnimatedStyle,
        {flexGrow:1}
        ]}>
            <ButtomWithIcon 
            image={!coinPhoto? require('../../../../assets/Icons/coin.png') : coinPhoto}
            text={!photo&& "Escolher Moeda"} 
            Buttonstyle={styles.Buttom1Style}
            ContainerInsideStyle={photo&& {alignItems:'center',justifyContent:'center',}}
            iconContainerStyle={photo&& {marginBottom:0}}
            iconStyle={photo&& styles.imgsize}
            textstyle={styles.font}
            onPress={toggleModal}
            />

        </Animated.View>
    )
}
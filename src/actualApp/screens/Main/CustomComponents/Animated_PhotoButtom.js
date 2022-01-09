import React,{useEffect} from 'react'
import {PixelRatio,View} from 'react-native'
import FABv2 from '../../../Components/FABv2'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {width} from '../styles'

var offset

export function InAnimation()
{ 
    offset.value = withSpring(0,{damping:15})   
}

export default PhotoButtom = ({photo,requestCameraPermission,handleUploadPhoto}) =>
{
    useEffect(()=>{
        offset.value = withSpring(0,{damping:15})   
    },[])

    offset = useSharedValue(width)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            //opacity:offset.value,
            transform:[{translateX:offset.value},]
        }
    },[])

    return(

        <Animated.View 
        style={[{
            flex:1,
            marginHorizontal:PixelRatio.roundToNearestPixel(10)
        },
        AnimatedStyle
        ]}>
            {!photo ?
                <FABv2 
                text="Tirar Foto" 
                onPress={requestCameraPermission} 
                color='#EF233C' 
                icon='camera-alt'
                fontSize={PixelRatio.roundToNearestPixel(15)}
            />
            :
            <FABv2 
            text="Enviar Foto" 
            onPress={handleUploadPhoto}
            color='#7605FF'
            icon='upload'
            type='font-awesome'
            fontSize={PixelRatio.roundToNearestPixel(15)}
            />
            }
        </Animated.View>

       
    )
}
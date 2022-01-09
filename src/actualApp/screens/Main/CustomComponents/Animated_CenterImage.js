import React,{useEffect} from 'react'
import { PixelRatio,TouchableOpacity } from 'react-native'
import Image from 'react-native-fast-image'
import { getname } from '../../../Helpers/AsyncConectionHelper'
import { loadDeviceData } from '../../../Helpers/AsyncStorageHelper'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from 'react-native-reanimated'
import {width} from '../styles'

var offset

export function InAnimation()
{
    offset.value = withSpring(1)
}

export default CenterImage = ({imgdone,photo,navigation}) =>
{
    useEffect(()=>{
        offset.value = withSpring(1)   
    },[])

    offset = useSharedValue(0)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            opacity:offset.value,
            transform:[{scale:offset.value},]
        }
    },[])


    async function func()
    {
        //console.log(photo.fileName)
        //console.log(getname())
        let shrimpdata = await loadDeviceData(getname())
        //console.log(shrimpdata)

        navigation.navigate('ShrimpInfo',{
            photoname: shrimpdata.Serverimage,
            dataname:getname(),
            imageuri:shrimpdata.uri,
            imageW:shrimpdata.imageW,
            imageH:shrimpdata.imageH,
        })
    }

    return (
        <>
        {!imgdone ? 
            <Animated.View 
            style=
            {[{
                alignItems:'center',
                marginTop:PixelRatio.roundToNearestPixel(80)
            },
            AnimatedStyle
            ]}
            >
                <Image 
                source={photo ? {uri:photo.uri} : require('../../../../assets/exampleimage_1.png')}
                style={{
                    width:width*0.95,
                    height:PixelRatio.roundToNearestPixel(250),
                    borderColor:'#2B2D42',
                    borderWidth:PixelRatio.roundToNearestPixel(6),
                    borderRadius:PixelRatio.roundToNearestPixel(15)
                    }}
                />
            </Animated.View>
        :
        <Animated.View
        style={[AnimatedStyle]}>
            <TouchableOpacity 
            onPress={func}
            style=
            {{
                alignItems:'center',
                marginTop:PixelRatio.roundToNearestPixel(80)
            }}
            >   
                <Image
                source={photo ? {uri:photo.uri} : require('../../../../assets/landscape.png')}
                style={{
                    width:width*0.95,
                    height:PixelRatio.roundToNearestPixel(250),
                    borderColor:'#2B2D42',
                    borderWidth:PixelRatio.roundToNearestPixel(6),
                    borderRadius:PixelRatio.roundToNearestPixel(15),
                    }}
                />
                
            </TouchableOpacity>
        </Animated.View>
        }
        </>
    )
}
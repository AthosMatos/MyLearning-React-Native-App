import React,{useEffect, useState} from 'react'
import { TouchableOpacity,View,Image as RNImage } from 'react-native'
import { getname } from '../../../Helpers/AsyncConectionHelper'
import { loadDeviceData } from '../../../Helpers/AsyncStorageHelper'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from 'react-native-reanimated'
import EStyleSheet from 'react-native-extended-stylesheet'
import ResponsiveStuff from '../../../Helpers/ResponsiveStuff'
import { LayoutRef } from '../../../../Defaults'

var offset

export function InAnimation()
{
    offset.value = withSpring(1)
}

export default CenterImage = ({uploadDone,photo,navigation}) =>
{
    const [aspectRatio,setaspectRatio]= useState(526/371)

    useEffect(()=>{
        offset.value = withSpring(1)
    },[])

    useEffect(() => {  

        if(photo)
        {
            console.log('imagesize' ,photo.width + ' ' + photo.height)
            console.log('orientation' ,photo.deviceOrientation)
            
            if(!(photo.deviceOrientation===1 || photo.deviceOrientation===2))
            {
                console.log('aspectratio' ,photo.width/photo.height)
                setaspectRatio(photo.width/photo.height)
            }
            else 
            {
                console.log('aspectratio' ,photo.height/photo.width)
                setaspectRatio(photo.height/photo.width)
            }
        }
        else 
        {
            setaspectRatio(526/371)
        }

    },[photo])

   

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
            <Animated.View
            style=
            {[styles.container,
            //AnimatedStyle,
            ]}
            >
                <TouchableOpacity 
                disabled = {!uploadDone}
                onPress={func}
                
                >   
                    <RNImage 
                    source={photo ? {uri:photo.uri} : require('../../../../assets/exampleimage_1.png')}
                    style={[getimgstyle(aspectRatio).image,styles.Imageborder
                    ]}
                    />    
                    
                </TouchableOpacity>
            </Animated.View>
    )
}

const getimgstyle = (aspectRatio) =>
{
    return (
        EStyleSheet.create({
            image:
            {
                width:"100%",
                height:undefined,
                aspectRatio:aspectRatio,
                maxHeight:'100%',
                maxWidth:'100%',
            }
        })
    )
}

const styles = EStyleSheet.create({
    container : 
    {
        flex: 1,
        //backgroundColor:'grey',
        height:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.35),
        marginVertical:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.025),
        marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.005),
        justifyContent:'center',
        alignItems:'center',
    },
    Imageborder:
    {
        borderWidth:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.008),
        borderRadius:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.035),
        borderColor:'#2B2D42',
    },
    
})
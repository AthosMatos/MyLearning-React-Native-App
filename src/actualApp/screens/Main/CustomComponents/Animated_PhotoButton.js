import React,{useCallback} from 'react'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {width} from '../styles'
import ButtomWithIcon from '../../../Components/ButtomWithIcon/ButtomWithIcon'
import { ComplementaryColor, TerciaryColor } from '../../../../Defaults'
import { styles } from '../styles'
import { useFocusEffect } from '@react-navigation/native'

var offsetX,offsetScale


export default PhotoButtom = ({
    requestCameraPermission,
    handleUploadPhoto,
    photo,setshowloadingButton,
    showloadingButton,uploadDone, 
    setuploadDone, setisLoading,
    setuploadstatus,setphoto,
    setshowReset}) =>
{
    useFocusEffect(
        useCallback(()=>
        {
            offsetX.value = withSpring(0,{damping:15})   

            return () =>
            {

            }
        },[])
    )

    offsetX = useSharedValue(width)
    offsetScale = useSharedValue(1)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            opacity:offsetScale.value,
            transform:[
                {translateX:offsetX.value},
                {scale:offsetScale.value}
            ],
        }
    },[])
    
    const Onpress = () =>
    {
        if(showloadingButton)
        {
            if(uploadDone)
            { 
                setuploadDone(false)
                setisLoading(false)           
                setuploadstatus(null)      
                setphoto(null)
                setshowReset(false)
                setshowloadingButton(false)
            }
        }
        else
        {
            if(photo)
            {
                handleUploadPhoto()
            }
            else 
            {
                requestCameraPermission()
            }
        }
        
    }

    return(
        <Animated.View 
        style={[
        //AnimatedStyle,
        !showloadingButton&&(photo&& {flexGrow:1,})
        ]}>
            <ButtomWithIcon 
            icon={!uploadDone ? (!showloadingButton&& (!photo? 'camera': 'upload')): 'close'} 
            iconcolor={TerciaryColor} 
            text={!showloadingButton&& (!photo&& "Tirar Foto")} 
            Buttonstyle={[styles.Buttom2Style,photo&& {backgroundColor:ComplementaryColor},showloadingButton&& styles.onload ]}
            onPress={Onpress}
            ContainerInsideStyle={photo&& {alignItems:'center',justifyContent:'center',}}
            iconContainerStyle={photo&& {marginBottom:0}}
            iconStyle={photo&& styles.iconsize}
            textstyle={styles.font}
            Loading={!uploadDone&& showloadingButton}
            />
       
        </Animated.View>

    )
}
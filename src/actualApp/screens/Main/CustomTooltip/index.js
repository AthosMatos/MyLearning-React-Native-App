import React, { useEffect, useState} from "react";
import { PixelRatio,Dimensions,Text} from 'react-native'
import { View } from "react-native-animatable";
import Modal from "react-native-modal";
import { Card } from "react-native-paper";

const {width, height} = Dimensions.get('window')

/*<CustomTooltip 
            title='TEST'
            text = 'texto test do tooltip'
            textColor = '#000'
            backgroundColor = '#EDF2F4'
            height={PixelRatio.roundToNearestPixel(200)}
            width={PixelRatio.roundToNearestPixel(200)}
            show={true}
            />*/

const CustomTooltip = ({title,text,textColor,backgroundColor,height,width,show,Viewstyle,onClose}) =>
{
    const [toolTipVisible,settoolTipVisible] = useState()

    useEffect(()=>
    {
        settoolTipVisible(show)
        
    },[])
    const toggleModal = () => 
    {
    settoolTipVisible(!toolTipVisible);
    }

    const Inside = () => 
            (
            <>
            <View style={Viewstyle}>
                <Card 
                style={{
                    height:height, 
                    width:width,
                    backgroundColor:backgroundColor,
                    borderRadius:PixelRatio.roundToNearestPixel(12),
                    
                }}
                mode="outlined"
                >
                    <View style={{alignItems:'center'}}>
                        <Text 
                        style={{
                            color:textColor,
                            marginTop:PixelRatio.roundToNearestPixel(20),
                            fontWeight:'bold'
                        }}>{title}
                        </Text>
                    </View>
                
                    <View style={{alignItems:'center',marginHorizontal:PixelRatio.roundToNearestPixel(12)}}>
                        <Text 
                        style={{
                            color:textColor,
                            marginVertical:PixelRatio.roundToNearestPixel(10),
                            fontWeight:'normal',
                        }}>{text}
                        </Text>
                    </View>
        
                </Card>
            </View>
            </>
            )   

    return (
        <>  
        <Modal
            isVisible={toolTipVisible}
            useNativeDriverForBackdrop
            hideModalContentWhileAnimating
            useNativeDriver
            style={{margin:0}}
            onBackButtonPress={()=>
                {
                    toggleModal()
                    setTimeout(() => 
                    {  
                        if(onClose)
                        {
                            onClose()
                        }  
                    }, 500)
                }}
            onBackdropPress={()=>
                { 
                    toggleModal()
                    setTimeout(() => 
                    {  
                        if(onClose)
                        {
                            onClose()
                        }  
                    }, 500)

                }}
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={500}
            animationOutTiming={500}
            backdropOpacity={0.3}
            hardwareAccelerated
            statusBarTranslucent
            >

                <Inside/>
                
        </Modal>
        </>
    )
}

export default CustomTooltip

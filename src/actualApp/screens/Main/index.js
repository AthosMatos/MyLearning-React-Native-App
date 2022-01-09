import React,{useState,useEffect,useCallback} from "react";
import {  View,StatusBar,PixelRatio,Text,BackHandler} from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from '../../Components/Carousel2.0'
import Modal from 'react-native-modal'

import { BlurView } from "@react-native-community/blur"
import {handleUploadPhoto} from "../../Helpers/AsyncConectionHelper";
import Customtooltip from './CustomTooltip'
import {AfterInteractions} from 'react-native-interactions';
import { useFocusEffect } from "@react-navigation/native";

import Animated_ChooseCoinButtom from "./CustomComponents/Animated_ChooseCoinButtom";
import Animated_PhotoButtom from "./CustomComponents/Animated_PhotoButtom";
import Animated_CenterImage from "./CustomComponents/Animated_CenterImage";
import Animated_InfoButtom from "./CustomComponents/Animated_InfoButtom";
import Animated_HistoricButtom from "./CustomComponents/Animated_HistoricButtom";
import Placeholder from "../../Components/Animated_Placeholder";
import { requestCameraPermission } from "../../Helpers/CameraHelper";
import { styles } from "./styles";

const mainscreen = ({navigation,route}) =>
{
    const [photo,setphoto] = useState(null)
    const [uploadstatus,setuploadstatus] = useState('IDLE')
    const [imgdone,setimgdone] = useState(false)
    const [isLoading,setisLoading] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)
    const [tooltip,settootip] = useState(0)

    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => 
          {
              //console.log('backpress') 
              route.params.ReenterAnimation()
          }
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress)
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        }, [])
    )


    const toggleModal = () =>
    {
        setModalVisible(!isModalVisible)
    }
    
    const TooltipRender= () =>
    {
        if(tooltip===0)
        {
            return(     
                <Customtooltip 
                title={'title1'} 
                text={'textjfdhshdfshfsfsdfsdfhsgfghfhsdfhgsfgdhgfhsgfhsdgfhgsdfgshdgfhsgdfs'} 
                show={true}
                backgroundColor={'#FFF'} 
                width={PixelRatio.roundToNearestPixel(200)}
                Viewstyle={{flex:1,alignItems:'center',justifyContent:'center',}}
                onClose={()=>{settootip(1)}}
                key={1}
                />
                )   
        }
        else if(tooltip===1)
        {
            return (
                <Customtooltip 
                title={'title2'} 
                text={'textjfdhshdfshfsfsdfsdfhsgfghfhsdfhgsfgdhgfhsgfhsdgfhgsdfgshdgfhsgdfs'} 
                show={true}
                backgroundColor={'#FFF'} 
                width={PixelRatio.roundToNearestPixel(200)}
                Viewstyle={{flex:1,alignItems:'center',justifyContent:'center',}}
                onClose={()=>{settootip(2)}}
                key={2}
                />
                )
        }
        return(
            <></>
        )
      
    }

    return (

    <AfterInteractions placeholder={<Placeholder/>}>

          <SafeAreaView style = {styles.Container}>
        
            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle='dark-content'
            />

            <View 
            style={styles.UpperButtonsView}
            >
                    
                <Animated_InfoButtom navigation={navigation}/>
                <Animated_HistoricButtom navigation={navigation}/>
                            
            </View>

            <Animated_CenterImage photo={photo} imgdone={imgdone} navigation={navigation} />

            <View style={{
                justifyContent:'flex-end',
                flex:1,
                }}>
                
                <View style={styles.BottomButtonsView}>
                    <Animated_ChooseCoinButtom toggleModal={toggleModal} />
                        
                    <Animated_PhotoButtom 
                    photo={photo} 
                    handleUploadPhoto={()=>{handleUploadPhoto(setuploadstatus,setisLoading,photo,photo.uri,setimgdone)}}
                    requestCameraPermission={()=>{requestCameraPermission({setphoto:setphoto})}}
                    />
                </View>
                
            </View>

            <View style = {styles.UploadStatusView}>
                {isLoading &&
                    <ActivityIndicator color={'#000'} />
                }

                <Text>{uploadstatus}</Text>

            </View>

            <Modal
            isVisible={isModalVisible}
            hideModalContentWhileAnimating
            useNativeDriver
            onBackButtonPress={()=>
            {
                toggleModal()
            }}
            style={{margin:0}}
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={500}
            animationOutTiming={500}
            statusBarTranslucent
            >
                <BlurView
                style={{position: "absolute",top: 0,left: 0,bottom: 0,right: 0}}
                blurType="dark"
                blurAmount={20}
                downsampleFactor={25}
                blurRadius={25}
                overlayColor='rgba(0,0,0,0.2)'
                />
            
                <Carousel toggleModal={toggleModal}/>
                
            </Modal>

            {/*<TooltipRender/>*/}
        </SafeAreaView>
    </AfterInteractions>

  
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'whatevs',animation: 'fade-out',resize:'auto'}
]

export default mainscreen

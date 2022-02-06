import React,{useState,useEffect,useCallback,createRef} from "react";
import {View,StatusBar,PixelRatio,Text,BackHandler} from 'react-native'
import Carousel from '../../Components/Carousel2.0'
import Modal from 'react-native-modal'

import { BlurView } from "@react-native-community/blur"
import {handleUploadPhoto} from "../../Helpers/AsyncConectionHelper";
import Customtooltip from './CustomTooltip'
import {AfterInteractions} from 'react-native-interactions';
import { useFocusEffect } from "@react-navigation/native";

import Animated_ChooseCoinButtom from "./CustomComponents/Animated_ChooseCoinButton";
import Animated_PhotoButtom from "./CustomComponents/Animated_PhotoButton";
import Animated_CenterImage from "./CustomComponents/Animated_CenterImage";
import Animated_InfoButtom from "./CustomComponents/Animated_InfoButton";
import Animated_HistoricButtom from "./CustomComponents/Animated_HistoricButton";
import Placeholder from "../../Components/Animated_Placeholder/Animated_Placeholder";
import { requestCameraPermission } from "../../Helpers/CameraHelper";
import { styles } from "./styles";
import Animated_ResetButton from "./CustomComponents/Animated_ResetButton";
import Animated_OnLoad from "./CustomComponents/Animated_OnLoad";
import { LayoutRef,setLayoutRef } from "../../../Defaults";
import {Transitioning,Transition} from "react-native-reanimated";

const mainscreen = ({navigation,route}) =>
{
    const [photo,setphoto] = useState(null)
    const [showReset,setshowReset] = useState(false)
    const [uploadstatus,setuploadstatus] = useState(undefined)
    const [uploadDone,setuploadDone] = useState(false)
    const [showloadingButton,setshowloadingButton] = useState(false)
    const [isLoading,setisLoading] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)
    const [tooltip,settootip] = useState(0)

    setLayoutRef(createRef())
    
    useState(()=>
    {
        if(LayoutRef.current)LayoutRef.current.animateNextTransition()
        
    },[photo])

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

          <Transitioning.View style = {styles.Container}
          transition={
          <Transition.Sequence>
              <Transition.Change interpolation="easeInOut"/>
          </Transition.Sequence>}
          ref={LayoutRef}
          >
        
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

            <Animated_CenterImage photo={photo} uploadDone={uploadDone} navigation={navigation} />


            
            {!showloadingButton&&
            <View style={styles.BottomButtonsView}
            >
                
                <Animated_ChooseCoinButtom 
                toggleModal={toggleModal} 
                photo={photo} 
                />
                    
                <Animated_PhotoButtom 
                handleUploadPhoto={()=>
                    {
                        handleUploadPhoto(setuploadstatus,setisLoading,photo,photo.uri,setuploadDone,setphoto,setshowReset,setshowloadingButton,LayoutRef)
                    }}
                requestCameraPermission={()=>{requestCameraPermission(setphoto,setshowReset,navigation)}}
                photo={photo}
                />

                <Animated_ResetButton show={showReset} setphoto={setphoto} setshowReset={setshowReset}/>

                

            </View>
            }
            <Animated_OnLoad 
            show={showloadingButton} 
            uploadDone={uploadDone} 
            loading={isLoading}
            setuploadDone ={setuploadDone}
            setisLoading={setisLoading}
            setuploadstatus={setuploadstatus}
            setphoto={setphoto}
            setshowReset={setshowReset}
            setshowloadingButton={setshowloadingButton}
            />
            {/*<Animated_ResetButton show={showReset} setphoto={setphoto} setshowReset={setshowReset} LayoutRef={LayoutRef}/>*/}

            
            <View style = {styles.UploadStatusView}>

            {uploadstatus&& <Text>{uploadstatus}</Text>}

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
        </Transitioning.View>
    </AfterInteractions>

  
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'whatevs',animation: 'fade-out',resize:'auto'}
]

export default mainscreen

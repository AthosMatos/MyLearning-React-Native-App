import React, { useCallback, useEffect, useRef,useState } from 'react';
import { Text, TouchableOpacity, View,Image, StatusBar } from 'react-native';
import { RNCamera, } from 'react-native-camera';
import {useNavigation} from "@react-navigation/native"
import { LayoutRef, SecondaryColor, TerciaryColor } from '../../../Defaults';
import { width } from '../../screens/Main/styles';
import { height } from '../../screens/Start/styles';
import ResponsiveStuff from '../../Helpers/ResponsiveStuff';
import StyleSheet from 'react-native-extended-stylesheet';
import { AfterInteractions } from 'react-native-interactions';
import Animated_Placeholder from '../Animated_Placeholder/Animated_Placeholder';
import StandardButtom from '../StandardButtom/StandardButtom'

const Camera = ({route}) =>
{
  const CamRef = useRef()
  const [photo,setphoto] = useState(undefined)
  const [bottomView,setBottomView] = useState(undefined)


  const navigation = useNavigation()

  const takePicture = async () => {
    if (CamRef) {
      const options = { quality: 1, base64: false,exif:true,}
      const data = await CamRef.current.takePictureAsync(options)

      // console.log(data.width)
      // console.log(data.height)
      //console.log(data.deviceOrientation)
      
      setphoto(data)

      if(route.params.setshowReset){route.params.setshowReset(true)}
      if(LayoutRef.current)LayoutRef.current.animateNextTransition()
      if(route.params.setphoto){route.params.setphoto(data)}
      
    }
  }

  return (
    <AfterInteractions 
    placeholder={
      <Animated_Placeholder 
      style={{backgroundColor:'black'}} 
      textStyle={{color:TerciaryColor}} 
      activityindicatorColor={TerciaryColor}
      StatusBar={
        <StatusBar
        backgroundColor={'black'}
        barStyle='light-content'
        />
      }
      />
    }>
        <View style={styles.container}>
        <StatusBar
        backgroundColor={'black'}
        barStyle='light-content'
        hidden
        />
        <View style={[styles.cameraContainer,{
              width: width,
              height: ResponsiveStuff.get_number_ResponsiveImageAspectRatio(width,3,4),
            }]}> 

            <RNCamera
            ref={CamRef}
            style={[
            {
              width: width,
              height: ResponsiveStuff.get_number_ResponsiveImageAspectRatio(width,3,4),
            },styles.camera
            ]
            }
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
           
            onCameraReady={async ()=>
            {
            // const r = await CamRef.current.getSupportedRatiosAsync()
              const s = await CamRef.current.getAvailablePictureSizes()
              
              //setimagesize(s[s.length-1].split('x'))

            // console.log('onCameraReady ratios: ', r)
              //console.log('onCameraReady sizes: ', s)
              //console.log('width: ', width)
              //console.log('height: ', height)
            
            }}         
          />
        </View>

        <View style={[styles.camButtonsContainer]} 
        onLayout={(event)=>
        {
          const {width, height} = event.nativeEvent.layout
          setBottomView({width:width,height:height})
          //console.log('layout width', width)
          //console.log('layout height', height)
        }}>
          
          <TouchableOpacity 
          style={[bottomView&& getStyle(bottomView.height).camButton]}
          onPress={async ()=>
            {
              await takePicture()
              if(route.params.callback)route.params.callback()
              navigation.goBack()

            }}/> 

        </View>
        
      </View>
    </AfterInteractions>
    
  )
}
let getStyle = function (newHeight)
{
  return StyleSheet.create({
    camButton:
    {
      borderRadius:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.6,undefined,newHeight),
      backgroundColor:'white',
     // flex:1,
      height:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.42,undefined,newHeight),
      width:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.42,undefined,newHeight),
      maxHeight:'5.4rem',
      maxWidth:'5.4rem'
    },
  })
  
}

const styles = StyleSheet.create({
  cameraContainer:
  {
    //borderWidth: 2,
    //borderColor:'red'
  },
  camera:
  {
    //borderWidth: 2,
    //borderColor:'blue'
  },
  container: 
  {
    flex: 1,
    backgroundColor: 'black',
  },
  camButtonsContainer:
  {
    flex:1,
    flexDirection: 'row', 
    //borderWidth:4,
    //borderColor:'red',
    alignItems:'center',
    justifyContent:'center'
  }
})


export default Camera
  
  
  
  

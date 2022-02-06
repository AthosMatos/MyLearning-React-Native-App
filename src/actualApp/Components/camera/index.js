import React, { useRef,useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { RNCamera, } from 'react-native-camera';
import {useNavigation} from "@react-navigation/native"
import { LayoutRef } from '../../../Defaults';

const Camera = ({route}) =>
{
  const CamRef = useRef()
  const [photo,setphoto] = useState(undefined)
  
  const navigation = useNavigation()

  const takePicture = async () => {
    if (CamRef) {
      const options = { quality: 1, base64: false,exif:true }
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
    <View style={styles.container}>
      <RNCamera
        ref={CamRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
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
        cameraId='0'
      >
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={async ()=>
          {
            await takePicture()
            if(route.params.callback)route.params.callback()
            navigation.goBack()
            
          }} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>

      {photo&& <Image source={{uri:photo.uri}} style={{width:'100%',height:undefined,flex:1}} resizeMode={'contain'}/> }
      </RNCamera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})


export default Camera
  
  
  
  

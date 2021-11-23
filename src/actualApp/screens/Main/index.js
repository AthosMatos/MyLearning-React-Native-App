import React,{useState,useEffect} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,Dimensions,Platform,PermissionsAndroid,Text,BackHandler} from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from '../../Components/Carousel2.0'
import FAB from "../../Components/FABv2";
import Modal from 'react-native-modal'
import { ProgressBar,Colors } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import { launchCamera,launchImageLibrary } from "react-native-image-picker";

const {width, height} = Dimensions.get('window')

const SERVER_URL = 'http://192.168.0.74:3000'
//const SERVER_URL = 'http://177.65.202.66:3000'

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            transform:[{scale:1.1}],
            resizeMode:'center'
        },
        logoContainer:
        {
            alignItems:'center',
            position:'absolute',
            top:(Dimensions.get('window').height)*0.2,
        },
    }
)

const mainscreen = ({navigation}) =>
{  
  
  const [Button1_Anim,setButton1_Anim] = useState('slideInLeft')
  const [Button2_Anim,setButton2_Anim] = useState('slideInRight')

  const [photo,setphoto] = useState(null)
  const [uploadstatus,setuploadstatus] = useState('IDLE')
  const [isLoading,setisLoading] = useState(false)
  const [step,setstep] = useState(null)


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", ()=>
        {
            setButton1_Anim('slideOutLeft')
            setButton2_Anim('slideOutRight')
        })
    },[])

    const [isModalVisible, setModalVisible] = useState(false)
    
    const toggleModal = () => 
    {
        setModalVisible(!isModalVisible);
    }

    const isReachable  = async () =>
    {
        const timeout = new Promise((resolve, reject) => {
            setTimeout(reject, 5000, 'Request timed out');
        });
        const request = fetch(SERVER_URL);
        try {
            const response = await Promise
                .race([timeout, request]);
            return true
        }
        catch (error) {
            setisLoading(false)
            setuploadstatus('ENVIO CANCELADO')
            alert('Nao foi possivel se conectar ao server')
            return false
            
        }
    }

    const handleTakePhoto = () =>
    {
        launchCamera({ noData: true }, (response) => {
            // console.log(response);
            if (!response.didCancel) {
            console.log(response.assets[0].height)
            console.log(response.assets[0].width)
            setphoto(response.assets[0])
            }
        })
    }
    
    const handleChoosePhoto = () =>
    {
        launchImageLibrary({ noData: true }, (response) => {
            // console.log(response);
            if (!response.didCancel) {
            console.log(response.assets[0].height)
            console.log(response.assets[0].width)
            setphoto(response.assets[0])
            }
        })
    }

    const checkstep = async () =>
    {
        index = 0
        prevstep = 0
        
        fetch(`${SERVER_URL}/pytest`)
        
        while(index!=10)
        {
            const request = await fetch(`${SERVER_URL}/getstep`)
            const json = await request.json()
            
            if(json.step!=prevstep)
            {
            //console.log('response', json.step)
            index++
            prevstep=json.step
            setstep(prevstep)
            }
        }
        // setstep("Processado!!!")
    }

    const createFormData = async (photo, body = {}) => 
    {
        const data = new FormData()
      
        data.append('photo', {
          name: photo.fileName,
          type: photo.type,
          uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
        })
      
        Object.keys(body).forEach((key) => {
          data.append(key, body[key])
        })
      
        return data
    }

    const requestCameraPermission = async () => 
    {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Permissao pra Camera",
                message:"App nescessita acessar sua camera",
                buttonNeutral: "Pergunte-me depois",
                buttonNegative: "Cancelar",
                buttonPositive: "OK"
            }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            handleTakePhoto()

            } else {
            console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }
    
    const handleUploadPhoto = async () =>
    {
        setuploadstatus('ENVIANDO...')
        setisLoading(true)
      
        if(isReachable())
        {
            try {
            const response = await fetch(`${SERVER_URL}/api/upload`, {
                method: 'POST',
                body: createFormData(photo, { userId: 'RandomUser' }),
                headers:{
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
                }
            })
            const json = await response.json()
            setuploadstatus('Imagem Enviada!')
      
            checkstep()
        
            //console.log('response', json)
            } catch (error) {
            setuploadstatus('Imagem NAO Enviada!')
           
            console.error(error)
            } finally {
            setisLoading(false)
        
            }    
        }
    }

  return (  
  <SafeAreaView style = {styles.Container}>
      
      <StatusBar
      backgroundColor = "#EDF2F4"
      barStyle={'dark-content'}/>
        
      <Modal isVisible={isModalVisible} 
          useNativeDriverForBackdrop 
          hideModalContentWhileAnimating
          useNativeDriver
          onBackButtonPress={()=>{ setModalVisible(!isModalVisible)}}
          onBackdropPress={()=>{ setModalVisible(!isModalVisible)}}
          animationIn='zoomIn'
          animationOut='zoomOut'
          > 
              <Carousel />
      </Modal>


        <View style=
            {{
              marginHorizontal: PixelRatio.roundToNearestPixel(50),
              alignItems:'center'
            }}>
            <Image source={require('../../../assets/landscape.png')} 
            style={{width:PixelRatio.roundToNearestPixel(200),height:PixelRatio.roundToNearestPixel(200)}}/>
        </View>

      <View style = {{justifyContent:'center',alignItems:'center'}}>                   
          {isLoading &&
            <View style={{ 
              position:'absolute',
              top:height*0.55
              }}>
                  <ActivityIndicator color={'#000'} />
            </View>
          }

          {step && 
          <View style={{ 
              position:'absolute',
              top:height*0.5
              }}>
                  <Text>{"Processando passo: " + step}</Text>
          </View>
          }

          <Text>{uploadstatus}</Text>

          {photo && 
          <View style={{ 
              position:'absolute',
              top:height*0.1
              }}>
              <Image
              source={{ uri: 
                photo.uri 
                  //'https://cdn.pixabay.com/photo/2017/04/30/11/42/hijab-2272708_960_720.png'
              }}
              style={{ width, height: PixelRatio.getPixelSizeForLayoutSize(110),resizeMode:'cover' }}
              /> 
          </View>
          }  

          {photo && 
          <View style={{ 
              position:'absolute',
              top:height*0.1
              }}>
              <View style={{ 
              width, height:PixelRatio.getPixelSizeForLayoutSize(110), backgroundColor:'#000',opacity:0.6}}/>
          </View>
          }  

          {photo &&
          <View style={{ 
              position:'absolute',
              top:height*0.28
              }}>
                  <ProgressBar progress={step/10} color={Colors.white} 
                      style={{
                      width:width*0.8,          
                      }}/>
          </View>
          }
      </View>

      <View style={{
        justifyContent:'flex-end',
        flex:1,
        }}>
        
        <View style={{
            justifyContent:'space-evenly',
            flexDirection:'row',
            paddingBottom:PixelRatio.getPixelSizeForLayoutSize(20),
            }}
            >
            <Animatable.View
              animation={Button1_Anim}
              direction="normal"
              duration={500}
              useNativeDriver
              style={{
                  flex:2,
                  marginHorizontal:PixelRatio.roundToNearestPixel(10)
              }}>
                  <FAB 
                  text="Escolher Moeda"
                  onPress={toggleModal} 
                  color='#2B2D42' 
                  image={require('../../../assets/Icons/coin.png')}
                  fontSize={PixelRatio.roundToNearestPixel(15)}
                  />
            </Animatable.View>
                
            <Animatable.View 
            animation={Button2_Anim}
            direction="normal"
            duration={500}
            useNativeDriver
            style={{
                flex:1,
                marginHorizontal:PixelRatio.roundToNearestPixel(10)
              }}>
                {photo ?
                <FAB 
                text="Enviar Foto" 
                onPress={handleUploadPhoto} 
                color='#7605FF' 
                icon='camera-alt'
                fontSize={PixelRatio.roundToNearestPixel(15)}
                /> 
                :
                <FAB 
                text="Tirar Foto" 
                onPress={requestCameraPermission} 
                color='#EF233C' 
                icon='camera-alt'
                fontSize={PixelRatio.roundToNearestPixel(15)}
                /> 
                }
            </Animatable.View>
        </View>
        
      </View>

  </SafeAreaView>
  )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'button',animation: 'fade-out',resize:'auto'}
]


export default mainscreen

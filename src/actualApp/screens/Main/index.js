import React,{useState,useEffect, Component} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,Dimensions,Platform,PermissionsAndroid,Text,BackHandler,TouchableOpacity} from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from '../../Components/Carousel2.0'
import FABv2 from "../../Components/FABv2";
import FAB from "../../Components/FAB";
import FABv3 from "../../Components/FABv3";
import Modal from 'react-native-modal'
import { ProgressBar,Colors } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import { launchCamera,launchImageLibrary } from "react-native-image-picker";
import {DebugView} from '../../Components/View2.0/index'
import { Icon } from "react-native-elements";
import {
    coin,
    coinPhoto,
    GetCoinB,
    GetHistB,
    GetImg,
    GetInfoB,
    GetPhotoB,
    handleCoinB,
    handleHistB,
    handleImg,
    handleInfoB,
    handlePhotoB
} from '../../variables'
const {width, height} = Dimensions.get('window')

//const SERVER_URL = 'http://192.168.0.74:3000'
const SERVER_URL = 'http://104.251.214.172:4000'
//const SERVER_URL = 'http://192.168.15.43:3000'

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




const Movables = ({photo,toggleModal,changeButton,requestCameraPermission,navigation}) =>
{
    var backHandler

    useEffect(() => {
        
        GetCoinB().slideInLeft(1000)
        GetPhotoB().slideInRight(1000)
        GetImg().slideInDown(1000)
        GetInfoB().slideInLeft(1000)
        GetHistB().slideInRight(1000)

        const backAction = () => 
        {
            GetInfoB().slideInLeft(1000)
            GetPhotoB().slideInRight(1000)
            GetImg().slideInDown(1000)
            GetCoinB().slideInLeft(1000)
            GetHistB().slideInRight(1000)
        }
        
        backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )
        return () => backHandler.remove()
      }, [])
    
    const BelowButtons = () =>
    {

        function Button2()
        {
            if(!changeButton)
            {
                return (
                    <>
                    <FABv2 
                    text="Tirar Foto" 
                    onPress={requestCameraPermission} 
                    color='#EF233C' 
                    icon='camera-alt'
                    fontSize={PixelRatio.roundToNearestPixel(15)}
                    />
                    </>)
            }
            else if(changeButton==1)
            {
                return (
                    <>
                    <FABv2 
                    text="Enviar Foto" 
                    onPress={()=>
                        {
                            
                            //CoinB.slideOutLeft(1000)
                            GetPhotoB().slideOutRight(1000).then(()=>
                            {
                                handleUploadPhoto()
                            })                           
                            
                        }} 
                    color='#7605FF'
                    icon='upload'
                    type='font-awesome'
                    fontSize={PixelRatio.roundToNearestPixel(15)}
                    />
                    </>)
            }
        }

        return (
            <>
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
                ref={handleCoinB}
                useNativeDriver
                easing='ease'
                style={{
                    flex:2,
                    marginHorizontal:PixelRatio.roundToNearestPixel(10)
                }}>
                    <FABv2 
                    text="Escolher Moeda"
                    onPress={toggleModal} 
                    color='#2B2D42' 
                    image={!coinPhoto? require('../../../assets/Icons/coin.png') : coinPhoto}
                    fontSize={PixelRatio.roundToNearestPixel(15)}
                    />
                </Animatable.View>
                    
                <Animatable.View 
                ref={handlePhotoB}
                useNativeDriver
                easing='ease'
                style={{
                    flex:1,
                    marginHorizontal:PixelRatio.roundToNearestPixel(10)
                }}>

                    <Button2/>

                </Animatable.View>
            </View>
            
        </View>
            </>
            )
    }

    const CenterImage = () =>
    {
        return (
            <>
            
            <Animatable.View 
            style=
            {{
                alignItems:'center',
                marginTop:PixelRatio.roundToNearestPixel(80)
            }}
            ref={handleImg}
            useNativeDriver
            easing='ease'
            >
                <Image 
                source={photo ? {uri:photo.uri} : require('../../../assets/landscape.png')} 
                style={{
                    width:width*0.95,
                    height:PixelRatio.roundToNearestPixel(250),
                    borderColor:'#2B2D42',
                    borderWidth:PixelRatio.roundToNearestPixel(6),
                    borderRadius:PixelRatio.roundToNearestPixel(15)
                    }}
                />
            </Animatable.View>
            </>
        )
    }

    const AboveButtons = () =>
    {
        return (
            <>
                <View 
                style={{flexDirection:'row',alignItems:'center',marginRight:PixelRatio.roundToNearestPixel(10),marginTop:PixelRatio.roundToNearestPixel(10)}}
                >
                    <Animatable.View
                        useNativeDriver
                        ref={handleInfoB}
                        easing='ease'
                        >
                            <TouchableOpacity 
                            style={{flexDirection:'row',flex:1,justifyContent:'flex-start',marginLeft:PixelRatio.roundToNearestPixel(20)}} 
                            onPress={()=>
                                {
                                    
                                    navigation.navigate('Info')

                                }}>
                                <Icon name='info' color={'#2B2D42'} size={PixelRatio.roundToNearestPixel(40)}/>
                            </TouchableOpacity>
        
                    </Animatable.View>

                    <Animatable.View
                    useNativeDriver
                    ref={handleHistB}
                    easing='ease'
                    style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}
                    >
                        <FABv3 onPress={()=>
                            {
                                
                                navigation.navigate('Historic')
                                }} text='Historico' color={'#EDF2F4'} fontColor={'#2B2D42'} fontSize={PixelRatio.roundToNearestPixel(14)}/>
                    </Animatable.View>
                    
                </View>
            </>
            )
    }

    return(
        <>
        <AboveButtons/>

        <CenterImage/>

        <BelowButtons/>
        </>
    )
}

const mainscreen = ({navigation}) =>
{
    const [photo,setphoto] = useState(null)
    const [uploadstatus,setuploadstatus] = useState('IDLE')
    const [isLoading,setisLoading] = useState(false)
    const [step,setstep] = useState(null)
    const [changeButton,setchangeButton] = useState(0)

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
            setuploadstatus('ENVIO CANCELADO, server indisponivel')
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

                setchangeButton(1)

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

    const createFormData = (photo, body = {}) => 
    {
        var data = new FormData()
      
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
      
        if(await isReachable())
        {
            await fetch(`${SERVER_URL}/api/upload`, {
                method: 'post',
                body: createFormData(photo, { userId: 'randomuser', coin: coin }),
                headers:
                {
                  'content-type': 'multipart/form-data',
                  'Accept':'application/json'
                }
            })
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => {
                console.log('error', error);
                setuploadstatus('Imagem NAO Enviada!,erro de server')
                setisLoading(false)
                return
            })
            
           // const json = await response.json()
            setuploadstatus('Imagem Enviada!')
            
            checkstep()
            setisLoading(false)

            //console.log('response', json)    
    }
    }   

    const PopUp = () =>
    {
        //console.log(coin)
        return (
            <>
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
            </>
            )
    }

    return (  
    <SafeAreaView style = {styles.Container}>
        
        <StatusBar
        backgroundColor = "#EDF2F4"
        barStyle={'dark-content'}/>

        <PopUp/>  

        <Movables 
        photo={photo} 
        toggleModal={toggleModal} 
        changeButton={changeButton} 
        requestCameraPermission={requestCameraPermission}
        navigation={navigation}
        />

        <View style = {{justifyContent:'center',alignItems:'center'}}>
            {isLoading &&
                <ActivityIndicator color={'#000'} />
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
                <ProgressBar progress={step/10} color={Colors.black} 
                    style={{
                    width:width*0.8,          
                    }}/>
            }
        </View>

       

    </SafeAreaView>
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'button',animation: 'fade-out',resize:'auto'}
]


export default mainscreen

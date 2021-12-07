import React, { useState,useEffect} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,Dimensions,BackHandler} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import FAB from '../../Components/FAB'
import * as Animatable from 'react-native-animatable'
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

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(120),
            width:PixelRatio.getPixelSizeForLayoutSize(120),
            resizeMode:'center'
        },
    }
)

const mainscreen = ({navigation}) =>
{
    const [Button_Anim,setButton_Anim] = useState('slideInUp')
    const [Logo_Anim,setLogo_Anim] = useState('')
    var backHandler
    
    useEffect(() => {

        const backAction = () => 
        {
            /*GetHistB().slideOutRight(1000)
            GetInfoB().slideOutLeft(1000)
            GetCoinB().slideOutLeft(1000)
            GetPhotoB().slideOutRight(1000)
            GetImg().slideOutUp(1000)*/
            setLogo_Anim('')
            setButton_Anim('slideInUp')
        }
        
        backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )
        return () => backHandler.remove()
      }, [])


    return (
        <SafeAreaView style = {styles.Container}>
            
            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}/>

            <Animatable.View 
            animation={Logo_Anim}
            direction="normal"
            duration={600}
            useNativeDriver
            easing='ease'
            style={{
                alignItems:'center',
                flex: 1,
                paddingTop: height*0.1,
            }}
            >
                <SharedElement id="image">
                    <Image style={styles.logo}
                    source = { require('../../../assets/logo.png') }/>
                </SharedElement>
            </Animatable.View>
                     
            <Animatable.View
            style={{
                justifyContent:'flex-end',
                alignItems:'center',
                flex: 1,
                paddingBottom:height*0.2
            }}
            animation={Button_Anim}
            direction="normal"
            duration={600}
            useNativeDriver
            easing='ease'
            >
                <FAB 
                text="Começar" 
                height={PixelRatio.getPixelSizeForLayoutSize(25)} 
                width={PixelRatio.getPixelSizeForLayoutSize(65)}
                color={'#2B2D42'} 
                
                onPress={()=>
                    {
                        setLogo_Anim('slideOutUp')
                        setButton_Anim('slideOutDown')
                        navigation.navigate('MainScreen')       
                    }}
                    />
            </Animatable.View>
            
        </SafeAreaView>
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'image',animation: 'move',resize:'auto'}, 
]

export default mainscreen

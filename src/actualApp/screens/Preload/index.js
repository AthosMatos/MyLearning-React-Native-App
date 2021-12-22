import React,{useEffect} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logoContainer:
        {
            justifyContent: "center",
            alignItems: "center",
            marginTop:"0%",
            marginBottom:"40%",

        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            resizeMode:'contain'
        },
        newOldlogo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            resizeMode:'contain'
        },
    }
)

const Preload = ({navigation}) =>
{
    setTimeout(() => 
    {  
        navigation.reset({ routes:[{name: "StartScreen"} ]})

    }, 1000);

    return (
        <SafeAreaView style = {styles.Container}>

            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}/>   
            
            <SharedElement id="image" style={styles.logoContainer}>
                <Image style={styles.logo} 
                source = { 
                    require('../../../assets/logo.png') 
                    //require('../../../assets/newOldLogo.png') 
                    }/>
            </SharedElement>

            <SharedElement id="loading">
                <ActivityIndicator size="large" color="#EF233C"/>
            </SharedElement>

        </SafeAreaView>
    )
}
export default Preload
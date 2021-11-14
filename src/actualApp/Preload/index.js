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
            backgroundColor: "#FFF",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logoContainer:
        {
            justifyContent: "center",
            alignItems: "center",
            marginTop:"0%",
            marginBottom:"20%",

        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            resizeMode:'center'
        },
    }
)

export default ({navigation}) =>
{
    setTimeout(() => 
    {  
        //console.log("App Started!"); 
        navigation.reset({ routes:[{name: "FirstScreen"} ]})

    }, 100);

    return (
        <SafeAreaView style = {styles.Container}>

            <StatusBar
            backgroundColor = "#FFF"
            barStyle={'dark-content'}/>   

            <SharedElement id="image" style={styles.logoContainer}>
                <Image style={styles.logo} 
                source = { require('../../assets/logo.png') }/>
            </SharedElement>

            <ActivityIndicator size="large" color="#FF7605"/>

        </SafeAreaView>
    )
}
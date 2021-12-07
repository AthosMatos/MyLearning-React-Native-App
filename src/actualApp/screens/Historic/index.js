import React,{useEffect} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

const Historic = ({navigation}) =>
{

    return (
        <SafeAreaView style = {{backgroundColor:'#EDF2F4',flex:1}}>

            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}/>   
            
            

        </SafeAreaView>
    )
}
export default Historic
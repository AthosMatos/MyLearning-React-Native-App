import React,{useEffect,useCallback} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,BackHandler } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { ToogleInAll } from "../Main/CustomComponents/GeneralAnimation";

const Info = ({navigation}) =>
{
   

    useEffect(() => {

        async function loaddata()
        {
            //let data = await loadDeviceData('shrimpjson')
            //console.log('shrimpdata', data)
           // deleteDeviceData('shrimpjson')
        }

        loaddata()

      }, [])

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => 
            {
                ToogleInAll()
            }

            BackHandler.addEventListener('hardwareBackPress', onBackPress)

            return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        }, [])
    )

    return (
        <SafeAreaView style = {{backgroundColor:'#EDF2F4',flex:1}}>

            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}/>   

        </SafeAreaView>
    )
}
export default Info
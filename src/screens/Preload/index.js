import React from "react";
import {Image, StyleSheet, View,StatusBar} from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#FF7605",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logoContainer:
        {
            justifyContent: "center",
            alignItems: "center",
            marginTop:"-10%",
            marginBottom:"20%",

        },
        logo:
        {
            height:200,
            width:200,
            resizeMode:'center'
        },
    }
)

export default () =>
{
    const navigation = useNavigation()

    useEffect(()=>
    {
        const checkToken = async() =>
        {
            const token = await AsyncStorage.getItem('token')

            if(token)
            {
                
            }
            else 
            {
                navigation.reset({ routes:[{name: "CameraTest"} ]})
            }

        }
        checkToken()
    },[])

    return (
        <SafeAreaView>

            <StatusBar
            backgroundColor = "#FF7605"
            barStyle={'light-content'}/>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} 
                source = { require('../../assets/logo_white.png') }/>
            </View>

            <ActivityIndicator size="large" color="#FFFFFF"/>

        </SafeAreaView>
    )
}
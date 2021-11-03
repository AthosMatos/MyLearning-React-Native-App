import React from "react";
import { Image, StyleSheet, View,StatusBar } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import ApiFake from '../../Api/ApiFake'
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
            ApiFake.checkToken().then((token) => 
            {
                if(token != null)
                {
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'ShrimpScreen', params: {userData: token}}],
                    })
                }
                else 
                {
                    //navigation.reset({ routes:[{name: "LogSign"} ]})

                    let userData = 
                    {
                        id: 5,
                        name: "Test User",
                        avatar : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    }

                    navigation.reset({routes:[{name: "HomeScreen",params:{userData:userData}} ]})
                }
            })           
        }
        checkToken()
    },[])

    return (
        <SafeAreaView style = {styles.Container}>

            <StatusBar
            backgroundColor = "#FFF"
            barStyle={'dark-content'}/>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} 
                source = { require('../../assets/logo.png') }/>
            </View>

            <ActivityIndicator size="large" color="#FF7605"/>

        </SafeAreaView>
    )
}
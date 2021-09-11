import React from "react";
import {Image, StyleSheet, View,StatusBar} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#FF7605",
            alignItems: "center",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
           
            
        },
        logoContainer:
        {
            
            alignItems: "center",
            height:"50%"

        },
        logo:
        {
            height:50,
            width:50,
            resizeMode:'center',
            borderRadius:100,
            marginLeft:"75%",
        },
    }
)

export default ({route}) =>
{
    const UserData = route.params.userData
    //console.log(UserData)

    return (
        <SafeAreaView>

            <StatusBar
            backgroundColor = "#FF7605"
            barStyle={'light-content'}/>

            <SafeAreaView style={styles.Container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} 
                    source = { {uri: UserData.avatar} }/>
                </View>
                
            </SafeAreaView>

            

        </SafeAreaView>
    )
}
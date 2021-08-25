import React from "react";
import {Text,Image, StyleSheet, View} from 'react-native'
import {Container,LoadingIcon} from './styles'
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Logo from '../../assets/testlogo.svg'
import { useEffect } from "react";

const styles = StyleSheet.create(
    {
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
        }
    }
)

export default ()=>
{
    const navigation = useNavigation()


    useEffect(()=>
    {
        const checkToken = async()=>{
            const token = await AsyncStorage.getItem('token')

            if(token)
            {
                
            }
            else 
            {
                navigation.navigate('Login')
            }

        }
        checkToken()
    },[])



    return (
        <Container>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} 
                source = {require('../../assets/logo_white.png')}/>
            </View>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    )
}
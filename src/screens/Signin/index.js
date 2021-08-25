import React from "react";
import {Text,Image, StyleSheet, View} from 'react-native'
import {Container} from './styles'

const styles = StyleSheet.create(
    {
        logoContainer:
        {
            justifyContent: "center",
            alignItems: "center",
            marginTop:"50%",
            

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


    return (
        <Container>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} 
                source = {require('../../assets/logo.png')}/>
            </View>
        </Container>
    )
}
import React from "react";
import {Text,Image, StyleSheet, View} from 'react-native'
import {Container,
        InputArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold} from './styles'

const styles = StyleSheet.create(
    {
        logoContainer:
        {
           
            marginTop:"-10%",
            

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

            <InputArea>
              
                
                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda n ppossui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}
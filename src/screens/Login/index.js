import React, {useState} from "react";
import {Text,Image, StyleSheet, View, StatusBar} from 'react-native'
import {Container,
        InputArea,
        InputExternalArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold} from './styles'

import EmailInput from '../components/emailInput'
import PasswordInput from '../components/passwordInput'
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation,NavigationAction } from "@react-navigation/native";
import ApiFake from '../../Api/ApiFake'

const styles = StyleSheet.create(
    {
        ContainerS:
        {
            backgroundColor: "#FF7605",
            flex: 1,
            alignItems:"center",
        },  

        TXTContainer:
        {         
            marginVertical: "1%",
            marginLeft:"-10%",
            justifyContent: "center",
            width: "80%",
          
        },
        txt:
        {
            fontSize: 32,
            color: "#FFFFFF",
            fontWeight:"700"
        },
        inputStyle:
        {
            marginTop: "15%",
        },
        ExternalAreaContainer:
        {
            marginTop: "20%",
            width: "100%",
            flex:1,
            alignItems:"center",
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        Entrar_B_txt:
        {
            fontSize: 20,
            fontWeight: "700"
        },
        Entrar_B:
        {
            marginTop: "10%",
        },
        EsqueceuSenha:
        {
            marginLeft:"55%",
            marginTop:"0%",
            marginBottom:"0%",
        },
        EsqueceuSenhaTxt:
        {
            color:"#BA82FF"
        },
    }
)

export default ()=>
{
    const [emailField,setEmailField] = useState('')
    const [passwordField,setPasswordField] = useState('')

    const navigation = useNavigation()

    function GoToSignin()
    {
        navigation.navigate('Signin')
    }

    function LoginHandler()
    {
        if(emailField != '' && passwordField != '')
        {
            ApiFake.signIn(emailField,passwordField).then((userData) =>
            {
                //console.log('LOG USERID: ' + value.id)
            
                if (userData == 0) 
                {
                    alert('Conta nao encontrada') 
                }
                else 
                {
                    alert('Conta encontrada')
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'HomeScreen', params: {userData: userData}}],
                    })
                }
            })
        }
        else alert('Preencha todos os campos')
    }

    return (
        <SafeAreaView 
        style={styles.ContainerS}>

            <StatusBar
            backgroundColor = "#FF7605"
            barStyle = {'light-content'}/>
            
            <View style={styles.TXTContainer}>
                <Text style={styles.txt}>Entrar</Text>
            </View>

            <SafeAreaView style={styles.ExternalAreaContainer}>
                <InputArea style={styles.inputStyle}>

                    <EmailInput 
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                    />

                    <PasswordInput 
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    />

                    <SignMessageButton style={styles.EsqueceuSenha}>
                        <SignMessageButtonText style={styles.EsqueceuSenhaTxt}>Esqueceu a Senha?</SignMessageButtonText>
                    </SignMessageButton>

                    <CustomButton style={styles.Entrar_B} onPress={LoginHandler}>
                        <CustomButtonText style={styles.Entrar_B_txt}>Entrar</CustomButtonText>
                    </CustomButton>

                </InputArea>

                <SignMessageButton onPress={GoToSignin}>
                    <SignMessageButtonText>Ainda n ppossui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>

            </SafeAreaView>      

        </SafeAreaView>
    )
}
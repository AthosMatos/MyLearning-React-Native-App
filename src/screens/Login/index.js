import React from "react";
import {Text,Image, StyleSheet, View} from 'react-native'
import {Container,
        InputArea,
        InputExternalArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold} from './styles'

import EmailInput from '../../components/emailInput'
import PasswordInput from '../../components/passwordInput'

const styles = StyleSheet.create(
    {
        TXTContainer:
        {         
            marginVertical: "8%",
            justifyContent: "center",
            width: "80%",
          
        },
        txt:
        {
            fontSize: 30,
            color: "#FFFFFF",
        },
        inputStyle:
        {
            marginTop: "15%",
        },
    }
)

export default ()=>
{


    return (
        <Container>
            <View style={styles.TXTContainer}>
                <Text style={styles.txt}>Entrar</Text>
            </View>

            <InputExternalArea>
                <InputArea style={styles.inputStyle}>
                    <EmailInput />
                    <PasswordInput />
                
                    <Text style={styles.EsqueceuSenha}>Esqueceu a senha?</Text>

                    <CustomButton>
                        <CustomButtonText>LOGIN</CustomButtonText>
                    </CustomButton>
                
                </InputArea>

                <SignMessageButton>
                    <SignMessageButtonText>Ainda n ppossui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>



            </InputExternalArea>
            

            

        </Container>
    )
}
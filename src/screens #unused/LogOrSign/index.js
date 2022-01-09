import React, {useState, useEffect} from "react";
import {Image, StyleSheet, View, StatusBar, Animated, BackHandler, Dimensions} from 'react-native'
import {Container,
        InputArea,
        InputExternalArea,
        CustomButton,
        CustomButtonText} from './styles'
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create(
    {
        LogoContainer:
        {         
            justifyContent: "center",
            marginTop: "-30%",
            marginBottom: "20%",
        }, 
        logo:
        {
            height:200,
            width:200,
            resizeMode:'center'
        },
        inputStyle:
        {
            width:"100%",
            marginTop: "45%",
        },
        Entrar_B:
        {
            backgroundColor: "#7605FF"
        },
        Cadastrar_B:
        {
            backgroundColor: "#FFFFFF"
        },
        Cadastrar_B_txt:
        {
            color: "#000000",
            fontSize: 20,
            fontWeight: "600"
        },
        Entrar_B_txt:
        {
            fontSize: 20,
            fontWeight: "600"
        },
        Anonimo_Container:
        {
            width: "32%",
            marginLeft: "65%",
            marginTop: "5%"
        },
        Anonimo_B:
        {
            backgroundColor: "#000000",
            height: "60%",
        },
        Anonimo_B_txt:
        {
            fontSize: 14,
            fontWeight: "600",
    
        },
    }
)

export default ()=>
{
    const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0]
    const value2 = useState(new Animated.ValueXY({x: 0, y: 0}))[0]

    const backAction = () => {
        
        Animated.parallel([

            Animated.timing(value, {
                toValue: {x: 0, y: 0 },
                duration: 800,
                useNativeDriver: false }),
            Animated.timing(value2, {
                toValue: {x: 0, y: 0 },
                duration: 800,
                useNativeDriver: false }),
        ]).start()
    }

    const move = (screen) =>
    {
        Animated.parallel([

            Animated.timing(value, {
                toValue: {x: 0, y: (Dimensions.get('window').height/2)},
                duration: 800,
                useNativeDriver: false
            }),
            Animated.timing(value2, {
                toValue: {x: 0, y: -(Dimensions.get('window').height/2) },
                duration: 800,
                useNativeDriver: false
            }),

        ]).start(({finished}) =>
        {
            navigation.navigate(screen)
        })
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction)
    })

    const navigation = useNavigation()

    function GoToLogin()
    { 
        move("Login")
    }
    function GoToSignin()
    {
        move("Signin")
    }

    return (
        <Container>
            <StatusBar
            backgroundColor = "#FFFFFF"
            barStyle={'dark-content'}/>

            <Animated.View style={value2.getLayout()}>     
                <InputArea style={styles.Anonimo_Container}>
                    <CustomButton style={styles.Anonimo_B} onPress={() => {navigation.navigate('CameraTest')}}>
                        <CustomButtonText style={styles.Anonimo_B_txt}>Anonimo</CustomButtonText>
                    </CustomButton>
                </InputArea>   
            </Animated.View>

            <Animated.View style={value2.getLayout()}> 
                <View style={styles.LogoContainer}>
                <Image style={styles.logo} 
                    source = {require('../../assets/logo.png')}/>
                </View>
            </Animated.View>

            <Animated.View style={value.getLayout()}>    
                <InputExternalArea>
                    <InputArea style={styles.inputStyle}>
                        <CustomButton style={styles.Entrar_B} onPress={GoToLogin}>
                            <CustomButtonText style={styles.Entrar_B_txt}>Entrar</CustomButtonText>
                        </CustomButton>

                        <CustomButton style={styles.Cadastrar_B} onPress={GoToSignin}>
                            <CustomButtonText style={styles.Cadastrar_B_txt}>Cadastrar</CustomButtonText>
                        </CustomButton>
                    
                    </InputArea>

                </InputExternalArea>
            </Animated.View>
        </Container>
    )
}
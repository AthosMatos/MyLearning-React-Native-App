import React,{useEffect,useCallback} from "react";
import { StyleSheet, View,StatusBar,PixelRatio,BackHandler,useWindowDimensions, ScrollView,Text,Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { height, width } from "../../Main/styles";
import { Card } from "react-native-paper";
import { styles } from "../styles"; 

const WhatDoIneed = () =>
{
    const ImageSize = 0.5
    return(
        <>
            <Text style={styles.TitleText}>Do que eu preciso para começar a usar?</Text>

            <View style={{alignItems:'center',marginVertical:PixelRatio.getPixelSizeForLayoutSize(4)}}>
                <Image source={require('../imagens/mobile-icon.png')}
                style={styles.SampleImage}
                />
                <Text style={styles.normalText}>Dispositivo android com camêra</Text>
            </View>

            <View style={{alignItems:'center',marginVertical:PixelRatio.getPixelSizeForLayoutSize(4)}}>
                <Image source={require('../imagens/logo.png')}
                style={styles.SampleImage}
                />
                <Text style={styles.normalText}>Aplicativo PotiQuality instalado</Text>
            </View>

            <View style={{alignItems:'center',marginVertical:PixelRatio.getPixelSizeForLayoutSize(4)}}>
                <Image source={require('../imagens/PSP.jpg')}
                style={{width: 684*((width*ImageSize)/1000), height: 503*((width*ImageSize)/1000)
                }}
                />
                <Text style={[styles.normalText, {textAlign:'center'}]}>
                    {"PotiMarket Shrimp Pad (PSP):\n" +
                    "Superfície onde os camarões serão posicionados."
                    }
                </Text>
            </View>      
           
        </>
    )
}
export default WhatDoIneed
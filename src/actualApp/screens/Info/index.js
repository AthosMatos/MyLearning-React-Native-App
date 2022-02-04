import React,{useEffect,useCallback} from "react";
import { StyleSheet, View,StatusBar,PixelRatio,BackHandler,useWindowDimensions, ScrollView,Text,Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { ToogleInAll } from "../Main/CustomComponents/GeneralAnimation";
import { height } from "../Main/styles";
import { Card } from "react-native-paper";
import WhatDoIneed from "./CustomComponents/WhatDoIneed";
import { styles } from "./styles";
import ScreensSamples from "./CustomComponents/ScreensSamples";
import DescriptionScreens from "./CustomComponents/DescriptionScreens";

const Info = ({navigation}) =>
{
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => 
            {
                ToogleInAll()
            }

            BackHandler.addEventListener('hardwareBackPress', onBackPress)

            return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        }, [])
    )

    return (
        <ScrollView style = {{backgroundColor:'#fff',flex:1}}>

            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}
            />   
    	    <View style=
            {{
                flexDirection:'row',
                backgroundColor:'#EDF2F4',   
            }}>
                <View style={{
                    alignItems:'flex-start',
                    justifyContent:'center',
                    marginHorizontal:PixelRatio.getPixelSizeForLayoutSize(5),
                    marginVertical:PixelRatio.getPixelSizeForLayoutSize(3),
                    }}>
                    <Image source={require('./imagens/logo.png')} 
                    style={{
                        height:PixelRatio.getPixelSizeForLayoutSize(30),
                        width:PixelRatio.getPixelSizeForLayoutSize(30),
                    }}
                    />
                </View>
            
                <View style={{
                    flex:1,alignItems:'flex-end',
                    justifyContent:'center',
                    //borderWidth:2,
                    //borderColor:'green',
                    }}>
                    <Text style={styles.headerText}>PotiTutorial</Text>
                </View>
            
            </View>

            <Text style={styles.normalText}>
                {"Se você está lendo este tutorial é porque agora você faz parte do clube da PotiMarket." +
                "Este documento apresentará um tutorial sobre o uso dessa ferramenta, mostrando um passo a passo da navegação entre suas telas (interface gráfica).\n" + 
                "Muito obrigado pela confiança e esperamos que nossa ferramenta facilite seu dia a dia e lhe deixe completamente informado sobre o que você está prestes a consumir."}
            </Text>
            
            <WhatDoIneed/>

            <Text style={styles.TitleText}>Antes de tirar a foto</Text>
            
            <Text style={[styles.normalText]}>
                    {'•Busque uma posição/local com iluminação indireta e suficiente para captura de foto dos camarões dispostos no PSP;\n\n' +
                    '•Limpe e retire o excesso de água sobre o PSP e coloque-o em uma superfície plana.'
                    }
            </Text>

            <ScreensSamples/>

            <DescriptionScreens/>

            <View style=
            {{
                flexDirection:'row',
                backgroundColor:'#ed7d14',   
            }}>
            
                <View style={{
                    flex:1,alignItems:'flex-end',
                    justifyContent:'center',
                    //borderWidth:2,
                    //borderColor:'green',
                    }}>
                    <Text style={styles.SmallnormalText}>© Copyright PotiQuality - 2022</Text>
                </View>
            
            </View>
        </ScrollView>
    )
}
export default Info

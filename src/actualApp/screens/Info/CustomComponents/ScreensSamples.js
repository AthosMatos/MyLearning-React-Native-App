import React from "react";
import { PixelRatio } from "react-native";
import {View,Text,Image } from 'react-native'
import { styles } from "../styles"; 


const ScreensSamples = () =>
{
    return(
        <>
            <Text style={styles.TitleText}>Telas do app</Text>

            <View style={styles.AppScreenImageContainer}>
                <View>
                    <Image source={require('../imagens/telas/1.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>1 - Inicial</Text>
                </View>
                <View>
                    <Image source={require('../imagens/telas/2.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>2 - Principal com PSP</Text>
                </View>
            
            </View>

            <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={require('../imagens/telas/3.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>3 - Principal com imagem</Text>
                </View>
                <View>
                    <Image source={require('../imagens/telas/4.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>{"4 - Principal com imagem e\n"} resultados gerais</Text>
                </View>
            
            </View>

            <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={require('../imagens/telas/5.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>{"5 - Principal com imagem\n"}e resultados especificos</Text>
                </View>
                <View>
                    <Image source={require('../imagens/telas/6.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>6 - Escolher moeda</Text>
                </View>
            
            </View>

            <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={require('../imagens/telas/7.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>7 - Histórico</Text>
                </View>
                <View>
                    <Image source={require('../imagens/telas/8.jpeg')}
                        style={styles.AppScreenImage}
                    />
                    <Text style={styles.TextUnderImages}>8 - Histórico mensal</Text>
                </View>
            
            </View>
        </>
    )
}
export default ScreensSamples
import React,{useEffect,useCallback} from "react";
import { StyleSheet, View,StatusBar,PixelRatio,BackHandler,useWindowDimensions, ScrollView,Text,Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { ToogleInAll } from "../../Main/CustomComponents/GeneralAnimation";
import { height, width } from "../../Main/styles";
import { Card } from "react-native-paper";
import { styles } from "../styles"; 

const DescriptionScreens = () =>
{
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    const ImageSize = 0.5
    return(
        <>
            <Text style={styles.TitleText}>Descrição das telas do app</Text>

            <Text style={styles.SmallerTitleText}>1 - Inicial</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>Primeira tela do aplicativo. Clique em 'Começar' para iniciar o uso da ferramenta PotiQuality.</Text>

            <Text style={styles.SmallerTitleText}>2 - Principal com PSP</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "Composta por 5 elementos gráficos de interface:\n"}</Text>
            <Text style={[styles.normalText]}>
                <B>•( i ):</B>
                <Text>{' Clicando nele aparece este tutorial\n\n'}</Text>
                <B>•( Escolher Moeda ):</B>
                <Text>{" Clicando nele aparece tela para escolher moeda que será colocada no centro do PSP.\n\n"}</Text>
                <B>•( Tirar Foto ):</B>
                <Text>{" Clicando nele aparece tela para registrar as imagens. Uma vez que a foto é aceita, aparecerá a tela principal com imagem.\n\n"}</Text>
                <B>•( PSP ):</B>
                <Text>{" Desenho esquemático do PSP contendo camarões. Depois de tirar a foto/imagem, esta região será substituída pela imagem registrada.\n\n"}</Text> 
            </Text>
            
            <Text style={styles.SmallerTitleText}>3 - Principal com imagem</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "Uma vez que a foto foi tirada, o desenho esquemático do PSP na tela principal será substituído pela foto capturada.\n" +
            "Composta por 2 elementos gráficos de interface:\n"}</Text>
            <Text style={[styles.normalText]}>
                <B>•( Escolher Moeda ):</B>
                <Text>{' Clicando nele você será direcionado para a tela 6 - Escolher Moeda \n\n'}</Text>
                <B>•( Enviar Foto ):</B>
                <Text>{" Clicando nele começará o processo de análise da imagem que será executado na nuvem.\n"}</Text>
            </Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>
                {"Durante o processo, a ferramenta informará ao usuário pelos diferentes estágios: ENVIANDO, ANALISANDO, PRONTO!\n"+
                "Uma vez pronta a análise, clique na imagem para apresentar a tela de resultados."}</Text>
            
            <Text style={styles.SmallerTitleText}>4 - Principal com imagens e resultados gerais</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "Composta por 3 elementos gráficos de interface:\n"}</Text>
            <Text style={[styles.normalText]}>
                <B>•( Geral ):</B>
                <Text>{' Esse elemento vem selecionado automaticamente e o mesmo dispõe as características gerais da imagem processada, como data e hora que foi tirada, o total de camarões detectados e etc.\n\n'}</Text>
                <B>•( Camarão ):</B>
                <Text>{" Clicando nele você será direcionado para a tela 5 - Principal com imagem e resultados específicos.\n\n"}</Text>
                <B>•( PDF ):</B>
                <Text>{"  Clicando nele será iniciado o download de um documento pdf contendo todas as informações obtidas pela ferramenta, tanto gerais, quanto específicas.\n"}</Text>
            </Text>
            
            <Text style={styles.SmallerTitleText}>5 - Principal com imagem e resultados específicos</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "Se você deslizar para a direita você verá os dados específicos do camarão contornado por uma borda azul na imagem exibida.\n" +
            "Você poderá continuar deslizando para a esquerda ou para a direita para visualizar os dados de todos os outros camarões detectados.\n"}</Text>
            
            <Text style={styles.SmallerTitleText}>6 - Escolher moeda</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "Tela com um carrossel de imagens com moedas. Deslize para esquerda ou para direita até centralizar a moeda que será utilizada e clique nela.\n" +
            "A seleção da moeda é obrigatória para a análise da imagem.\n"}</Text>
            
            <Text style={styles.SmallerTitleText}>7 - Histórico</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "O histórico nos ajuda a visualizar as fotos tiradas anteriormente e os dados extraídos delas.\n" +
            "Para visitar o histórico vá na tela principal e clique em 'Histórico'.\n" + 
            "Após clicar no botão, aparecerá o histórico com as imagens tiradas agrupadas pelo mês em que foram tiradas.\n" 
            }</Text>

            <Text style={styles.SmallerTitleText}>8 - Histórico mensal</Text>
            <Text style={[styles.normalText,{fontWeight:'bold'}]}>{
            "Selecione o mês desejado. Em seguida, aparecerá uma nova tela com todas as imagens tiradas nesse mês. Assim, clicando em uma das imagens dispostas você obterá as informações dos camarões novamente. Viu como é fácil?\n"
            }</Text>
        </>
    )
}
export default DescriptionScreens
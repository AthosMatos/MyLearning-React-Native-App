import React from "react";
import { Image, StyleSheet, View,StatusBar,Button,PixelRatio,Dimensions,TouchableOpacity ,Text} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import FAB from '../Components/FAB'

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#FFF",
            flex: 1,
        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            transform:[{scale:1.1}],
            resizeMode:'center'
        },
        Container2:
        {
            alignItems: "center",
            flex: 1,
        },
        logoContainer:
        {
            alignItems:'center',
            position:'absolute',
            top:(Dimensions.get('window').height)*0.2,
        },
    }
)

const mainscreen = ({navigation}) =>
{  
    return (
        <SafeAreaView style = {styles.Container}>
            
            <StatusBar
            backgroundColor = "#FFF"
            barStyle={'dark-content'}/>

            <View style={styles.Container2}>     
                <SharedElement id="image" style={styles.logoContainer}>
                    <Image style={styles.logo} 
                    source = { require('../../assets/logo.png') }/>
                </SharedElement>
                     
                    
                <SharedElement id="button" style={{  
                alignItems:'center',
                position:'absolute',
                top:(Dimensions.get('window').height)*0.68,}}
                >          
                    <FAB text="Começar" onPress={()=>{navigation.navigate('MainScreen')}}/>
                </SharedElement>

            </View>

        </SafeAreaView>
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'image',animation: 'move',resize:'auto'},
    {id: 'button',animation: 'fade',resize:'auto'},
]



export default mainscreen

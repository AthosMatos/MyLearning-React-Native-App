import React, { useEffect, useState} from "react";
import { StatusBar,View} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { useSharedValue,useAnimatedStyle,withSpring } from "react-native-reanimated";
import { styles,height } from "./styles";
import Animated_Button from "./CustomComponents/Animated_Button";
import Image from 'react-native-fast-image'

const mainscreen = ({navigation}) =>
{
    return (
        <SafeAreaView style = {styles.Container}>
            
            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}/>
        
            <SharedElement id="image"  
            style={[{
                alignItems:'center',
                flex: 1,
                paddingTop: height*0.1,
            },]}
            >
                <Image style={styles.logo}
                source = { 
                    //require('../../../assets/logo.png') 
                    require('../../../assets/newOldLogo.png') 
                    }/>
            </SharedElement>
            
            <Animated_Button navigation={navigation} />
            
        </SafeAreaView>
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'image',animation: 'move',resize:'auto'}, 
]

export default mainscreen

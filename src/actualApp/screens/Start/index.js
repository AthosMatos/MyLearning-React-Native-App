import React from "react";
import { StatusBar} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { styles } from "./styles";
import Animated_Button from "./CustomComponents/Animated_Button";
import Image from 'react-native-fast-image'
import { TerciaryColor } from "../../../Defaults";

const startsreen = ({navigation}) =>
{
    return (
        <SafeAreaView style = {styles.Container}>
             
            <StatusBar barStyle="dark-content" backgroundColor={TerciaryColor}/>

            <SharedElement id="image">
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

startsreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'image',animation: 'move',resize:'auto'}, 
]

export default startsreen

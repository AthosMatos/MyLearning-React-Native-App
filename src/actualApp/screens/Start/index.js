import React, { useCallback } from "react";
import { StatusBar,View} from 'react-native'
import { styles } from "./styles";
import Animated_Button from "./CustomComponents/Animated_Button";
import { TerciaryColor } from "../../../Defaults";
import { useFocusEffect } from "@react-navigation/native";
import SharedElement_Logo from "./CustomComponents/SharedElement_Logo";

const startsreen = () =>
{
    useFocusEffect(
        useCallback(() => {

            StatusBar.setBackgroundColor(TerciaryColor,true)
            StatusBar.setBarStyle("dark-content",true)
           
        }, [])
    )

    return (
        <View style = {styles.Container}>

            <SharedElement_Logo/>
            
            <Animated_Button />

        </View>
    )
}

startsreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'image',animation: 'move',resize:'auto'}, 
]

export default startsreen

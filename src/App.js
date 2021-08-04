
import React from "react";
import {View,Text,StyleSheet} from 'react-native'

import Primeiro from './components/Primeiro'
import Component, {Comp1,Comp2} from "./components/multi"
import MinMax from "./components/minmax"

function App()
{
    console.log('teste')
    
    return (
        <View style={style.App}>
            <MinMax minimu={3} maximu={20} />
            <Component/>
            <Comp1/>
            <Comp2/>
            <Primeiro/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        App:
        {
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1
        }
    }
)

export default App
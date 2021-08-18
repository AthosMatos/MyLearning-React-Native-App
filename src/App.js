import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import MainStack from './screens/Mainstack'

export default () =>
{
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}
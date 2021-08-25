import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import UserContextProvider from './contexts/UserContext'
import MainStack from './screens/Mainstack'

export default () =>
{
    return (
        <UserContextProvider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </UserContextProvider>
    )
}
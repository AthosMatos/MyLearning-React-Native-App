import React from "react";
import {NavigationContainer} from '@react-navigation/native'

import UserContextProvider from './contexts/UserContext'
import MainStack from './stack'

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
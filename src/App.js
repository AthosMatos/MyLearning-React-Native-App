import React from "react";
import {NavigationContainer} from '@react-navigation/native'

import UserContextProvider from './contexts/UserContext'
import MainStack from './stack'
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

export default () =>
{
    return (
        <UserContextProvider>
            <NavigationContainer>
            <OrientationLocker
            orientation={PORTRAIT}
            />
                <MainStack/>
            </NavigationContainer>
        </UserContextProvider>
    )
}
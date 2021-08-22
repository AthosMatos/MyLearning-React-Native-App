import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Preload from './Preload'
import Signin from './Signin'
import Login from './Login'

const Stack = createNativeStackNavigator()

export default () =>
{
    
    return (
        <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Login" component={Login} />            
            

        </Stack.Navigator>
    )
}
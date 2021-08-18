import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Preload from './Preload'

const Stack = createNativeStackNavigator()

export default () =>
{
    
    return (
        <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
        
        >
            <Stack.Screen name="Preload" component={Preload} />
        </Stack.Navigator>
    )
}
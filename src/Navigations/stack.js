import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Preload from '../screens/Preload'
import Signin from '../screens/Signin'
import Login from '../screens/Login'
import LogORSign from '../screens/LogOrSign'
import CameraTest from '../screens/CameraTest'
import HomeScreen from '../screens/HomeScreen'
import ShrimpScreen from '../screens/shrimpcontour'

const Stack = createNativeStackNavigator()

export default () =>
{
    return (
        <Stack.Navigator
        initialRouteName="Preload">
            
            <Stack.Screen 
            name="Preload" 
            component={Preload} 
            options=
            {{
                headerShown:false,
            }}
            />

            <Stack.Screen
            name="LogSign" 
            component={LogORSign} 
            options=
            {{
                headerShown:false,
            }} 
            />   

            <Stack.Screen 
            name="Signin" 
            component={Signin} 
            options=
            {{
                headerShadowVisible:false,
                headerTitle:"",
                headerStyle:
                {
                    backgroundColor:"#FF7605"
                },
                headerTintColor: "#FFFFFF"
            }}  
            />

            <Stack.Screen 
            name="Login" 
            component={Login} 
            options=
             {{
                headerShadowVisible:false,
                headerTitle:"",
                headerStyle:
                {
                    backgroundColor:"#FF7605"
                },
                headerTintColor: "#FFFFFF"
             }}
            />   

            <Stack.Screen name="CameraTest" component={CameraTest} />

            <Stack.Screen name="HomeScreen" component={HomeScreen} 
             options=
             {{
               headerShown: false,
             }}/>
             <Stack.Screen name="ShrimpScreen" component={ShrimpScreen} 
             options=
             {{
               headerShadowVisible:false,
               headerTitle:"",
             }}/>
            
        </Stack.Navigator>
    )
}
import React from "react"

import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";


import Preload from '../actualApp/Preload'
import Signin from '../screens/Signin'
import Login from '../screens/Login'
import LogORSign from '../screens/LogOrSign'
import CameraTest from '../actualApp/CameraTest'
import HomeScreen from '../screens/HomeScreen'
import ShrimpScreen from '../screens/shrimpcontour'
import FirstScreen from '../actualApp/Start'
import MainScreen from '../actualApp/Main'

enableScreens()

const Shared_Stack = createSharedElementStackNavigator()

const options = {
  headerShown:false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    };
  }
};
export default () =>
{
    return (
        <Shared_Stack.Navigator
        initialRouteName="Preload">
            
            <Shared_Stack.Screen
            name="Preload" 
            component={Preload}
            options={()=>options}
            />

            <Shared_Stack.Screen
            name="FirstScreen" 
            component={FirstScreen}
            options={()=>options}
            />

            <Shared_Stack.Screen
            name="MainScreen" 
            component={MainScreen}
            options={()=>options}
            />

            <Shared_Stack.Screen
            name="CameraTest" 
            component={CameraTest}
            options={()=>options}
            />
            {/*
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
            */}
            
        </Shared_Stack.Navigator>
    )
}
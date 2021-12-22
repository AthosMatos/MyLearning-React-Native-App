import React from "react"

import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";


import Preload from './actualApp/screens/Preload'
import Signin from './screens/Signin'
import Login from './screens/Login'
import LogORSign from './screens/LogOrSign'
import HomeScreen from './screens/HomeScreen'
import ShrimpScreen from './screens/shrimpcontour'
import StartScreen from './actualApp/screens/Start'
import MainScreen from './actualApp/screens/Main'
import Info from './actualApp/screens/Info'
import Historic from './actualApp/screens/Historic'
import ShrimpInfo from './actualApp/screens/shrimpcontour'
import HistoricOpenMonth from './actualApp/screens/Historic/HistoricOpenMonth'

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
            name="StartScreen" 
            component={StartScreen}
            options={()=>options}
            />

            <Shared_Stack.Screen
            name="MainScreen" 
            component={MainScreen}
            options={()=>options}
            />

            <Shared_Stack.Screen
            name="Info" 
            component={Info}
            options={()=>options}
            />
             <Shared_Stack.Screen
            name="Historic" 
            component={Historic}
            options={()=>options}
            />
             <Shared_Stack.Screen
            name="ShrimpInfo" 
            component={ShrimpInfo}
            options={()=>options}
            />
             <Shared_Stack.Screen
            name="HistoricOpenMonth" 
            component={HistoricOpenMonth}
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
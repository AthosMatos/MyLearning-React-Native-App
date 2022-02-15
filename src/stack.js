import React from "react"

import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Preload from './actualApp/screens/Preload'
import StartScreen from './actualApp/screens/Start'
import MainScreen from './actualApp/screens/Main'
import Info from './actualApp/screens/Info'
import Historic from './actualApp/screens/Historic'
import ShrimpInfo from './actualApp/screens/shrimpcontour'
import HistoricOpenMonth from './actualApp/screens/Historic/HistoricOpenMonth'
import screentest from "./actualApp/screens/screentest";
import camera from "./actualApp/Components/camera";

import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from "react-native";

EStyleSheet.build({})
enableScreens()

const Shared_Stack = createSharedElementStackNavigator()

const options = {
  headerShown:false,
  cardStyleInterpolator: ({ current: { progress } }) => 
  {
    return {
      cardStyle: {
        opacity: progress
      }
    }
  },

}

export default () =>
{
    return (
        <Shared_Stack.Navigator
        initialRouteName="Preload"
        screenOptions={()=>options}
        //detachInactiveScreens
        >
          <Shared_Stack.Screen
          name="Preload" 
          component={Preload}
          />

          <Shared_Stack.Screen
          name="StartScreen" 
          component={StartScreen}
          />

          <Shared_Stack.Screen
          name="MainScreen" 
          component={MainScreen}
          />

          <Shared_Stack.Screen
          name="Info" 
          component={Info}
          />
            <Shared_Stack.Screen
          name="Historic" 
          component={Historic}
          />
            <Shared_Stack.Screen
          name="ShrimpInfo" 
          component={ShrimpInfo}
          />
            <Shared_Stack.Screen
          name="HistoricOpenMonth" 
          component={HistoricOpenMonth}
          />
          <Shared_Stack.Screen
          name="camera" 
          component={camera}
          />
            <Shared_Stack.Screen
          name="screentest" 
          component={screentest}
          />

        </Shared_Stack.Navigator>
    )
}
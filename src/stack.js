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
        //detachInactiveScreens
        >
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

        </Shared_Stack.Navigator>
    )
}
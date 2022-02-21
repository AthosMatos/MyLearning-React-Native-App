import React,{useCallback} from "react";
import { StatusBar, InteractionManager, View} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { AfterInteractions } from "react-native-interactions";
import Placeholder from "../../Components/Animated_Placeholder/Animated_Placeholder";
import { PrimaryColor } from "../../../Defaults";
import CustomHeader from "./CustomComponents/CustomHeader";
import ImageList from "./CustomComponents/ImagesList";

const Historic = ({navigation}) =>
{
    useFocusEffect(
        useCallback(() => {

            InteractionManager.runAfterInteractions(()=>
            {
                StatusBar.setBackgroundColor(PrimaryColor,true)
                StatusBar.setBarStyle('light-content',true)
            })
       
            return () =>
            {

            }
            
        }, [])
    )


    return (

       <Placeholder>
           <View style = {{backgroundColor:'#EDF2F4',flex:1}}>
                
                <CustomHeader/>
                <ImageList/>   
                                            
            </View>
       </Placeholder>

            
     
    )
}
export default Historic
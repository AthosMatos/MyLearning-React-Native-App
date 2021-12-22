import React,{useEffect,useState,useCallback} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,FlatList,TouchableOpacity,Text, Dimensions,TouchableHighlight } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { fetchAllItems } from "../../AsyncStorageHelper";
import { Divider } from "react-native-elements";
import { TouchableHighlightBase } from "react-native";



const HistoricOpenMonth = ({navigation,route}) =>
{
    useEffect(() => {
       
    
      }, [])

    const Photos = () =>
    {
        return (
            <>
                {route.params.dados.map((item) => 
                {
                //console.log(item)
                return (  
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('ShrimpInfo',{
                            photoname: item.Serverimage,
                            dataname:item.NewName,
                            imageuri:item.uri,
                            imageW:item.imageW,
                            imageH:item.imageH
                        })
                    }}
                    key={item.NewName}
                    >
                        <Image style={{ width: PixelRatio.roundToNearestPixel(80), height: PixelRatio.roundToNearestPixel(80) }} source={{ uri: item.uri }} />
                    </TouchableOpacity>
                )
                })}
            </>
        )
        
    }
    return (
        <SafeAreaView style = {{backgroundColor:'#EDF2F4',flex:1}}>

            <StatusBar
            backgroundColor = "#EF233C"
            barStyle={'dark-content'}/>

            <View style={{backgroundColor:'#EF233C'}}>
                <Text
                style=
                {{
                    fontSize:PixelRatio.roundToNearestPixel(20),
                    margin:PixelRatio.roundToNearestPixel(20),
                    fontWeight:'normal',
                    color:'#EDF2F4'
                }}>
                    {route.params.mes}
                </Text>   
            </View>
            
            
            <View style={{margin:PixelRatio.roundToNearestPixel(2)}}>
                <View 
                style={{flexDirection:'row',flexWrap:'wrap',
                //borderColor:'#000',borderWidth:1,
                justifyContent:'space-between' 
                }}>
                
                    <Photos/>
                    
                </View>
            </View>
            
           
          
            
           
        </SafeAreaView>
    )
}
export default HistoricOpenMonth
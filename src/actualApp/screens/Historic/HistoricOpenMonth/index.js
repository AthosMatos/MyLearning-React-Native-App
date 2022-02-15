import React, { useCallback, useEffect,useState } from "react";
import { View,StatusBar,PixelRatio,FlatList,TouchableOpacity,Text, Dimensions,TouchableHighlight } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Image from 'react-native-fast-image'
import ImgPressable from "../ImgPressable";
import { LogBox } from 'react-native';
import { AfterInteractions } from "react-native-interactions";
import Animated_Placeholder from "../../../Components/Animated_Placeholder/Animated_Placeholder";
import { SecondaryColor } from "../../../../Defaults";
import { useFocusEffect } from "@react-navigation/native";

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
])

const HistoricOpenMonth = ({navigation,route}) =>
{
    const [shrimpdata,setshrimpdata] = useState([])
    const [remount,setremount] = useState(true)

    useFocusEffect(
        useCallback(() => {

            setremount(true) 
        
            return () =>{
            
                setremount(false)
            }
        }, [])
    )

    useEffect(()=>{
        if(shrimpdata.length)
        {
            console.log(shrimpdata)
            route.params.setshrimpdata(shrimpdata)
        }
    },[shrimpdata])

    useEffect(()=>{
        console.log(route.params.shrimpdata)
        setshrimpdata(route.params.shrimpdata)
    },[])

    const renderItem = ({item,index}) =>
    {
        let imagesize = (Dimensions.get('window').width-PixelRatio.roundToNearestPixel(8))/4
        

        return (
            <ImgPressable
            onPress={()=>
                {
                    navigation.navigate('ShrimpInfo',{
                        photoname: item.Serverimage,
                        dataname:item.NewName,
                        imageuri:item.uri,
                        imageW:item.imageW,
                        imageH:item.imageH
                    })
                }}
            
            item={item} 
            itemsize={imagesize}
            activeDelete = {true}
            setshrimpdata={setshrimpdata}
            index={parseInt(item.month)-1}
            index2={index}
            margin={PixelRatio.roundToNearestPixel(1)}
            />
        )
    }

    return (
        <AfterInteractions placeholder={<Animated_Placeholder/>}>
            
            <SafeAreaView style = {{backgroundColor:'#EDF2F4',flex:1}}>

                {remount&& <StatusBar
                backgroundColor = {SecondaryColor}
                barStyle={'ligth-content'}/>}

                <View style={{backgroundColor:SecondaryColor}}>
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
                
                <View 
                style={{
                //borderColor:'#000',borderWidth:1,
                alignItems:'baseline'
                }}
                >
                    <FlatList
                        data={route.params.dados}
                        renderItem={renderItem}
                        keyExtractor={item => item.NewName}
                        //horizontal
                        numColumns={4}
                        extraData={shrimpdata}
                        />
                    
                </View>
                
            </SafeAreaView>

        </AfterInteractions>
    )
}
export default HistoricOpenMonth
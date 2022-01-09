import React, { useEffect,useState } from "react";
import { View,StatusBar,PixelRatio,FlatList,TouchableOpacity,Text, Dimensions,TouchableHighlight } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Image from 'react-native-fast-image'
import ImgPressable from "../ImgPressable";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
])

const HistoricOpenMonth = ({navigation,route}) =>
{
    const [shrimpdata,setshrimpdata] = useState([])

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
    )
}
export default HistoricOpenMonth
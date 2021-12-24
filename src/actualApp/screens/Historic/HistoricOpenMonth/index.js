import React from "react";
import { View,StatusBar,PixelRatio,FlatList,TouchableOpacity,Text, Dimensions,TouchableHighlight } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Image from 'react-native-fast-image'


const HistoricOpenMonth = ({navigation,route}) =>
{
    const renderItem = ({item,index}) =>
    {
        let imagesize = (Dimensions.get('window').width-PixelRatio.roundToNearestPixel(8))/4

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
            style={{margin:PixelRatio.roundToNearestPixel(1)}}
            >
                <Image style={{ width: imagesize, height: imagesize }} source={{ uri: item.uri }} />
            </TouchableOpacity>
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
                    />
                
            </View>
            
        </SafeAreaView>
    )
}
export default HistoricOpenMonth
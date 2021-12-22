import React,{useEffect,useState,useCallback} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,FlatList,TouchableOpacity,Text, Dimensions,TouchableHighlight } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { fetchAllItems } from "../AsyncStorageHelper";
import { Divider } from "react-native-elements";
import { TouchableHighlightBase } from "react-native";
import { Card } from "react-native-paper";


const Historic = ({navigation}) =>
{
    const [shrimpdata,setshrimpdata] = useState([])

    useEffect(() => {
       
        function loadjsondata()
        {
            let DATA = 
            [
                {
                    id:1,
                    mes:'Janeiro',
                    dados:[],
                    theresdata:false
                },
                {
                    id:2,
                    mes:'Fevereiro',
                    dados:[],
                    theresdata:false
                },
                {
                    id:3,
                    mes:'Março',
                    dados:[],
                    theresdata:false
                },
                {
                    id:4,
                    mes:'Abril',
                    dados:[],
                    theresdata:false
                },
                {
                    id:5,
                    mes:'Maio',
                    dados:[],
                    theresdata:false
                },
                {
                    id:6,
                    mes:'Junho',
                    dados:[],
                    theresdata:false
                },
                {
                    id:7,
                    mes:'Julho',
                    dados:[],
                    theresdata:false
                },
                {
                    id:8,
                    mes:'Agosto',
                    dados:[],
                    theresdata:false
                },
                {
                    id:9,
                    mes:'Setembro',
                    dados:[],
                    theresdata:false
                },
                {
                    id:10,
                    mes:'Outubro',
                    dados:[],
                    theresdata:false
                },
                {
                    id:11,
                    mes:'Novembro',
                    dados:[],
                    theresdata:false
                },
                {
                    id:12,
                    mes:'Dezembro',
                    dados:[],
                    theresdata:false
                },
            ]
            fetchAllItems().then((Sdata)=>
            {
                console.log(Sdata.length)
                //console.log(Sdata)
                for(let i = 0 ; i < DATA.length ; i++)
                {
                    for(let i2 = Sdata.length-1 ; i2 >= 0 ; i2--)
                    {
                        //console.log(Sdata[i2].month)

                        if(Sdata[i2].month === DATA[i].id)
                        {
                            if(!DATA[i].theresdata)
                            {
                                DATA[i].theresdata = true
                            }
                            DATA[i].dados.push(Sdata[i2])
                        }
                    }
                }
                setshrimpdata(DATA)
            })
        }

        loadjsondata()  
      }, [])


    /*const onViewableItemsChanged = useCallback(({ changed }) => {
        console.log("Changed in this iteration", changed[0].index);
    },[])*/


    const Item = ({ uri,itemsize }) => 
    (
        <Image 
        style={{
            width:itemsize,
            height:itemsize,
        }} 
        source={{uri:uri}}
        />
    )

    const renderItem2 = ({ item,index }) => 
    {
        //console.log(item)
        let itemsize = PixelRatio.roundToNearestPixel(150)
        return(
            <TouchableOpacity 
            style={{
                width:itemsize,
                height:itemsize,
                borderColor:'#000',
                borderWidth:1
            }}
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
            >
            <Item 
            uri={item.uri}
            itemsize={itemsize}
            />
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item,index }) => 
    {
        //console.log(item)
        
        return(    
            <Card 
            style=
            {{
                marginHorizontal:PixelRatio.roundToNearestPixel(10),
                marginVertical:PixelRatio.roundToNearestPixel(10),
                //backgroundColor:'#D7E2E6',
                borderRadius:PixelRatio.roundToNearestPixel(20),
                //borderTopRightRadius:PixelRatio.roundToNearestPixel(20),
                //borderColor:'#2B2D42',
                //borderWidth:PixelRatio.roundToNearestPixel(1),
                
                
                //elevation: 8,
            }}
            >
                <TouchableOpacity onPress={()=>
                    { 
                    navigation.navigate('HistoricOpenMonth',{
                        dados:item.dados,
                        mes:item.mes
                    })
                    
                    }}
                    
                    style={
                    item.theresdata ?
                    {
                        backgroundColor:'#2B2D42',
                        borderTopLeftRadius:PixelRatio.roundToNearestPixel(19),
                        borderTopRightRadius:PixelRatio.roundToNearestPixel(19),
                    }:
                    {
                        backgroundColor:'#2B2D42',
                        borderRadius:PixelRatio.roundToNearestPixel(19),
                    }
                    }
                    >

                    <Text
                    style=
                    {{
                        fontSize:PixelRatio.roundToNearestPixel(20),
                        margin:PixelRatio.roundToNearestPixel(20),
                        fontWeight:'normal',
                        color:'#EDF2F4'
                    }}>
                        {item.mes}
                    </Text>    
                </TouchableOpacity>

                

                {item.theresdata &&
                    <View 
                    style={{
                    paddingBottom:PixelRatio.roundToNearestPixel(40),
                    
                    }}>
                        <FlatList
                        data={item.dados}
                        renderItem={renderItem2}
                        keyExtractor={item => item.NewName}
                        horizontal

                        />
                    </View>
                }
            </Card>
        )
        // <Divider/>
    }

    return (
        <SafeAreaView style = {{backgroundColor:'#EDF2F4',flex:1}}>

            <StatusBar
            backgroundColor = "#EF233C"
            barStyle={'dark-content'}
            />
             <View style={{backgroundColor:'#EF233C'}}>
                <Text
                style=
                {{
                    fontSize:PixelRatio.roundToNearestPixel(20),
                    marginHorizontal:PixelRatio.roundToNearestPixel(30),
                    marginVertical:PixelRatio.roundToNearestPixel(20),
                    fontWeight:'normal',
                    color:'#EDF2F4'
                }}>
                   {'Meses'} 
                </Text>   
            </View>
                <FlatList
                data={shrimpdata}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                viewabilityConfig={{
                itemVisiblePercentThreshold: 50
                }}
                
                />  
            
                  
        </SafeAreaView>
    )
}
export default Historic
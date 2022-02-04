import React,{useEffect,useState,useCallback} from "react";
import { View,StatusBar,PixelRatio,FlatList,TouchableOpacity,Text, Dimensions,BackHandler} from 'react-native'
import { Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchAllItems } from "../../Helpers/AsyncStorageHelper";
import { Card } from "react-native-paper";
import { Divider as Divider1 } from "react-native-paper";
import ImgPressable from "./ImgPressable";
import { ProgressBar } from "react-native-paper";
import RNFS from 'react-native-fs'
import { useFocusEffect } from "@react-navigation/native";
import { ToogleInAll } from "../Main/CustomComponents/GeneralAnimation";
import { AfterInteractions } from "react-native-interactions";
import Animated_Placeholder from "../../Components/Animated_Placeholder/Animated_Placeholder";

const Historic = ({navigation}) =>
{
    const [shrimpdata,setshrimpdata] = useState([])
    const [spaceinfo,setspaceinfo] = useState({})
   
    useEffect(() => {
       
        RNFS.getFSInfo()
        .then ((info) => {
        setspaceinfo({
            totalSpace:((info.totalSpace / 1024)*0.001)*0.001,
            MB:(info.freeSpace / 1024)*0.001,
            GB:((info.freeSpace / 1024)*0.001)*0.001,
            Progress:(((info.freeSpace / 1024)*0.001)*0.001)/(((info.totalSpace / 1024)*0.001)*0.001),
            })

            //console.log((((info.freeSpace / 1024)*0.001)*0.001))
            //console.log((((info.totalSpace / 1024)*0.001)*0.001))
            //console.log((((info.freeSpace / 1024)*0.001)*0.001)/(((info.totalSpace / 1024)*0.001)*0.001))
        })
      
        function loadjsondata()
        {
            let DATA = 
            [
                {
                    id:1,
                    mes:'Janeiro',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:2,
                    mes:'Fevereiro',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:3,
                    mes:'Março',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:4,
                    mes:'Abril',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:5,
                    mes:'Maio',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:6,
                    mes:'Junho',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:7,
                    mes:'Julho',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:8,
                    mes:'Agosto',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:9,
                    mes:'Setembro',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:10,
                    mes:'Outubro',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:11,
                    mes:'Novembro',
                    dados:[],
                    theresdata:false,
                },
                {
                    id:12,
                    mes:'Dezembro',
                    dados:[],
                    theresdata:false,
                },
            ]
            fetchAllItems().then((Sdata) =>
            {
                //console.log(Sdata.length)
                //console.log(Sdata)
                for(let i = 0 ; i < DATA.length ; i++)
                {
                    for(let i2 = Sdata.length-1 ; i2 >= 0 ; i2--)
                    {
                        //console.log(Sdata[i2].month)

                        if(parseInt(Sdata[i2].month) === DATA[i].id)
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

    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => 
          {
            ToogleInAll()
          }
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress)
    
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        }, [])
    )

    const renderItem2 = ({ item,index }) => 
    {
        if(index<24)
        {
            return(
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
                itemsize={(Dimensions.get('window').width-PixelRatio.roundToNearestPixel(20))/8}
                activeDelete = {true}
                setshrimpdata={setshrimpdata}
                index={parseInt(item.month)-1}
                index2={index}
                />
            )
        }
    }

    const renderItem = ({ item,index }) => 
    {
        //console.log(item)
       if(item.theresdata)
       {
        return(            
            <View>
                <Card
                style=
                {{
                    marginHorizontal:PixelRatio.roundToNearestPixel(10),
                    marginVertical:PixelRatio.roundToNearestPixel(10),
                    backgroundColor:'#EDF2F4',
                    //backgroundColor:'#D7E2E6',
                    borderRadius:PixelRatio.roundToNearestPixel(10),
                    //borderTopRightRadius:PixelRatio.roundToNearestPixel(20),
                    //borderColor:'#2B2D42',
                    //borderWidth:PixelRatio.roundToNearestPixel(1),
                    //elevation: 8,
                }}
                mode="outlined"
                >
                    <Card onPress={()=>
                        {
                            navigation.navigate('HistoricOpenMonth',{
                                dados:item.dados,
                                mes:item.mes,
                                setshrimpdata:setshrimpdata,
                                shrimpdata:shrimpdata
                            })
                        }}
                        
                        style={
                        {
                            backgroundColor:'#EDF2F4',
                            borderTopLeftRadius:PixelRatio.roundToNearestPixel(10),
                            borderTopRightRadius:PixelRatio.roundToNearestPixel(10),
                        }}
                        >
                        <Text
                        style=
                        {{
                            fontSize:PixelRatio.roundToNearestPixel(20),
                            margin:PixelRatio.roundToNearestPixel(20),
                            fontWeight:'normal',
                            //color:'#EDF2F4'
                            color:'#2B2D42'
                        }}>
                            {item.mes}
                        </Text>    

                    </Card>      
                    
                    {item.theresdata &&
                        <View 
                        style={{
                        marginTop:PixelRatio.roundToNearestPixel(10),
                        paddingBottom:PixelRatio.roundToNearestPixel(40),
                        
                        }}>
                            <FlatList
                            data={item.dados}
                            renderItem={renderItem2}
                            keyExtractor={item => item.NewName}
                            numColumns={8}
                            extraData={shrimpdata}
                            />
                        </View>}
                </Card>
            </View>            
        )   
       }
       else
       {
        return(
            <>
            <Divider1/> 
            </>
        )     
           //100% ARMENGO MAS FUNCIONA ENTAO....
       }
    }

    return (

        <AfterInteractions placeholder={<Animated_Placeholder/>}>

            <SafeAreaView style = {{backgroundColor:'#EDF2F4',flex:1}}>

                <StatusBar
                backgroundColor = "#EF233C"
                barStyle={'dark-content'}
                />

                <Header
                backgroundColor="#EF233C"
                leftComponent=
                {
                    <Text
                    style=
                    {{
                        fontSize:PixelRatio.roundToNearestPixel(20),
                        fontWeight:'normal',
                        color:'#EDF2F4',
                        //marginLeft:PixelRatio.roundToNearestPixel(10)
                    }}>
                    Meses
                    </Text>
                }
                rightComponent=
                {
                    <View>
                        <View style={{justifyContent:'flex-end',flexDirection:'row'}}>
                            <Text style=
                            {{
                                fontSize:PixelRatio.roundToNearestPixel(10),
                                fontWeight:'normal',
                                color:'#EDF2F4',
                                
                            }}
                            >Espaço Utilizado: </Text>

                            <Text style=
                            {{
                                fontSize:PixelRatio.roundToNearestPixel(10),
                                fontWeight:'normal',
                                color:'#EDF2F4',
                                
                            }}
                            >{Math.round(spaceinfo.GB * 100) / 100} GB de {Math.round(spaceinfo.totalSpace * 100) / 100} GB</Text>   
                        </View>

                    
                        <ProgressBar 
                        style={{width:Dimensions.get('window').width*0.5}} 
                        color="rgba(255,255,255,1)" 
                        progress={spaceinfo.Progress}
                        />
                    </View>
                }
                />

                <FlatList
                data={shrimpdata}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={shrimpdata}
                />       
                                            
            </SafeAreaView>
        </AfterInteractions>
    )
}
export default Historic
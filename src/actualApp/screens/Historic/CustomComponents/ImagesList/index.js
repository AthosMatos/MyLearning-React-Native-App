import { useFocusEffect, useNavigation } from "@react-navigation/native"
import React, { useCallback, useState } from "react"
import { Dimensions, FlatList, PixelRatio, Text, View } from "react-native"
import { fetchAllItems } from "../../../../Helpers/AsyncStorageHelper"
import { Divider } from "react-native-paper";
import ImgPressable from '../../ImgPressable'
import { Card } from "react-native-paper";

const ImageList = () =>
{
    const [shrimpdata,setshrimpdata] = useState([])
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(()=>
        {
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

            return ()=>
            {

            }

        },[])
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
            <Divider style={{height:0}}/> 
            </>
        )     
           //100% ARMENGO MAS FUNCIONA ENTAO....
       }
    }

    return(
        <FlatList
        data={shrimpdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={shrimpdata}
        />  
    )
}

export default ImageList
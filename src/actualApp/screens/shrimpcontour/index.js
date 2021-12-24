import React,{useCallback, useEffect, useState,useLayoutEffect} from "react";
import {Dimensions,View,StatusBar,Text,ActivityIndicator,PixelRatio,FlatList, Image} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Canvas,{Image as CanvasImage} from 'react-native-canvas'
import { loadDeviceData } from "../../Helpers/AsyncStorageHelper";
import { TouchableOpacity } from "react-native-gesture-handler";

var filepath

export default ({navigation,route}) =>
{
    const [isloading,setloading] = useState(true)
    const [shrimpcoord,setshrimpcoord] = useState([])
    const [ShrimpIndex,setShrimpIndex] = useState(0)
    const [canvasW,setcanvasW] = useState( Dimensions.get('window').width)
    const [canvasH,setcanvasH] = useState(Dimensions.get('window').height*0.7)
    
    const [imgW,setimgW] = useState(canvasW)
    const [imgH,setimgH] = useState(canvasH)
    const [imagesize,setimagesize] = useState(0)
    const [imageuri,setimageuri] = useState(null)

    useEffect(() => {
    
        setimageuri(route.params.imageuri)
        setimagesize(((Dimensions.get('window').width*100)/route.params.imageW)/100)

        function debugData()
        {
            let tempshrimpcoord = []

            for(let i = 0 ;i<shrimpdata.shrimpList.length;i++ )
            {
                let SC = 
                {
                    id:i,
                    contour30:shrimpdata.shrimpList[i].contour30,
                    perimeter: shrimpdata.shrimpList[i].perimeter,
                    area:shrimpdata.shrimpList[i].area ,
                    shrimpLength: shrimpdata.shrimpList[i].shrimpLength,
                    shrimpWidth: shrimpdata.shrimpList[i].shrimpWidth,
                    peso:shrimpdata.shrimpList[i].peso ,
                    cor: 1,
                    red: 5
                }
                tempshrimpcoord.push(SC)
            }
            console.log(tempshrimpcoord)
            setshrimpcoord(tempshrimpcoord)
        }
       
        function loadjsondata()
        {
            //console.log(route.params.dataname)
            
            loadDeviceData(route.params.dataname).then((shrimpdata)=>
            {
                filepath = shrimpdata.filepath

                let tempshrimpcoord = []
                console.log(shrimpdata.json.shrimpList.length)
                for(let i = 0 ;i<shrimpdata.json.shrimpList.length;i++ )
                {
                    let SC = 
                    {
                        id:i,
                        contour30:shrimpdata.json.shrimpList[i].contour30,
                        perimeter: shrimpdata.json.shrimpList[i].perimeter,
                        area:shrimpdata.json.shrimpList[i].area ,
                        shrimpLength: shrimpdata.json.shrimpList[i].shrimpLength,
                        shrimpWidth: shrimpdata.json.shrimpList[i].shrimpWidth,
                        peso:shrimpdata.json.shrimpList[i].peso ,
                        cor: shrimpdata.json.shrimpList[i].cor,
                        red: shrimpdata.json.shrimpList[i].red
                    }
                    tempshrimpcoord.push(SC)
                }
                setshrimpcoord(tempshrimpcoord)
            }).then(()=>
            {
                setloading(false)
            })
        }

        loadjsondata()

        //debugData()
      }, [])
    
    function Hookdealer(image)
    {
        useLayoutEffect(
            () => {
                setimagesize( {

                    width:image.width,
                    height:image.height
                })
            },
            [],
          );
    }

    handleCanvas = (canvas) => {
        //console.log("EnteredCanvas")
        
        if(!canvas) return;

        setimgW(route.params.imageW * imagesize)
        setimgH(route.params.imageH * imagesize)

        let x = 0
        let y = 1

        const ctx = canvas.getContext('2d')
       
        canvas.width = imgW
        canvas.height = imgH
        //ctx.fillStyle = 'blue'
        //ctx.fillRect(0, 0, width, height)
        ctx.strokeStyle = 'blue'
        ctx.lineWidth = 3
        
        if(shrimpcoord[ShrimpIndex]!=null)
        {
            if(shrimpcoord[ShrimpIndex].contour30!=null)
            {
                //console.log("drawing Contour...")
                ctx.beginPath()
                let ContoursizeMutiplier = imagesize
        
                for(let i = 0; i < shrimpcoord[ShrimpIndex].contour30.length; i++)
                {
                    let X = shrimpcoord[ShrimpIndex].contour30[i][0][x] 
                    let Y = shrimpcoord[ShrimpIndex].contour30[i][0][y]
        
                    if (i == 0) ctx.moveTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                    else ctx.lineTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                    
                    //console.log(shrimpcoord[ShrimpIndex].contour30[i][0][x])
                    //console.log(shrimpcoord[ShrimpIndex].contour30[i][0][y])
                }
    
                ctx.closePath()
                ctx.stroke()
            }
            else
            {
                console.log("noCountour30")
            }
        }
        else
        {
            console.log("nodata")
        }
    }

    const onViewableItemsChanged = useCallback(({ changed }) => {
       
        console.log("Changed in this iteration", changed[0].index);
        setShrimpIndex(changed[0].index)
    },[])

    const Item = ({name,data}) =>
    {
        return(
            <View style={{flexDirection:"row",marginHorizontal:PixelRatio.roundToNearestPixel(5)}}>
                <Text >{name + ': '}</Text>
                <Text >{data}</Text>
            </View>
        )
    }

    const Group = ({ perimeter,length,width,area,peso,cor,red }) => 
    (
        <View style=
        {{
            paddingVertical:PixelRatio.roundToNearestPixel(5),
            width:Dimensions.get('window').width
            }}>
          <Item data= {perimeter} name='perimetro'/>
          <Item data= {length} name='altura'/>
          <Item data= {width} name='largura'/>
          <Item data= {area} name='area'/>
          <Item data= {peso} name='peso'/>
          <Item data= {cor} name='cor'/>
          <Item data= {red} name='C. vermelha'/>
        </View>
    )

    const renderItem = ({ item,index }) => 
    {
        //console.log(index)
        if(item.perimeter)
        {
            return(
                <Group
                perimeter={item.perimeter}
                length={item.shrimpLength}
                width={item.shrimpWidth}
                area={item.area}
                peso={item.peso}
                cor={item.cor}
                red={item.red}
                />
            )
        } 
    }
    return (
        <SafeAreaView style=
        {{
            flex:1,
        }}> 
            <StatusBar
                backgroundColor = "#FFF"
                barStyle={'dark-content'}/>


            {!isloading && <View 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: imgW,
                bottom: imgH
                }}>
                    
               {imageuri &&
                <Image
                source={{uri: imageuri}}
                style={{width: imgW, height: imgH}}
                />
               }
                
            </View>}

            <View 
            style=
            {{
                width: imgW,
                height: imgH,
            }}
            >
                {isloading && 
                    <ActivityIndicator style={{paddingTop:canvasH*0.4}} color={'#000'} size={'large'} />       
                }

                <TouchableOpacity onPress={() =>{}}>
                    <Canvas ref = {handleCanvas} />
                </TouchableOpacity>
               
                    
            </View>
            
            <FlatList
            data={shrimpcoord}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50
            }}
            />
           
        </SafeAreaView>
    )
}
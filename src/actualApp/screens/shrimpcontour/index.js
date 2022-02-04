import React,{useCallback, useEffect, useState,useLayoutEffect} from "react";
import {Dimensions,View,StatusBar,Text,ActivityIndicator,PixelRatio,FlatList,TouchableOpacity, ScrollView,ToastAndroid} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Canvas,{Image as CanvasImage} from 'react-native-canvas'
import { loadDeviceData } from "../../Helpers/AsyncStorageHelper";
import Image from 'react-native-fast-image'
import { Divider } from "react-native-elements";
import FAB from "../../Components/FABv3";
import { SERVER_URL,Reachable } from "../../Helpers/AsyncConectionHelper";
import RNFetchBlob from "rn-fetch-blob";

export default ({navigation,route}) =>
{
    const [isloading,setloading] = useState(true)
    const [shrimpcoord,setshrimpcoord] = useState([])
    const [ShrimpIndex,setShrimpIndex] = useState(0)
    const [canvasW,setcanvasW] = useState( Dimensions.get('window').width)
    const [canvasH,setcanvasH] = useState(Dimensions.get('window').height*0.5)
    const [shrimpgeral,setshrimpgeral] = useState([])

    const [imgW,setimgW] = useState(canvasW)
    const [imgH,setimgH] = useState(canvasH)
    const [imagesize,setimagesize] = useState(0)
    const [imageuri,setimageuri] = useState(null)
    const [Gbuttonselected,setGbuttonselected] = useState(false)
    const [Cbuttonselected,setCbuttonselected] = useState(true)
    const [Serverimage,setServerimage] = useState('')


    const [showGeral,setshowGeral] = useState(false)

    useEffect(() => {

        setimageuri(route.params.imageuri)
        setimagesize(((Dimensions.get('window').height*50)/route.params.imageH)/100)
       
        function loadjsondata()
        {       
            loadDeviceData(route.params.dataname).then((shrimpdata)=>
            {
                setServerimage(shrimpdata.Serverimage)
                console.log(shrimpdata)

                let tempshrimpcoord = []
                let pesomedia = 0
                let i 
                console.log(shrimpdata.json.shrimpList.length)
                for(i = 0;i<shrimpdata.json.shrimpList.length;i++ )
                {
                    pesomedia+=parseInt(shrimpdata.json.shrimpList[i].peso)
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
                pesomedia/=i
                setshrimpcoord(tempshrimpcoord)
                console.log(pesomedia)

                let gdata = 
                {       
                    colorA1:shrimpdata.json.distribution.color.a1,
                    colorA2:shrimpdata.json.distribution.color.a2,
                    colorA3:shrimpdata.json.distribution.color.a3,
                    colorA4:shrimpdata.json.distribution.color.a4,
                    red1:shrimpdata.json.distribution.red_head.healthy,
                    red2:shrimpdata.json.distribution.red_head.moderate,
                    red3:shrimpdata.json.distribution.red_head.diseased,
                    shrimpamount:shrimpdata.json.distribution.total,
                    area:shrimpdata.json.distribution.area,
                    day:shrimpdata.day,
                    month:shrimpdata.month,
                    year:shrimpdata.year,
                    hour:shrimpdata.hours,
                    minutes:shrimpdata.minutes,
                    pesomedia:pesomedia,

                }
                
                //console.log(gdata)
                setshrimpgeral(gdata)


            }).then(()=>
            {
                setloading(false)
            })
        }

        loadjsondata()

      }, [])

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
        ctx.strokeStyle = 'red'
        ctx.lineWidth = PixelRatio.roundToNearestPixel(4)
        

        if(!showGeral)
        {
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
                //console.log("nodata")
            }
        }
        else
        {
            for(let index = 0 ; index<shrimpcoord.length;index++)
            {
                if(shrimpcoord[index].perimeter)
                {
                    if(shrimpcoord[index]!=null)
                    {
                        if(shrimpcoord[index].contour30!=null)
                        {
                            //console.log("drawing Contour...")
                            ctx.beginPath()
                            let ContoursizeMutiplier = imagesize
                    
                            for(let i = 0; i < shrimpcoord[index].contour30.length; i++)
                            {
                                let X = shrimpcoord[index].contour30[i][0][x] 
                                let Y = shrimpcoord[index].contour30[i][0][y]
                    
                                if (i == 0) ctx.moveTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                                else ctx.lineTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                                
                                //console.log(shrimpcoord[ShrimpIndex].contour30[i][0][x])
                                //console.log(shrimpcoord[ShrimpIndex].contour30[i][0][y])
                            }
                
                            ctx.closePath()
                            ctx.stroke()
                        }
                    }
                }
               
            }
           
        }
       
    }

    const onViewableItemsChanged = useCallback(({ changed }) => {
       
        console.log("Changed in this iteration", changed[0].index);
        setShrimpIndex(changed[0].index)
    },[])

    const Item = ({name,data}) =>
    {   
        return(
            <>
             <Divider/>
             <View style={{
                height:PixelRatio.roundToNearestPixel(60),
                backgroundColor:'#FFF',
                justifyContent:'center',
                 }}>
                <Text style={{paddingLeft:PixelRatio.roundToNearestPixel(10)}}>{name + ': '} {data}</Text>
            </View>
            <Divider/>
            </>
            
        )
    }

    const Group = ({ perimeter,length,width,area,peso,cor,red }) => 
    {
        let cv
        if(red===0)
        {
            cv='Saudavel'
        }
        else if(red===1)
        {
            cv='Moderado'
        }
        else
        {
            cv='Critico'
        }

        return(
        <ScrollView style=
        {{
            width:Dimensions.get('window').width
            }}>
            <Item data= {Math.trunc(peso) + ' g'} name='Peso'/>
            <Item data= {'A' + Math.trunc(cor)} name='Cor'/>
            <Item data= {cv} name='C. vermelha'/>
            {/*<Item data= {Math.trunc(perimeter) + ' cm'} name='Perimetro'/>
            <Item data= {Math.trunc(length) + ' cm'} name='Altura'/>
            <Item data= {Math.trunc(width) + ' cm'} name='Largura'/>
            <Item data= {Math.trunc(area) + ' cm'} name='Area'/>*/}
           
        </ScrollView>
        )
    }
    const Group2 = ({ day,month,year,hour,minute,shrimpamount,colorA1,colorA2,colorA3,colorA4,red1,red2,red3,pesomedia }) => 
    {
        //console.log('day',day)
        //console.log('sgeral',shrimpgeral)
        return(
        <ScrollView style=
        {{
            width:Dimensions.get('window').width
            }}>
                
            <Item data= {`${day}/${month}/${year}`} name='Data'/>
            <Item data= {`${hour}:${minute}`} name='Hora'/>
            <Item data= {shrimpamount} name='Total de Camarões'/>
            <Item data= {Math.trunc(pesomedia)+ 'g'} name='Peso Medio'/>
            <Item data= {colorA1} name='Camarões com cor A1'/>
            <Item data= {colorA2} name='Camarões com cor A2'/>
            <Item data= {colorA3} name='Camarões com cor A3'/>
            <Item data= {colorA4} name='Camarões com cor A4'/>
            <Item data= {red1} name='C. Vermelha Saudavel'/>
            <Item data= {red2} name='C. Vermelha Moderado'/>
            <Item data= {red3} name='C. Vermelha Critico'/>
              
           
        </ScrollView>
        )
    }

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
        <SafeAreaView style={{flex:1,flexGrow:1}}> 
            <StatusBar
                backgroundColor = "#FFF"
                barStyle={'dark-content'}/>

                {!isloading && 
                <View>
                    <View 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        //justifyContent:'center',
                        alignItems: 'center',
                        right: 0, bottom: 0,
                        
    
                        }}>
                            
                    {imageuri &&
                        <Image
                        source={{uri: imageuri}}
                        style={{width: imgW, height: imgH}}
                        />
                    }
                    </View>
                </View>}
           
            <View
            style=
            {{
                width: imgW,
                height: imgH,
                alignSelf:'center',
                //borderWidth:2,
                //borderColor:'#000'
            }}
            >
                {isloading && 
                <View style={{
                    //borderWidth:2,
                    //borderColor:'#000',
                    justifyContent:'center',
                    alignItems:'center',
                    width: imgW,
                    height: imgH,
                    }}>
                    <ActivityIndicator color={'#000'} size={'large'}/>
                </View>   
                }
                
                
                <TouchableOpacity onPress={() =>{}}>
                    <Canvas ref = {handleCanvas} />
                </TouchableOpacity>
                           
            </View>
            
            <View style={{
                flexDirection: 'row',
                //marginHorizontal:PixelRatio.roundToNearestPixel(20),
                justifyContent:'space-evenly',
                elevation:PixelRatio.getPixelSizeForLayoutSize(2),
                backgroundColor:'rgba(255,255,255,1)'
            }}>
                
                <TouchableOpacity style={
                !Gbuttonselected?
                {
                height:PixelRatio.roundToNearestPixel(70),
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#828282',
                flex:1
                } 
                :
                {
                    height:PixelRatio.roundToNearestPixel(70),
                    justifyContent:'center',
                    alignItems:'center',
                    flex:1,
                    backgroundColor:'#EF233C'
                }
                }
                onPress={()=> 
                {
                    setshowGeral(true)
                    setGbuttonselected(true)
                    setCbuttonselected(false)
                    //console.log(shrimpgeral)
                }}
                >
                    <Text style={{
                        color:'rgba(255,255,255,1)'
                    }}>Geral</Text>
                    
                </TouchableOpacity>
                
                <TouchableOpacity style=
                {!Cbuttonselected?
                {
                    height:PixelRatio.roundToNearestPixel(70),
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#828282',
                    flex:1
                } 
                :
                {
                    height:PixelRatio.roundToNearestPixel(70),
                    justifyContent:'center',
                    alignItems:'center',
                    flex:1,
                    backgroundColor:'#EF233C'
                }
                }
                    onPress={()=> 
                    {
                        setshowGeral(false)
                        setCbuttonselected(true)
                        setGbuttonselected(false)
                    }}
                    >
                    <Text style={{
                        color:'rgba(255,255,255,1)'
                    }}>Camarão</Text>
                    
                </TouchableOpacity>
                
            </View>

            {!showGeral?
            <FlatList
            data={shrimpcoord}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
            }}
            key={'key2'}
            initialScrollIndex={ShrimpIndex}
            />
            :
            <>
        
            <Group2
            shrimpamount={shrimpgeral.shrimpamount}
            colorA1={shrimpgeral.colorA1}
            colorA2={shrimpgeral.colorA2}
            colorA3={shrimpgeral.colorA3}
            colorA4={shrimpgeral.colorA4}
            red1={shrimpgeral.red1}
            red2={shrimpgeral.red2}
            red3={shrimpgeral.red3}
            day={shrimpgeral.day}
            month={shrimpgeral.month}
            year={shrimpgeral.year}
            hour={shrimpgeral.hour}
            minute={shrimpgeral.minutes}
            pesomedia={shrimpgeral.pesomedia}
            />

            <View style={{ 
            position:'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            }}>
                <View style={{ width:PixelRatio.roundToNearestPixel(120)}}>
                    <FAB 
                    icon={'file-download'}
                    text={'PDF'}
                    elevation={PixelRatio.roundToNearestPixel(4)}
                    onPress={async ()=>
                    {
                        if(await Reachable())
                        {
                            ToastAndroid.show("Baixando",ToastAndroid.SHORT)
                            const { config, fs } = RNFetchBlob
                            let PictureDir = fs.dirs.DownloadDir // this is the pictures directory. You can check the available directories in the wiki.
                            let options = {
                                fileCache: true,
                                addAndroidDownloads : {
                                    useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
                                    notification : true,
                                    path:  PictureDir + "/PDF FILE:"+ Serverimage.slice(0,Serverimage.length-9) + ".pdf", // this is the path where your downloaded file will live in
                                    description : 'Downloading image.'
                                }
                            }
                            config(options).fetch('GET', SERVER_URL + '/getpdf/'+ (Serverimage.slice(0,Serverimage.length-9)+".pdf")).then((res) => {
                                ToastAndroid.show("Download Finalizado",ToastAndroid.SHORT)
                            })
                        }
                        else
                        {
                            alert("Conexão Indisponivel.Por favor, tente novamente")
                        }
                        //console.log("Serverimage",Serverimage.slice(0,Serverimage.length-9)+".pdf")
                       
                    }}
                    />
                </View>

            </View>
            </>
            }
           
        </SafeAreaView>
    )
}
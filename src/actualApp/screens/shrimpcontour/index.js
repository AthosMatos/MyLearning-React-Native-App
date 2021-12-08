import React,{useState} from "react";
import {Dimensions,View,StatusBar,Text,ActivityIndicator,PixelRatio,FlatList} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Canvas,{Image as CanvasImage} from 'react-native-canvas'
import shrimpcoord from '../../../assets/test2.json'
import RNFS from 'react-native-fs';
import { Divider } from "react-native-elements";

export default ({navigation,route}) =>
{
    const [imagedata,setimagedata] = useState('noData')
    const [isloading,setloading] = useState(true)
    const [ShrimpIndex,setShrimpIndex] = useState(0) //eh pra starta com 0
    var pagecount = 0

    RNFS.readFileAssets('imagetest.jpeg','base64').then(binary => {
        // work with it
        setimagedata(`data:image/jpeg;base64,${binary}`)
        setloading(false)
    }).catch(console.error)

         
    handleCanvas = (canvas) => {
        //console.log("EnteredCanvas")
        if(!canvas) return;

        let x = 0
        let y = 1
       
        let width = Dimensions.get('window').width 
        let height = Dimensions.get('window').height * 0.3

        const ctx = canvas.getContext('2d')
       
        canvas.width = width
        canvas.height = height
        
        //ctx.fillStyle = 'blue'
        //ctx.fillRect(0, 0, width, height)
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 2
        
        var image = new CanvasImage(canvas)

        const imageSrcIOS = `${RNFS.MainBundlePath}/${'assets/imagetest.jpeg'}`
        
        image.addEventListener('load', () => {     
            //alert('IMAGE LOADED')
            
            let imagesize = (((Dimensions.get('window').width*100)/image.width)/100)

            ctx.drawImage(image, 0, 0, image.width * imagesize, image.height * imagesize)
            
            if(shrimpcoord.shrimpList[ShrimpIndex]!=null)
            {
                if(shrimpcoord.shrimpList[ShrimpIndex].contour30!=null)
                {
                    ctx.beginPath()
                    let ContoursizeMutiplier = imagesize
            
                    for(let i = 0; i < shrimpcoord.shrimpList[ShrimpIndex].contour30.length; i++)
                    {
                        let X = shrimpcoord.shrimpList[ShrimpIndex].contour30[i][0][x] * 2 
                        let Y = shrimpcoord.shrimpList[ShrimpIndex].contour30[i][0][y] * 2
            
                        if (i == 0) ctx.moveTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                        else ctx.lineTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                        
                        //console.log(shrimpcoord.shrimpList[1].contour30[i][0][x])
                        //console.log(shrimpcoord.shrimpList[1].contour30[i][0][y])
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
          
        })

        //image.src = imagedata
        image.src = 'http://104.251.214.172:4000/getimage/' + route.params.photoname
        
    }

    function AllShrimpData()
    {
        return (
            <>
            <ShrimpData/>
            <ShrimpData/>
            <ShrimpData/>
            <ShrimpData/>
            <ShrimpData/>
            </>
        )
    }

    function ShrimpData()
    {
        function Dvider({info})
        {
            return (
                <>
                <View style={{paddingBottom:10,paddingHorizontal:10}}>
                    <Divider/>
                    <Text style={{fontSize:PixelRatio.getPixelSizeForLayoutSize(9)}}>{info}</Text>
                </View>
                </>
            )
        }
        function Sinfo({info,info2})
        {
           return (
            <>
            <View style={{paddingTop:PixelRatio.getPixelSizeForLayoutSize(3)}}>
                <Dvider info={info}/>
                <View style={{ paddingHorizontal:20}}>
                    <Text 
                    style={{fontSize:PixelRatio.getPixelSizeForLayoutSize(5)}}>{info2}</Text>
                </View>
            </View>

            </>
           )  
        }

        if(shrimpcoord.shrimpList[ShrimpIndex]==null) 
        {
            return(
                <>
                <View style={{width:Dimensions.get("window").width}}>
                    <Text>NO DATA</Text>
                    <Dvider/>
                </View>
                </>
            )
        }

        return (
            <>
                <ScrollView style={{
                    paddingTop:PixelRatio.getPixelSizeForLayoutSize(5),
                    width:Dimensions.get("window").width,
                    }}>
                        <Sinfo info="Area" info2={shrimpcoord.shrimpList[ShrimpIndex].area}/>

                        <Sinfo info="Perimetro" info2={shrimpcoord.shrimpList[ShrimpIndex].perimeter}/>

                        <Sinfo info="Peso" info2={shrimpcoord.shrimpList[ShrimpIndex].peso}/>

                        <Sinfo info="Altura" info2={shrimpcoord.shrimpList[ShrimpIndex].shrimpLength}/>

                        <Sinfo info="Largura" info2={shrimpcoord.shrimpList[ShrimpIndex].shrimpWidth}/>
                    
                </ScrollView>
            </>
        )
    }

    const handleScroll = (event) => {
        const positionX = Math.ceil(event.nativeEvent.contentOffset.x)
        const w = Math.ceil(Dimensions.get('window').width)
        
        pagecount = Math.round(positionX / w) + 1
        setShrimpIndex(pagecount - 1)
       // console.log(pagecount)
        //console.log(positionX)
        //console.log(Math.round(event.nativeEvent.contentOffset.x))       
    }

    return (
        <SafeAreaView style={{marginTop:-30}}> 
        <StatusBar
            backgroundColor = "#FFF"
            barStyle={'dark-content'}/>
            <View style = {{
                     justifyContent:"center",alignItems:"center",
                     }}>

                     {isloading ?   
                         <ActivityIndicator style={{paddingTop:100}} color={'#000'} size={'large'} />       
                     :
                     <Canvas ref = {handleCanvas}/>
                     }
            </View>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onScroll = {handleScroll}
            >
              <AllShrimpData/>

            </ScrollView>

        </SafeAreaView>
    )
}
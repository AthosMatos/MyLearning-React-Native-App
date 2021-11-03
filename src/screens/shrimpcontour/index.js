import React,{useState} from "react";
import {Dimensions,View,StatusBar,Text,ActivityIndicator,PixelRatio} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Canvas,{Image as CanvasImage} from 'react-native-canvas'
import shrimpcoord from '../../assets/test2.json'
import RNFS from 'react-native-fs';

export default ({route}) =>
{
    const navigation = useNavigation()
    const UserData = route.params.userData
    const [imagedata,setimagedata] = useState('noData')
    const [isloading,setloading] = useState(true)

    RNFS.readFileAssets('imagetest.jpeg','base64').then(binary => {
        // work with it
        setimagedata(`data:image/jpeg;base64,${binary}`)
        setloading(false)
    })
        .catch(console.error)
         
    handleCanvas = (canvas) => {

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

            ctx.beginPath()
            let ContoursizeMutiplier = imagesize
    
            for(let i = 0; i < shrimpcoord.shrimpList[1].contour30.length; i++)
            {
                let X = shrimpcoord.shrimpList[1].contour30[i][0][x] * 2 
                let Y = shrimpcoord.shrimpList[1].contour30[i][0][y] * 2
    
                if (i == 0) ctx.moveTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                else ctx.lineTo(X * ContoursizeMutiplier, Y * ContoursizeMutiplier)
                
                //console.log(shrimpcoord.shrimpList[1].contour30[i][0][x])
                //console.log(shrimpcoord.shrimpList[1].contour30[i][0][y])
            }

            ctx.closePath()
            ctx.stroke()
        })

        image.src = imagedata
        //image.src = 'http://i.imgur.com/O712qpO.jpg'
        
    }

    return (
        <SafeAreaView style={{marginTop:-30}}> 
        <StatusBar
            backgroundColor = "#FFF"
            barStyle={'dark-content'}/>
            <ScrollView style={{
               // marginVertical: Dimensions.get('window').height * 0.05, 
                }}>
                <View style = {{
                    justifyContent:"center",alignItems:"center",
                    }}>

                    {isloading ?                     
                        <ActivityIndicator style={{paddingTop:100}} color={'#000'} size={'large'} />       
                    :  
                    <Canvas ref = {handleCanvas}/>
                    }
                </View>
                    <Text>{shrimpcoord.shrimpList[1].area}</Text>
                    <Text>{shrimpcoord.shrimpList[1].perimeter}</Text>
                    <Text>{shrimpcoord.shrimpList[1].area}</Text>
            </ScrollView>

        </SafeAreaView>
    )
}
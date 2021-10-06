import React from "react";
import {Dimensions,View, Image as RNImage} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {Card} from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";
import Canvas,{Image as CanvasImage} from 'react-native-canvas'
import shrimpcoord from '../../assets/test2.json'

import shrimpimage from '../../assets/imagetest.jpeg'


export default ({route}) =>
{
    const UserData = route.params.userData

    handleCanvas = (canvas) => {
        let x = 0
        let y = 1
       
        let width = Dimensions.get('window').width * 0.8
        let height = Dimensions.get('window').height * 0.3

        const ctx = canvas.getContext('2d')

        canvas.width = width
        canvas.height = height

        ctx.fillStyle = 'blue'
        ctx.fillRect(0, 0, width, height)
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 2


        var image = new CanvasImage(canvas);
        
        const imageUri = RNImage.resolveAssetSource(shrimpimage).uri 

        let imagesize = 0.27

        image.addEventListener('load', e => {

            console.log('test')

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

        });

        
        image.src = imageUri

        //image.src = 'file:///C:/Users/Athos/Documents/GitHub/ReactNative-PhoneProject/src/assets/imagetest.jpeg'
    
        //image.src = 'http://i.imgur.com/O712qpO.jpg'
        
    }

    return (
        <SafeAreaView> 
            
            <ScrollView style={{
               // marginVertical: Dimensions.get('window').height * 0.05, 
                }}>
                <Card containerStyle = {{
                    justifyContent:"center",alignItems:"center"
                    }}>
                    <Card.Title>
                        Shrimp
                    </Card.Title>

                    <Canvas ref={handleCanvas}/>

                </Card>
                
            </ScrollView>

        </SafeAreaView>
    )
}
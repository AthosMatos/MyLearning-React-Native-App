import React,{useState} from 'react';
import {Text, View,StatusBar,PixelRatio,Dimensions,Image,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'
const {width,height} =  Dimensions.get('window');
import {setCoin} from './CoinVariables'

const moedas = [
    {
        key:100,
        image: require('../../../assets/moedas/1_real.png'),
    },
    {
        key:5,
        image: require('../../../assets/moedas/5_cents.png'),
    },
    {
        key:10,
        image: require('../../../assets/moedas/10_cents.png'),
    },
    {
        key:50,
        image: require('../../../assets/moedas/50_cents.png'),
    },
    {
        key:25,
        image: require('../../../assets/moedas/25_cents.png')
    },
    {
        key:1,
        image: require('../../../assets/moedas/poticoin.png')
    }
  ]

const carousel = ({toggleModal}) =>
{
    const coinsize = width * 0.5

    function renderItem ({item})
    {
        return (
            <TouchableOpacity 
            style={{justifyContent:'center',alignItems:'center',marginVertical:PixelRatio.getPixelSizeForLayoutSize(20),}}
            onPress={()=>
                {
                    setCoin(item.key)
                    toggleModal()
                }}
            >
                <View style={{
                    backgroundColor:'#EDF2F4',
                    width:width*0.75,
                    height:coinsize*2.2,
                    borderColor:'#000',
                    borderWidth:PixelRatio.roundToNearestPixel(6),
                    borderRadius:PixelRatio.roundToNearestPixel(30),        
                    overflow: 'hidden',
                    }}>
                    <Image source={item.image} 
                    style={{
                        width:undefined,
                        height:undefined,
                        flex:1,
                        marginLeft:-PixelRatio.roundToNearestPixel(160),
                        //transform: [{ scale: 0.8 }]
                    }}
                    resizeMode='cover'
                    
                    />
                </View>
               
            </TouchableOpacity>      
            )
    }

    return (
        <View>
            <Carousel
            layout={"default"}
            data={moedas}
            ref={(c) => { this._carousel = c; }}
            renderItem={renderItem}
            scrollEndDragDebounceValue ={0.9}
            enableMomentum 
            enableSnap
            sliderWidth={width}
            itemWidth={width*0.65}
            inactiveSlideScale={0.6}
            inactiveSlideOpacity={0.4}
            />
          
        </View>
    )

}

export default carousel
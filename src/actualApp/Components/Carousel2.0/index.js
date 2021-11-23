import React,{useState} from 'react';
import {Text, View,StatusBar,PixelRatio,Dimensions,Image,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'
const {width,height} =  Dimensions.get('window');

const moedas = [
    {
        key:0,
        image: require('../../../assets/moedas/1_real.png'),
    },
    {
        key:1,
        image: require('../../../assets/moedas/5_cents.png'),
    },
    {
        key:2,
        image: require('../../../assets/moedas/10_cents.png'),
    },
    {
        key:3,
        image: require('../../../assets/moedas/50_cents.png'),
    },
    {
        key:4,
        image: require('../../../assets/moedas/25_cents.png')
    }
  ]

export default () =>
{
    const coinsize = width * 0.5


    function renderItem ({item})
    {
        return (
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={item.image} 
                style={{width:coinsize,height:coinsize}}
                resizeMode='cover'
                />
            </TouchableOpacity>      
            )
    }

    return (
        <View style={{width,left:-(PixelRatio.getPixelSizeForLayoutSize(8))}}>
            <StatusBar backgroundColor={'#FFF'} />

            <Carousel
            layout={"default"}
            data={moedas}
            ref={(c) => { this._carousel = c; }}
            renderItem={renderItem}
            scrollEndDragDebounceValue ={0.9}
            enableMomentum 
            enableSnap
            sliderWidth={width}
            itemWidth={coinsize}
            inactiveSlideScale={0.6}
            inactiveSlideOpacity={0.3}
            />
          

        </View>
    )

}

import React,{useState} from 'react';
import {Text, View,StatusBar,PixelRatio,Dimensions,Image,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'
const {width,height} =  Dimensions.get('window');
import {setCoin} from '../../variables'

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
    }
  ]
//pode ser :
    //100 = 1 real
    //50 = 0.50 real
    //25 = 0.25 real
    //10 = 0.10 real
    //5 = 0.05 real

const carousel = () =>
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
                }}
            >
                <Image source={item.image} 
                style={{width:coinsize,height:coinsize}}
                resizeMode='cover'
                
                />
            </TouchableOpacity>      
            )
    }

    return (
        <View style={
            {
                width,
                left:-(PixelRatio.getPixelSizeForLayoutSize(8))
            }}>
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

export default carousel
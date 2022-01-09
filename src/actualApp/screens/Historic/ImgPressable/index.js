import React, {useState} from 'react'
import {TouchableOpacity,Text,Dimensions,PixelRatio} from 'react-native'
import Image from 'react-native-fast-image'
import { Icon } from 'react-native-elements';
import { View } from 'react-native-animatable';
import { deleteDeviceData } from "../../../Helpers/AsyncStorageHelper";

const ImgPressable = ({onPress,item,itemsize,onLongPress,activeDelete,setshrimpdata,index,index2,margin}) =>
{
    const [deleteimg,setdeleteimg] = useState(false)
    console.log(index)
    const toogleDelete = () => {
        setdeleteimg(!deleteimg)
    }

    const Item = ({uri}) => 
    (
        <Image
        style={{
            width:itemsize,
            height:itemsize,
        }} 
        source={{uri:uri}}
        />
    )

    return(
        <TouchableOpacity 
        style={{
            width:itemsize,
            height:itemsize,
            margin:margin,
            //borderColor:'#000',
            //borderWidth:1
        }}
        onPress={deleteimg?
            ()=>
            {
                deleteDeviceData(item.NewName)
                toogleDelete()
                setshrimpdata((prevstate)=>{
                    //console.log('before before',prevstate)
                   // console.log('before',prevstate[index])
                   // console.log('index',index)

                    prevstate[index].dados.splice(index2,1)

                    //console.log('datasize',prevstate[index].dados.length)

                    if(!prevstate[index].dados.length)
                    {
                        //console.log('nodataimonth')
                        prevstate[index].theresdata = false
                    }
                    //console.log('after',prevstate[index])
                    return [...prevstate]
                })
            }
            :
            onPress}
        onLongPress={
            activeDelete ? 
            ()=>
            {
                toogleDelete()
            }
            :
            onLongPress}
        >
        {!deleteimg
        ?
            <Item 
            uri={item.uri}
            />
        :
        <View
        style={{
            alignItems:'center',
            justifyContent:'center',
            width:itemsize,
            height:itemsize,
            backgroundColor:'rgba(167,0,0,0.8)'
            }}>
            <Icon name='close'/>
            
        </View>
        }
        </TouchableOpacity>
    )
        
}

export default ImgPressable
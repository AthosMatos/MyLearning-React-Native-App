import React from "react"
import { TouchableOpacity,Text,StyleSheet,PixelRatio,View,Image } from "react-native"
import { Icon } from "react-native-elements"
import { ActivityIndicator } from "react-native-paper"

export default ({text,onPress,color,icon,big,image,width,height,fontSize,fontColor,borderRadius,type,loading}) =>
{

    if(!color){color="#EF233C"}
    
    if(!fontSize){fontSize=PixelRatio.getPixelSizeForLayoutSize(6) }

    if(!fontColor){fontColor='#FFF'}

    if(!borderRadius){borderRadius=PixelRatio.getPixelSizeForLayoutSize(8)}

    const styles = StyleSheet.create(
        {
            Container:
            {
                backgroundColor:color,
                borderRadius:borderRadius,
                elevation:PixelRatio.getPixelSizeForLayoutSize(2),
            },
            FABstyle:
            {
                alignItems:'flex-start',
                justifyContent:'flex-end',
            },
            FABstyle2:
            {
                alignItems:'flex-start',
                justifyContent:'flex-end',         
                height:PixelRatio.getPixelSizeForLayoutSize(28),
            },
            FABstyleW:
            {
                alignItems:'flex-start',
                justifyContent:'flex-end',   
                width:width,
            },
            FABstyleH:
            {
                alignItems:'flex-start',
                justifyContent:'flex-end',
                height:height,
            },
            FABstyleHW:
            {
                alignItems:'flex-start',
                justifyContent:'flex-end',
                height:height,
                width:width,
            },
            FABTextStyle:
            {
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(8),   
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:fontColor,
                fontSize:fontSize,
            },
            FABTextStyle2:
            {
                paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(8),   
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:fontColor,
                fontSize:fontSize
            },
            FABTextStyle3:
            {
                paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(8),     
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:fontColor,
                fontSize:PixelRatio.getPixelSizeForLayoutSize(8),
            },
            IconStyle:
            {
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(8),
                paddingTop:PixelRatio.getPixelSizeForLayoutSize(10),
            },
            ImageStyle:
            {               
                width:PixelRatio.getPixelSizeForLayoutSize(12),
                height:PixelRatio.getPixelSizeForLayoutSize(12),
            },
            ImageContainer:
            {
                paddingTop:PixelRatio.getPixelSizeForLayoutSize(10),
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(8),
            },
            LoadingStyle:
            {
                padding:PixelRatio.getPixelSizeForLayoutSize(16),
            },
        }
    )

    function SelectStyle()
    {
        if(width && height)
        {
            return styles.FABstyleHW
        }
        else if(width)
        {
            return styles.FABstyleW
        }
        else if(height)
        {
            return styles.FABstyleH
        }
        else
        {
            return styles.FABstyle
        }
    }
    function TheresIcon()
    {

        if(loading)
        {
            return (
                <>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator
                    color='#FFF' 
                    size={PixelRatio.getPixelSizeForLayoutSize(12)}
                    style={styles.LoadingStyle}
                    />
                </View>
                </>
            )
        }
        else if(icon)
        {
            return (
                <>
                    <Icon
                    name={icon}
                    color='#FFF' 
                    size={PixelRatio.getPixelSizeForLayoutSize(12)}
                    style={styles.IconStyle}
                    type={type}/>
                    <Text style={styles.FABTextStyle}>{text}</Text>
                </>
            )
        }
        else
        {
            return (
                <>
                    {image && 
                        <View style={styles.ImageContainer}><Image source={image} style={styles.ImageStyle}/></View>
                    }
                    {big ? <Text style={styles.FABTextStyle3}>{text}</Text>
                    :
                        <Text style={styles.FABTextStyle2}>{text}</Text>
                    }
                </>
            )
        }
    }

    return(
        <View style={[styles.Container]}>
            <TouchableOpacity onPress={onPress} style={!big ? SelectStyle() : styles.FABstyle2} > 
                 
                <TheresIcon/>

            </TouchableOpacity>
        </View>
        
    )
}


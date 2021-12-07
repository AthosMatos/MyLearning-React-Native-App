import React from "react"
import { TouchableOpacity,Text,StyleSheet,PixelRatio,View,Image } from "react-native"
import { Icon } from "react-native-elements"

export default ({text,onPress,color,icon,big,image,width,height,fontSize,fontColor,borderRadius,type}) =>
{
    if(!color){color="#EF233C"}
    
    if(!fontSize){fontSize=PixelRatio.getPixelSizeForLayoutSize(6) }

    if(!fontColor){fontColor='#FFF'}

    if(!borderRadius){borderRadius=PixelRatio.getPixelSizeForLayoutSize(20)}

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
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
            },
            FABstyle2:
            {
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                height:PixelRatio.getPixelSizeForLayoutSize(28),
            },
            FABstyleW:
            {
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                width:width,
            },
            FABstyleH:
            {
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                height:height,
            },
            FABstyleHW:
            {
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                height:height,
                width:width,
            },
            FABTextStyle:
            {
                paddingRight:PixelRatio.getPixelSizeForLayoutSize(14),
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(8),
                
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:fontColor,
                fontSize:fontSize,
            },
            FABTextStyle2:
            {
                paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(14),    
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:fontColor,
                fontSize:fontSize
            },
            FABTextStyle3:
            {
                paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(14),    
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:fontColor,
                fontSize:PixelRatio.getPixelSizeForLayoutSize(8),
            },
            IconStyle:
            {
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(6)
            },
            ImageStyle:
            {
                width:PixelRatio.getPixelSizeForLayoutSize(20),
                height:PixelRatio.getPixelSizeForLayoutSize(20),
            },
            ImageContainer:
            {
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(6),
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
        if(icon)
        {
            return (
                <>
                    <Icon
                    name={icon}
                    color='#FFF' 
                    style={styles.IconStyle}
                    type={type}
                    />
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
        <TouchableOpacity onPress={onPress} style={styles.Container}> 
                <View style={!big ? SelectStyle() : styles.FABstyle2}> 
                
                    <TheresIcon/>

                </View>

        </TouchableOpacity>
    )
}


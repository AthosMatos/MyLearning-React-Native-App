import React from "react"
import { TouchableOpacity,Text,StyleSheet,PixelRatio,View } from "react-native"
import { Icon } from "react-native-elements"

export default ({text,onPress,color,icon}) =>
{
    if(!color)
    {
        color="#FF7300"
    }

    const styles = StyleSheet.create(
        {
            Container:
            {
                backgroundColor:color,
                borderRadius:PixelRatio.getPixelSizeForLayoutSize(20),
                elevation:PixelRatio.getPixelSizeForLayoutSize(2),
            },
            FABstyle:
            {
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row'
            },
            FABTextStyle:
            {
                paddingRight:PixelRatio.getPixelSizeForLayoutSize(14),
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(8),
                
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:'#FFF',
                fontSize:PixelRatio.getPixelSizeForLayoutSize(6),
            },
            FABTextStyle2:
            {
                paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(14),    
                paddingVertical:PixelRatio.getPixelSizeForLayoutSize(6),
                color:'#FFF',
                fontSize:PixelRatio.getPixelSizeForLayoutSize(6),
            },
            IconStyle:
            {
                paddingLeft:PixelRatio.getPixelSizeForLayoutSize(6)
            },
        }
    )

    return(
        <TouchableOpacity onPress={onPress} style={styles.Container}>
            {icon ? 
                <View style={styles.FABstyle}> 
                    <Icon
                    name={icon}
                    color='#FFF' 
                    style={styles.IconStyle}/>
                    <Text style={styles.FABTextStyle}>{text}</Text>
                </View>
                :
                <View style={styles.FABstyle}> 
                    <Text style={styles.FABTextStyle2}>{text}</Text>
                </View>
            }
        </TouchableOpacity>
    )
}


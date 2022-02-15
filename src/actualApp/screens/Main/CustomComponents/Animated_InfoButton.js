import React,{useEffect} from "react"
import {TouchableOpacity} from "react-native"
import { Icon } from "react-native-elements";
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated";
import {width} from '../styles'
import { SecondaryColor } from "../../../../Defaults";
import ResponsiveStuff from "../../../Helpers/ResponsiveStuff";

var offsetY
var offsetScale

export function InAnimation()
{
        offsetY.value = withSpring(0,{mass:0.8})   
        offsetScale.value = withSpring(1)  
}

export default InfoButtom = ({navigation}) =>
{
    useEffect(()=>{
        offsetY.value = withSpring(0,{mass:0.8})   
    },[])

    offsetY = useSharedValue(-width)
    offsetScale = useSharedValue(1)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            //opacity:offset.value,
            transform:[
                {translateY:offsetY.value},
                {scale:offsetScale.value},
            ]
        }
    },[])

    return (
        <Animated.View
        style={[
            //AnimatedStyle
        ]}
        >
            <TouchableOpacity 
            style={{flexDirection:'row',flex:1,justifyContent:'flex-start',alignItems:'center'}} 
            onPress={()=>
                {
                    //SuperZoomButtonPressAnimation(offsetScale)
                    navigation.navigate('Info')
                }}>
                <Icon name='info' color={SecondaryColor} size={ResponsiveStuff.get_number_ResponsiveLayoutWidthBased(0.1)}/>
            </TouchableOpacity>
        </Animated.View>
        
    )
}

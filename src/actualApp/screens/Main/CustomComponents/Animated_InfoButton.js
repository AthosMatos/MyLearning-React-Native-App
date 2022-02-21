import React,{useEffect} from "react"
import {TouchableOpacity} from "react-native"
import { Icon } from "react-native-elements";
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated";
import {width} from '../styles'
import { SecondaryColor } from "../../../../Defaults";
import ResponsiveStuff from "../../../Helpers/ResponsiveStuff";
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";

var offsetY
var offsetScale

export default InfoButtom = () =>
{
    const navigation = useNavigation()
    
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
           // {borderWidth:2,borderColor:'black'},
            //AnimatedStyle
        ]}
        >
            <TouchableOpacity 
            onPress={()=>
                {
                    //SuperZoomButtonPressAnimation(offsetScale)
                    navigation.navigate('Info')
                }}>
                <Icon name='info' color={SecondaryColor} iconStyle={styles.iconStyle}/>
            </TouchableOpacity>

        </Animated.View>
        
    )
}

const styles = EStyleSheet.create(
    {
        iconStyle:
        {
            fontSize:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.07),
        }
    })

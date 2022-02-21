import React,{useEffect } from "react"
import Animated,{ withSpring,useSharedValue,useAnimatedStyle } from "react-native-reanimated"
import {height} from '../styles'
import StandardButtom from "../../../Components/StandardButtom/StandardButtom"
import EStyleSheet from "react-native-extended-stylesheet"
import ResponsiveStuff from "../../../Helpers/ResponsiveStuff"
import { FontDarkColor, SecondaryColor, TerciaryColor } from "../../../../Defaults"
import { useNavigation } from "@react-navigation/native"

var offsetY
var offsetScale

export default HistoricButton = () =>
{
    const navigation = useNavigation()

    useEffect(()=>{
        offsetY.value = withSpring(0,{damping:15}) 
    },[])

    offsetY = useSharedValue(-height)
    offsetScale = useSharedValue(1)

    const AnimatedStyleEnter = useAnimatedStyle(()=>
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
        {
            flex:1,
            //borderWidth:2,borderColor:'black',
            justifyContent:'flex-end',alignItems:'center',flexDirection:'row'},
        //AnimatedStyleEnter
        ]}>
            <StandardButtom
            text={'Historico'}
            Buttonstyle={styles.buttonStyle}
            textstyle={styles.textStyle}
            onPressOut={()=>
            {
                navigation.navigate('Historic')
            }}
            />


        </Animated.View>
    )
}

const styles = EStyleSheet.create(
    {
        buttonStyle:
        {
            backgroundColor:TerciaryColor,
            elevation:0,
            borderWidth:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.006),
            borderColor:'black',

        },
        textStyle:
        {
            color:FontDarkColor,
            fontSize:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.025),
            marginVertical:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.030),
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.06),
        }
    })
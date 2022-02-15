import React from "react"
import {Text,TouchableOpacity} from "react-native"
import styles from './styles'

export default StandardButtom = ({Buttonstyle,text,textstyle,onPress,onPressIn,onPressOut}) => 
{
    return (
    <TouchableOpacity
    style={[
        styles.Buttom,Buttonstyle
    ]}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    >
        <Text style={[styles.Text,textstyle]}>{text}</Text>
        
    </TouchableOpacity>
    )    
}




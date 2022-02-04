import React from "react"
import {Text,TouchableOpacity} from "react-native"
import styles from './styles'

export default StandardButtom = ({Buttonstyle,text,textstyle,onPress}) => 
{
    return (
    <TouchableOpacity
    style={[
        styles.Buttom,Buttonstyle
    ]}
    onPress={onPress}
    >
        <Text style={[styles.Text,textstyle]}>{text}</Text>
        
    </TouchableOpacity>
    )    
}




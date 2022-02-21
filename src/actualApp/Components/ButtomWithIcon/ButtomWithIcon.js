import React from "react"
import {ActivityIndicator, Image, Text,TouchableOpacity,View} from "react-native"
import { Icon } from "react-native-elements"
import styles from './styles'

export default ButtomWithIcon = ({Buttonstyle,ContainerInsideStyle,text,textstyle,onPress,icon,image,iconcolor,iconContainerStyle,textContainer,iconStyle,Loading}) => 
{
    return (
    <TouchableOpacity
    style={[
        styles.Buttom,Buttonstyle
    ]}
    onPress={onPress}
   
    >
        <View style={[styles.ContainerInside,ContainerInsideStyle]}>

            {icon&& <View style={[
                styles.iconContainerStyle,iconContainerStyle]}>
                    <Icon name={icon} type={'font-awesome'} iconStyle={[styles.iconStyle,iconStyle]} color={iconcolor} />
            </View>}
            {image&& <View style={[
                styles.iconContainerStyle,iconContainerStyle]}>
                    <Image source={image} style={[styles.imageStyle,iconStyle]} />
            </View>
            }
            {Loading&& 
            <View style={[
                styles.iconContainerStyle,iconContainerStyle]}>
                    <ActivityIndicator color={iconcolor} size={"large"}/>
            </View>}
            {text&& <View style={[styles.textContainer,textContainer]}>
                <Text style={[styles.Text,textstyle]}>{text}</Text>
            </View>}

        </View>     

    </TouchableOpacity>
    )    
}




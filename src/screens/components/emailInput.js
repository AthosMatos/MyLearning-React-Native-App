import React from 'react'
import {StyleSheet,Image,View,TextInput} from 'react-native'

const styles = StyleSheet.create({

    Icon:
    {
        width:24,
        height:24,
        marginLeft: 20,
    },
    TxtInputS:
    {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    ViewStyle:
    {
        width: "100%",
        height: 65,
        backgroundColor: "#ECECEC",
        flexDirection: "row",
        borderRadius: 35,
        alignItems: "center",
        marginBottom: 15,
    },

})

export default ({value,onChangeText}) =>
{
    return (
        <View 
        style={styles.ViewStyle}>

            <Image style={styles.Icon}
            source = {require('../../assets/Icons/icon-mail.png')}/>

            <TextInput
            style={styles.TxtInputS}
            placeholder={"Email"}
            placeholderTextColor="#9B9B9B"
            value={value}    
            onChangeText={onChangeText}   
            color="#9B9B9B"            
            />

        </View>

    )
}
import React from 'react'
import {StyleSheet,Image,View,TextInput,TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({

    KeyIcon:
    {
        width:24,
        height:24,
        marginLeft: 20,
    },
    EyeIcon:
    {
        width:24,
        height:24,
        marginRight: 20,
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
    showPassword=true

    function changePasswordState()
    {
        if(showPassword)
        {
            showPassword=false
        }
        else
        {
            showPassword=true
        }
    }
    return (
        <View 
        style={styles.ViewStyle}>

            <Image style={styles.KeyIcon}
            source = { require('../../assets/Icons/icon-key.png') }/>

            <TextInput
            style={styles.TxtInputS}
            placeholder={"Senha"}
            placeholderTextColor="#9B9B9B"
            value={value}    
            onChangeText={onChangeText}   
            color="#9B9B9B"
            secureTextEntry={showPassword}
            />

            <TouchableOpacity
            onPress={changePasswordState}
            >
                <Image style={styles.EyeIcon}
                source = {require('../../assets/Icons/icon-eye.png')}/>
            </TouchableOpacity>

        </View>

    )
}
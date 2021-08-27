import React from 'react'
import styled from 'styled-components'
import {StyleSheet,Image} from 'react-native'

const InputArea = styled.View`
    width: 100%;
    height: 65px;
    background-color: #ECECEC;
    flex-direction: row;
    border-radius: 30px;
    
    align-items: center;
    margin-bottom: 15px;
    `
const Input = styled.TextInput`
    flex: 1
    font-size: 16px
    color: 

`
const styles = StyleSheet.create({

    Icon:
    {
        width:24,
        height:24,
        marginLeft: 20,
    },

})

export default ()=>
{
    return (
        <InputArea>
               <Image style={styles.Icon}
               source = {require('../../src/assets/Icons/icon-mail.png')}/>
        </InputArea>

    )
}
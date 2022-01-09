import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
    align-items:center
`;

export const InputArea = styled.View`
    width: 95%
    flex-direction: row;
   
    
`
export const InputExternalArea = styled.SafeAreaView`
    width: 100%
    height: 100%
    margin-top: 5%
    align-items:center
    background-color: #FF7605
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
`

export const CustomButton = styled.TouchableOpacity`
    height: 65px;
    border-radius: 35px;
    flex: 1
    justify-content:center;
    align-items: center;
    margin-horizontal: 10px


`
export const CustomButtonText = styled.Text`
    color: #FFFFFF`

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
    `

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #268596
    `

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left:5px
    `

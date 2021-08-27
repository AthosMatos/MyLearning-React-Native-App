import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FF7605;
    flex: 1;
    align-items:center
`;

export const InputArea = styled.View`
    width: 90%
   
    
`
export const InputExternalArea = styled.SafeAreaView`
    width: 100%
    flex:1
    align-items:center
    background-color: #FFFFFF
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`

export const CustomButton = styled.TouchableOpacity`
    height: 65px;
    background-color: #7605FF;
    border-radius: 30px;
    justify-content:center;
    align-items: center;


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
    color: #268596`

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left:5px
    
    `

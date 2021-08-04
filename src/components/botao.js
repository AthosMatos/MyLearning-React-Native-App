import React from "react";
import { Button } from "react-native";

export default function()
{
    return (
        <>
        <Button 
            title="Botao1"
            onPress={executar}
        />
        </>
        )
}

function executar()
{
    console.warn('Clique Botao1')
}
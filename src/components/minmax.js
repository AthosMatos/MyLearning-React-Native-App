import React from "react";
import { Text } from "react-native";
import estilo from "./styles"

export default function({maximu,minimu})
{
    console.warn(minimu)
    console.warn(maximu)
    return <Text style = {estilo.txtG}>O valor {maximu} é maior que o valor {minimu}</Text>
} 
import React from "react"
import { View } from "react-native"
import Month from "./Month"
import SpaceMonitor from "./SpceMonitor"
import { styles } from "./styles"

const CustomHeader = () =>
{
    return (
        <View style={styles.header}>
        
            <Month/>
            <SpaceMonitor/>
                
        </View>
    )
}

export default CustomHeader
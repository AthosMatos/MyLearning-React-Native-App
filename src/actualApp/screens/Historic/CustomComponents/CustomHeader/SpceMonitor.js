import React, { useCallback, useState } from "react"
import { styles } from "./styles"
import { Dimensions, Text, View } from "react-native"
import { ProgressBar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import RNFS from 'react-native-fs'

const SpaceMonitor = () =>
{
    const [spaceinfo,setspaceinfo] = useState({})

    useFocusEffect(
        useCallback(()=>
        {
            RNFS.getFSInfo()
            .then ((info) => {
            setspaceinfo({
                totalSpace:((info.totalSpace / 1024)*0.001)*0.001,
                MB:(info.freeSpace / 1024)*0.001,
                GB:((info.freeSpace / 1024)*0.001)*0.001,
                Progress:(((info.freeSpace / 1024)*0.001)*0.001)/(((info.totalSpace / 1024)*0.001)*0.001),
                })

                //console.log((((info.freeSpace / 1024)*0.001)*0.001))
                //console.log((((info.totalSpace / 1024)*0.001)*0.001))
                //console.log((((info.freeSpace / 1024)*0.001)*0.001)/(((info.totalSpace / 1024)*0.001)*0.001))
            })

            return () =>
            {

            }
        },[])
    )
   

    return (
        <View style={styles.SpaceInfoContainer}>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style=
                    {styles.SpaceInfoText}
                    >Espaço Utilizado: </Text>

                    <Text style=
                    {styles.SpaceInfo}
                    >{Math.round(spaceinfo.GB * 100) / 100} GB de {Math.round(spaceinfo.totalSpace * 100) / 100} GB</Text>   
                </View>

                
                <ProgressBar 
                style={styles.ProgressBar} 
                color="rgba(255,255,255,1)" 
                progress={spaceinfo.Progress}
                />
            </View>
        </View>
        
    )
}

export default SpaceMonitor
import { SharedElement } from "react-navigation-shared-element";
import React from "react";
import { Image} from 'react-native'
import { styles } from "../styles";

export default SharedElement_Logo = () =>
{
    return (
        <SharedElement id="image" style={styles.logoContainer}>
            <Image style={styles.logo} 
            source = { 
                //require('../../../assets/logo.png') 
                require('../../../../assets/newOldLogo.png') 
            }/>
        </SharedElement>  
    )
}
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import Animated from "react-native-reanimated";
import { styles } from "../styles";
import { PrimaryColor } from "../../../../Defaults";

export default AnimatedActivityIndicator = ({reanimatedStyle}) =>
{
    return (
        <Animated.View 
        style={[
        reanimatedStyle,
        ]}
        >
            <ActivityIndicator style={styles.activityindicator} size="large" color={PrimaryColor}/>

        </Animated.View>
    )
}
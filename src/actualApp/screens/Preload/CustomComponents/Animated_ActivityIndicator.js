import React from "react";
import { ActivityIndicator } from "react-native-paper";
import Animated from "react-native-reanimated";7

export default AnimatedActivityIndicator = ({reanimatedStyle}) =>
{
    return (
        <Animated.View 
        style={[
        reanimatedStyle,
        ]}
        >
            <ActivityIndicator size="large" color="#EF233C"/>

        </Animated.View>
    )
}
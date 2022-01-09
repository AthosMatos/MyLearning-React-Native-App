import { StyleSheet,PixelRatio } from "react-native"

export const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logoContainer:
        {
            justifyContent: "center",
            alignItems: "center",
            marginTop:"0%",
            marginBottom:"40%",

        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            resizeMode:'contain'
        },
        newOldlogo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            resizeMode:'contain'
        },
    }
)
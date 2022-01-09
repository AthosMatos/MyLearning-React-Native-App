import { PixelRatio,Dimensions,StyleSheet } from "react-native"

export const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
        },
        UpperButtonsView:
        {
            flexDirection:'row',
            alignItems:'center',
            marginRight:PixelRatio.roundToNearestPixel(10),
            marginTop:PixelRatio.roundToNearestPixel(10)
        },
        BottomButtonsView:
        {
            justifyContent:'space-evenly',
            flexDirection:'row',
            paddingBottom:PixelRatio.getPixelSizeForLayoutSize(20),
        },
        UploadStatusView:
        {
            justifyContent:'center',
            alignItems:'center'
        },

    }
)
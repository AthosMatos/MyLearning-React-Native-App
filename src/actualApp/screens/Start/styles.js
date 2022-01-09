import { StyleSheet,PixelRatio,Dimensions} from 'react-native'

export const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(110),
            width:PixelRatio.getPixelSizeForLayoutSize(110),
            resizeMode:'contain'
        },
        newOldlogo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(110),
            width:PixelRatio.getPixelSizeForLayoutSize(110),
            resizeMode:'contain'
        },
        AnimatedButton:
        {
            justifyContent:'flex-end',
            alignItems:'center',
            flex: 1,
            paddingBottom:height*0.2
        },
    }
)
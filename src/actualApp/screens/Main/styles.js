import { PixelRatio,Dimensions } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { TerciaryColor,PrimaryColor, ComplementaryColor } from "../../../Defaults"
import ResponsiveStuff from "../../Helpers/ResponsiveStuff";

export const {width, height} = Dimensions.get('window')

export const styles = EStyleSheet.create(
    {
        Container:
        {
            backgroundColor: TerciaryColor,
            flex: 1,
        },
        UpperButtonsView:
        {
            //borderWidth:2,borderColor:'black',
            flexDirection:'row',
            alignItems:'center',
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.02),
            marginTop:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.01),
        },
        BottomButtonsView:
        {
            //borderColor:'blue',borderWidth:2,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            marginBottom:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.02),
        },
        UploadStatusView:
        {
            justifyContent:'center',
            alignItems:'center'
        },   
        Buttom1Style:
        {
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.01),
            flexGrow:1,
            //width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.18),
            //height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.18),
        },
        
        Buttom2Style:
        {
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.01),
            flexGrow:1,
            backgroundColor:PrimaryColor,
            //width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.18),
            //height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.18),
        },
        Buttom3Style:
        {
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.01),
            flexGrow:1,
            backgroundColor:'red',
        },
        iconsize:
        {
            fontSize:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.08),
        },
        imgsize:
        {
            width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.08),
            height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.08),
        },
        font:
        {
            fontWeight:'bold'
        },
        onload:
        {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:ComplementaryColor,
            borderRadius:PixelRatio.getPixelSizeForLayoutSize(80),
            width:ResponsiveStuff.get_number_ResponsiveLayoutWidthBased(0.28),
            height:ResponsiveStuff.get_number_ResponsiveLayoutWidthBased(0.28),
        }
    }
)


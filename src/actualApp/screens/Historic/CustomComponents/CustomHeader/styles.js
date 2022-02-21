import EStyleSheet from "react-native-extended-stylesheet"
import { FontSize_ResponsiveNumber, FontSize_ResponsiveRem, PrimaryColor, SecondaryColor, TerciaryColor } from "../../../../../Defaults"
import ResponsiveStuff from "../../../../Helpers/ResponsiveStuff"

export const styles = EStyleSheet.create({
    SpaceInfoText:
    {
        fontSize:FontSize_ResponsiveNumber,
        fontWeight:'bold',
        color:TerciaryColor,
    },
    SpaceInfo:
    {
        fontSize:FontSize_ResponsiveNumber,
        fontWeight:'bold',
        color:TerciaryColor,
    },
    MonthText:
    {
        fontSize:ResponsiveStuff.get_number_ResponsiveLayoutWidthBased(0.06),
        fontWeight:'bold',
        color:TerciaryColor,
        marginLeft:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.01)
    },
    header:
    {
        flexDirection:'row',
        backgroundColor:PrimaryColor,
        height:ResponsiveStuff.get_number_ResponsiveLayoutHeightBased(0.1),
        alignItems:'center',
        elevation:ResponsiveStuff.get_number_ResponsiveLayoutHeightBased(0.02)
    },
    ProgressBar:
    {
        width:ResponsiveStuff.get_number_ResponsiveLayoutWidthBased(0.58),
    },
    SpaceInfoContainer:
    {
        flex:1,
        alignItems:'flex-end',
        marginRight:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.01)
    }

})
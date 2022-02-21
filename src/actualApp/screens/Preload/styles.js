import EStyleSheet from "react-native-extended-stylesheet"
import ResponsiveStuff from '../../Helpers/ResponsiveStuff'
import {TerciaryColor} from '../../../Defaults'

export const styles = EStyleSheet.create(
    {
        Container: 
        {
            backgroundColor: TerciaryColor,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logo:
        {
            height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.3),
            width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.3),
            resizeMode:'contain'
        },
        activityindicator:
        {
            //borderColor:'black',borderWidth:1,
            transform:[{scale:parseFloat(ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.3,100))}]
        },
        activityindicatorContainer:
        {
            marginTop:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.2),
        }
    }
)
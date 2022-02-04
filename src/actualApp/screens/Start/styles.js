import {Dimensions} from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet"
import ResponsiveStuff from '../../Helpers/ResponsiveStuff'
import { TerciaryColor } from '../../../Defaults'

export const {width, height} = Dimensions.get('window')

export const styles = EStyleSheet.create(
    {
        Container: 
        {
            backgroundColor: TerciaryColor,
            flex: 1,
        },
        logo:
        {
            alignSelf:'center',
            marginTop: ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.05),
            height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.4),
            width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.4),
            resizeMode:'contain',
        },
        AnimatedButton:
        {
            flex: 1,
            justifyContent:'flex-end',
            alignSelf:'center',
            marginBottom:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.1)
        },
    }
)



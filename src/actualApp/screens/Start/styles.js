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
            marginTop: ResponsiveStuff.get_number_ResponsiveLayoutHeightBased(0.12),
            height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.4),
            width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.4),
            resizeMode:'contain',
        },
        AnimatedButton:
        {
            flex: 1,
            //borderWidth:2,
            //borderColor:'black',
            marginTop:ResponsiveStuff.get_number_ResponsiveLayoutHeightBased(0.08),
            justifyContent:'center',
            alignSelf:'center',
            
        },
    }
)



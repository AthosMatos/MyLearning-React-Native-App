import ResponsiveStuff from '../../Helpers/ResponsiveStuff'
import EStyleSheet from 'react-native-extended-stylesheet'
import { FontDarkColor } from '../../../Defaults'

export default styles = EStyleSheet.create(
    {
        Text:{
            color:FontDarkColor, 
            fontWeight:'bold',
            paddingVertical:ResponsiveStuff.get_number_ResponsiveLayoutHeightBased(0.02),
            fontSize:ResponsiveStuff.get_number_ResponsiveLayoutWidthBased(0.05)
        },
        activityindicator:
        {
            transform:[{scale:parseFloat(ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.3,100))}]
        }
        
    })
import EStyleSheet from 'react-native-extended-stylesheet'
import ResponsiveStuff from '../../Helpers/ResponsiveStuff'
import { SecondaryColor,FontLightColor } from '../../../Defaults'

export default styles = EStyleSheet.create(
    {
        Buttom:{
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            backgroundColor:SecondaryColor,
            borderRadius:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.1),
            elevation:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.02)
        },
        Text:
        {
            color:FontLightColor,
            fontSize:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.025),
            marginVertical:ResponsiveStuff.get_rem_ResponsiveLayoutHeightBased(0.022),
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.08),
        }
    })
import EStyleSheet from 'react-native-extended-stylesheet'
import ResponsiveStuff from '../../Helpers/ResponsiveStuff'
import { SecondaryColor,FontLightColor } from '../../../Defaults'

export default styles = EStyleSheet.create(
    {
        Buttom:
        {
            backgroundColor:SecondaryColor,
            borderRadius:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.035),
            elevation:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.02)
        },
        Text:
        {
            color:FontLightColor,
            fontSize:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.025),
        },
        iconStyle:
        {
            fontSize:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.05),
        },
        imageStyle:
        {
            width:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.05),
            height:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.05),
        },
        iconContainerStyle:
        {
            justifyContent:'center',
            alignItems:'flex-start',
            marginBottom:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.02)
            //borderColor:'white',
            //borderWidth:2
        },
        ContainerInside:
        {
            marginVertical:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.04),
            marginHorizontal:ResponsiveStuff.get_rem_ResponsiveLayoutWidthBased(0.04),
        },
        textContainer:
        {
            justifyContent:'center',
            alignItems:'flex-start',
            //borderColor:'white',
            //borderWidth:2
        }
    })
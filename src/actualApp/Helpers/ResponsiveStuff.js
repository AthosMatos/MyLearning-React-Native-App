import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('window')

class ResponsiveStuffStatic
{
    get_rem_ResponsiveLayoutWidthBased(Size,Divider)
    {
        if(typeof Divider!=="undefined"){ return (((width*Size)/Divider)+'rem')}
        return (((width*Size)/10)+'rem')
    }
    get_rem_ResponsiveLayoutHeightBased(Size,Divider)
    {
        if(typeof Divider!=="undefined"){ return (((height*Size)/Divider)+'rem')}
        return (((height*Size)/10)+'rem')
    }
    get_rem(Size,Divider)
    {
        if(typeof Divider!=="undefined"){ return ((Size/Divider) +'rem')}
        return ((Size/10) +'rem')
    }
    get_number_ResponsiveLayoutWidthBased(Size,Divider)
    {
        if(typeof Divider!=="undefined"){ return (width*Size)/Divider}
        return width*Size
    }
    get_number_ResponsiveLayoutHeightBased(Size,Divider)
    {
        if(typeof Divider!=="undefined"){ return (height*Size)/Divider}
        return height*Size
    }
}
const ResponsiveStuff = new ResponsiveStuffStatic

export default ResponsiveStuff
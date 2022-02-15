import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('window')

class ResponsiveStuffStatic
{
    get_rem_ResponsiveLayoutWidthBased(Size,Divider,customWidth)
    {
        let widthtouse
        if(typeof customWidth!=="undefined") {widthtouse=  customWidth}
        else {widthtouse = width}
        
        if(typeof Divider!=="undefined"){ return (((widthtouse*Size)/Divider)+'rem')}
        return (((widthtouse*Size)/10)+'rem')
    }
    get_rem_ResponsiveLayoutHeightBased(Size,Divider,customHeight)
    {
        let heighttouse
        if(typeof customHeight!=="undefined") {heighttouse = customHeight}
        else {heighttouse = height}

        if(typeof Divider!=="undefined"){ return (((heighttouse*Size)/Divider)+'rem')}
        //console.log('returnlog',((heighttouse*Size)/10)+'rem');
        return (((heighttouse*Size)/10)+'rem')
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
    get_number_ResponsiveImageAspectRatio(reference,ratio1,ratio2)
    {
        return(parseInt(reference)/parseInt(ratio1))*parseInt(ratio2)
    }
}
const ResponsiveStuff = new ResponsiveStuffStatic

export default ResponsiveStuff
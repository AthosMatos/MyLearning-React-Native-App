import {withSpring} from 'react-native-reanimated'
import { Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const twoPercentHeight = height*0.02
const twoPercentWidth = width*0.02

export function DeliciousButtonPressAnimation(offset,callback)
{
    offset.value = withSpring(1.1,0,()=>
    {
        offset.value = withSpring(0)
       
    })
    if(callback)callback()
}


export function SuperZoomButtonPressAnimation(offset)
{
    offset.value = withSpring(0.9,0,()=>
    {
        offset.value = withSpring(10)
    })
}

export function OutJelloDown(offset)
{
    offset.value = withSpring(-twoPercentHeight,{overshootClamping:4},()=>
    {
        offset.value = withSpring(height)
    })
}
export function OutJelloUp(offset)
{
    offset.value = withSpring(twoPercentHeight,{overshootClamping:4},()=>
    {
        offset.value = withSpring(-height)
    })

}
export function OutJelloLeft(offset)
{
    offset.value = withSpring(twoPercentWidth,{overshootClamping:4},()=>
    {
        offset.value = withSpring(-width)
    })
}
export function OutJelloRight(offset)
{
    offset.value = withSpring(-twoPercentWidth,{overshootClamping:4},()=>
    {
        offset.value = withSpring(width)
    })

}
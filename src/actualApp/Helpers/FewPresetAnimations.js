import {withSpring} from 'react-native-reanimated'

export function DeliciousButtonPressAnimation(offset)
{

    offset.value = withSpring(1.1,0,()=>
    {
        offset.value = withSpring(0)
    })
    
}

export function SuperZoomButtonPressAnimation(offset)
{
    offset.value = withSpring(0.9,0,()=>
    {
        offset.value = withSpring(10)
    })

}
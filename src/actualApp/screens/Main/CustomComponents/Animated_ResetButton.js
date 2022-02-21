import React,{useEffect} from 'react'
import Animated,{ withSpring,useSharedValue,useAnimatedStyle} from "react-native-reanimated"
import { TerciaryColor } from '../../../../Defaults'
import { styles } from '../styles'
import ButtomWithIcon from '../../../Components/ButtomWithIcon/ButtomWithIcon'

var offsetScale,offsetY


export default ResetButton = ({show,setphoto,setshowReset}) =>
{
    useEffect(()=>{
        if(show)
        {
            offsetScale.value=0
            offsetY.value=0
            offsetScale.value = withSpring(1)
        }
        
    },[show])
    
    offsetScale = useSharedValue(0)
    offsetY = useSharedValue(0)

    const AnimatedStyle = useAnimatedStyle(()=>
    {
        return{
            opacity:offsetScale.value,
            transform:[
                {scale:offsetScale.value},
                {translateY:offsetY.value}
            ],
        }
    },[])

    return(
        <>
        {show&&
        <Animated.View 
        style={[   
        //AnimatedStyle,
        {flexGrow:1}
        ]}>

        <ButtomWithIcon 
        icon={'close'} 
        iconcolor={TerciaryColor} 
        Buttonstyle={styles.Buttom3Style}
        ContainerInsideStyle={{alignItems:'center',justifyContent:'center',}}
        iconContainerStyle={{marginBottom:0}}
        iconStyle={styles.iconsize}
        textstyle={styles.font}
        onPress={()=>{ 
            offsetScale.value = withSpring(1.1)
            offsetScale.value = withSpring(0)
            
            setshowReset(false)
            setphoto(undefined)
            
        }}
        /> 
        </Animated.View>
        }
        </>
        

    )
}
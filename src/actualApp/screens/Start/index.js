import React, { useState,useEffect} from "react";
import { Image, StyleSheet, View,StatusBar,PixelRatio,Dimensions,BackHandler,Text} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import FAB from '../../Components/FAB'
import * as Animatable from 'react-native-animatable'
import PopoverTooltip from 'react-native-popover-tooltip';

const {width, height} = Dimensions.get('window')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 1
    };
  }
  render() {
    return (
      <View style={{flex:1, alignSelf:'stretch', alignItems:'center', justifyContent:'flex-start', backgroundColor:'#fff'}}>

        <Text>Button Expansion</Text>
        <PopoverTooltip
          ref='tooltip3'
          buttonComponent={
            <View style={{width:200, height:50, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
              <Text>
                Press Me
              </Text>
            </View>
          }
          items={[
            {
              label: 'Item 1',
              onPress: () => {}
            },
            {
              label: 'Item 2',
              onPress: () => {}
            }
          ]}
          animationType='spring'
          buttonComponentExpandRatio={1.2} // ratio of button component expansion after tooltip poped up
          />

      </View>
    )
  }
}


const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#EDF2F4",
            flex: 1,
        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(110),
            width:PixelRatio.getPixelSizeForLayoutSize(110),
            resizeMode:'contain'
        },
        newOldlogo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(110),
            width:PixelRatio.getPixelSizeForLayoutSize(110),
            resizeMode:'contain'
        },
    }
)

const mainscreen = ({navigation}) =>
{
    const [Button_Anim,setButton_Anim] = useState('slideInUp')
    const [Logo_Anim,setLogo_Anim] = useState('')
    const [toolTipVisible,settoolTipVisible] = useState(false)
    var backHandler
    
    useEffect(() => {

        const backAction = () => 
        {
            setLogo_Anim('')
            setButton_Anim('slideInUp')
        }
        
        backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )
        return () => backHandler.remove()
      }, [])

    return (
        <SafeAreaView style = {styles.Container}>
            
            <StatusBar
            backgroundColor = "#EDF2F4"
            barStyle={'dark-content'}/>

            <App/>
            
            <Animatable.View 
            animation={Logo_Anim}
            direction="normal"
            duration={800}
            useNativeDriver
            easing='ease'
            style={{
                alignItems:'center',
                flex: 1,
                paddingTop: height*0.1,
            }}
            >
                <SharedElement id="image">
                    <Image style={styles.logo}
                    source = { 
                        require('../../../assets/logo.png') 
                        //require('../../../assets/newOldLogo.png') 
                        }/>
                </SharedElement>
            </Animatable.View>
                     
            <Animatable.View
            style={{
                justifyContent:'flex-end',
                alignItems:'center',
                flex: 1,
                paddingBottom:height*0.2
            }}
            animation={Button_Anim}
            direction="normal"
            duration={800}
            useNativeDriver
            easing='ease'
            >
                <FAB 
                text="Começar" 
                height={PixelRatio.getPixelSizeForLayoutSize(25)} 
                width={PixelRatio.getPixelSizeForLayoutSize(65)}
                color={'#2B2D42'} 
                
                onPress={()=>
                    {
                        setLogo_Anim('slideOutUp')
                        setButton_Anim('slideOutDown')
                        navigation.navigate('MainScreen')  
                          
                    }}
                    />
            </Animatable.View>

            
        </SafeAreaView>
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'image',animation: 'move',resize:'auto'}, 
]

export default mainscreen

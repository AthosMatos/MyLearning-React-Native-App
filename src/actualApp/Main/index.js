import React,{useState} from "react";
import { Image, StyleSheet, View,StatusBar,Button,PixelRatio,Dimensions } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from '../Components/Carousel'
import Modal from 'react-native-modal'
import { SharedElement } from "react-navigation-shared-element";
import FAB from "../Components/FAB";

const styles = StyleSheet.create(
    {
        Container: 
        {
            backgroundColor: "#FFF",
            flex: 1,
        },
        logo:
        {
            height:PixelRatio.getPixelSizeForLayoutSize(80),
            width:PixelRatio.getPixelSizeForLayoutSize(80),
            transform:[{scale:1.1}],
            resizeMode:'center'
        },
        Container2:
        {
            alignItems: "center",
            flex: 1,
        },
        logoContainer:
        {
            alignItems:'center',
            position:'absolute',
            top:(Dimensions.get('window').height)*0.2,
        },
    }
)


const mainscreen = ({navigation}) =>
{  
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
        <SafeAreaView style = {styles.Container}>
            
            <StatusBar
            backgroundColor = "#FFF"
            barStyle={'dark-content'}/>

            <Modal isVisible={isModalVisible}>
                <Carousel />

                <Button title="toogle modal" onPress={toggleModal} />
            </Modal>

            <View style={styles.Container2}>

            <SharedElement id="button" style={{  
                alignItems:'center',
                position:'absolute',
                top:(Dimensions.get('window').height)*0.72,}}
                >          
                    <FAB text="Tirar Foto" onPress={()=>{navigation.navigate('CameraTest')}} color='#7605FF' icon='camera-alt'/>
                </SharedElement>
            </View>

            {/*<Button title="toogle modal" onPress={toggleModal} />*/}
            {/*<ActivityIndicator size="large" color="#FF7605"/>*/}

        </SafeAreaView>
    )
}

mainscreen.sharedElements = (route, otherRoute, showing) =>
[
    {id: 'button',animation: 'fade',resize:'auto'}
]


export default mainscreen

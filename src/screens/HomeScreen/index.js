import React from "react";
import {Image, StyleSheet, View,Dimensions,Text,TouchableOpacity,PixelRatio} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {Header,Card} from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create(
    {
        logo:
        {
            height:50,
            width:50,
            resizeMode:'center',
            borderRadius:Dimensions.get('window').width*0.4,
        },
        logocontainer:
        {
            marginTop:"-20%",
        },
        MainText: 
        {
            fontSize:20,
            color:"#868686",
            paddingHorizontal: 10
        },          
    }
)

export default ({route}) =>
{
    const navigation = useNavigation()
    const UserData = route.params.userData
    const FotoW = Dimensions.get('window').width*0.46
    const FotoH = Dimensions.get('window').height*0.3

    function onCameraClick()
    {
        navigation.navigate('CameraTest')
    }

    const HorizontalCardsView = () =>
    (
        <>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
                
                <Cards source={require('../../assets/imagetest.jpeg')}/>

            </ScrollView>
        </>
    )
    const HorizontalButtonsView = () =>
    (
        <>
        <View>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop:"5%"}}>
                <ButtonIcon onPress={onCameraClick}
                    IconName = 'camera-outline'
                    />
                <ButtonIcon IconName = 'image'/>
                <ButtonIcon IconName = 'star-outline'/>
                <ButtonIcon IconName = 'cloud-upload'/>
                <ButtonIcon IconName = 'help'/>
                <ButtonIcon IconName = 'help'/>
                <ButtonIcon IconName = 'help'/>
                <ButtonIcon IconName = 'help'/>

            </ScrollView>
        </View>   
        </>
    )

    function ButtonIcon({IconName,onPress})
    {
        let IconSize = PixelRatio.getPixelSizeForLayoutSize(22)
        let OutIconSize = 1.3

        return (
        <>
            <TouchableOpacity 
            style = {{
                backgroundColor: "#6900FF",
                width: IconSize * OutIconSize,
                height: IconSize * OutIconSize,
                borderRadius: Dimensions.get('window').width * 0.04,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: Dimensions.get('window').width * 0.03,
                }}
            onPress={onPress}>
                <Icon
                name = {IconName}
                color = {"#FFF"}
                size = {IconSize}
                />     
            </TouchableOpacity>   
        </>
        )
    }  
    function Cards({source})
    {
        return (
            <>
            <TouchableOpacity
             onPress={()=>{navigation.navigate('ShrimpScreen',{route:source})}}
            >
                 <Card containerStyle = {{
                    width:FotoW,
                    height:FotoH,
                    borderRadius: 20,
                    justifyContent:'center', 
                    alignItems:'center',
                    elevation:10
                    }}
                    >
                   
                   <Image style = {{
                    width:FotoW , 
                    height:FotoH ,
                    borderRadius: 20,
                    }}
                    source = {source}/> 
                </Card>
            </TouchableOpacity>          
            </>
        )
    }
      
    return (
        <SafeAreaView>
            <Header
                statusBarProps = 
                {{ 
                    barStyle: 'light-content',
                    backgroundColor: '#FF7605'  
                }}
                /*leftComponent = 
                {{ 
                    icon: 'menu', 
                    color: '#fff', 
                    iconStyle: { color: '#fff' } 
                }}*/

                leftComponent = 
                {{ 
                    text: UserData.name, 
                    style: { color: '#fff', fontSize: 15, fontWeight: '700' } 
                }}

                rightComponent = 
                {
                <View style={styles.logocontainer}> 
                    <Image style={styles.logo} 
                    source = {{uri: UserData.avatar}}/> 
                </View>
                }

                containerStyle = 
                {{
                    backgroundColor: '#FF7605',  
                   // borderBottomLeftRadius: 50,
                   // borderBottomRightRadius: 50,
                    //height:"50%",
                    alignItems: "flex-start" 
                }}/>

            <ScrollView style={{
                paddingVertical: Dimensions.get('window').height * 0.05,
                
            }}>
                <Text 
                style={{
                    marginLeft: '5%',
                    fontSize: 22,
                    color: '#868686'
                    }}>
                Atalhos
                </Text>

               <HorizontalButtonsView/>
              
               <Text 
                style={{
                    marginTop: '15%',
                    marginLeft: '5%',
                    fontSize: 22,
                    color: '#868686'
                    }}>
                Fotos
                </Text>

                <HorizontalCardsView/>

                <Text 
                style={{
                    marginTop: '15%',
                    marginLeft: '5%',
                    fontSize: 22,
                    color: '#868686'
                    }}>
                Envios
                </Text>

                <HorizontalCardsView/>


                <View style={{marginBottom:200}}/>
            </ScrollView>
        </SafeAreaView>
    )
}
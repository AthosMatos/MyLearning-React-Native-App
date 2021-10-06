import React, {Component} from "react";
import {Image, StyleSheet, View,Dimensions,Text,FlatList,TouchableOpacity,TouchableHighlight} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {Header,Card} from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";
import Canvas from 'react-native-canvas'

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
    const UserData = route.params.userData
    //console.log(UserData)

    const HorizontalButtonsView = () =>
    (
        <>
        <View>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop:"10%"}}>
                <ButtonIcon IconName = 'camera-outline'/>
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
    function ButtonIcon({IconName})
    {
        let IconSize = Dimensions.get('window').width * 0.14
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
                }}>
                <Icon
                name = {IconName}
                color = {"#FFF"}
                size = {IconSize}
                />     
            </TouchableOpacity>   
        </>
        )
    }  

    handleCanvas = (canvas) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        ctx.fillRect(0, 0, 100, 100);
        ctx.fillStyle = 'white';
        ctx.lineWidth = 10
        ctx.beginPath()
        ctx.moveTo(10,50)
        ctx.lineTo(100,100)
        ctx.closePath()
        ctx.stroke()
    }
      
    return (
        <SafeAreaView>
            <Header
                statusBarProps = 
                {{ 
                    barStyle: 'light-content',
                    backgroundColor: '#FF7605'  
                }}
                leftComponent = 
                {{ 
                    icon: 'menu', 
                    color: '#fff', 
                    iconStyle: { color: '#fff' } 
                }}

                centerComponent = 
                {{ 
                    text: 'MY TITLE', 
                    style: { color: '#fff' } 
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
                marginVertical: Dimensions.get('window').height * 0.05,
                
            }}
            StickyHeaderComponent= {{}}>
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

                <Card containerStyle = {{
                    width:Dimensions.get('window').width*0.3,
                    height:Dimensions.get('window').height*0.2,
                    }}>
                    <Card.Title>HELLO WORLD</Card.Title>

                    <Card.Divider/>
                </Card>

                <Canvas ref={handleCanvas}/>
                    


            </ScrollView>
          
        </SafeAreaView>
    )
}
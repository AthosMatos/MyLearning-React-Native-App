import React from 'react'
import { View,Text,FlatList,Image } from 'react-native'
import users from './users'
import {ListItem,Avatar} from 'react-native-elements'


export default props =>
{

    function getUserItem({item: user})
    {
        
    }

    return (
        <View>
            <FlatList
                keyExtractor={user=>user.id.toString()}
                data={users}
                renderItem={getUserItem}
            >
            </FlatList>
        </View>
    )
}
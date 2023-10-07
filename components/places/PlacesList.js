import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constant/color'

function PlacesList({places}) {
if(!places || places.length===0){
    return (
        <View style={styles.fallBackContaiiner}>
            <Text style={styles.fallbackText}>No places found-Start Adding some</Text>
        </View>
    )
}
  return (
    <FlatList data={places} keyExtractor={(item)=>item.id} renderItem={(item)=>{<PlaceItem plaace={item}/>}}/>
  )
}

export default PlacesList;
const styles=StyleSheet.create({
    fallBackContaiiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallbackText:{
        fontSize:16,
        color:Colors.primary200
    }
})
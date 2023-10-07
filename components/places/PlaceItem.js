import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function PlaceItem({place,onSelect}) {
  return (
    <Pressable onPress={onSelect}>
<Image source={place.imageUri}/>

<View>
<Text>{place.title}</Text>
<Text>{place.address}</Text>

</View>

    </Pressable>
  )
}

export default PlaceItem;

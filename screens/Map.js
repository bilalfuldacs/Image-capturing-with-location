import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView,{Marker} from 'react-native-maps'
function Map() {
  const[selectedLocation,setSelectedLocation]=useState();
  const Region={
latitude:37.78,
longitude:-122.43,
latitudeDelta:0.0922,
longitudeDelta:0.0241,
  }
  function selectLocatonHandler(event){
    console.log(event);
const lat=event.nativeEvent.coordinate.latitude;
const long=event.nativeEvent.coordinate.longitude;
setSelectedLocation({lat:lat,long:long})
  }
  return (
    <MapView style={styles.map}initialRegion={Region} onPress={selectLocatonHandler}>
{selectedLocation &&< Marker title="Picked Locaton" coordinate={{latitude:selectedLocation.lat,longitude:selectedLocation.long}}></Marker>
 }

    </MapView>
  )
}

export default Map;
const styles=StyleSheet.create({
  map:{
    flex:1
  }
})
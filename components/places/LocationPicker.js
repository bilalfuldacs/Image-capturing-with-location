import React from "react";
import { StyleSheet, View, Button,Alert } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from "expo-location";
import { Colors } from "../../constant/color";
import { useNavigation,useRouter } from "@react-navigation/native";
function LocationPicker() {
  const navigation=useNavigation();
  const route=useRouter();
;  const [locationPermissionInformation, requestPermission] =
  useForegroundPermissions();

  //const mapPickLocation=route.params ? {lat}
  async function verifypermission() {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    } else if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(";insufficent permission. you need to add permission");
      return false;
    }
    return true;
  }
  async function getLocationHandler() {
    const hasPermission=  await verifypermission();
    if(!hasPermission){
        return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
  }
  function pickOnhandlerr() {
    navigation.navigate('MapScreen')
  }
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.action}>
        <Button title="Locate User " onPress={getLocationHandler} />
        <Button title="Pick on map" onPress={pickOnhandlerr} />
      </View>
    </View>
  );
}

export default LocationPicker;
const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

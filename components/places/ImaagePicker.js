import React, { useState } from "react";
import { View, Button, Alert, Image, StyleSheet,Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constant/color";
function ImaagePicker() {
    const [cameraPermissionStatus, requestPermission] = useCameraPermissions();
    const[pickedImage,setPickedImage]=useState();
    async function verifyPermissions()
   
    {
       if (cameraPermissionStatus.status === PermissionStatus.UNDETERMINED) {
         const permissionResponse = await requestPermission();
         return permissionResponse.granted;
       } else if (cameraPermissionStatus.status === PermissionStatus.DENIED) {
         Alert.alert(";insufficent permission. you need to add permission");
         return false;
       }
       return true;
     }
  async function takeImageHandler() {
    const hasPermission=  await verifyPermissions();
    if(!hasPermission){
        return;
    }
  
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.uri);
  }
  let imagePreview=<Text>No image available</Text>
  if(pickedImage){
    imagePreview=<Image style={styles.image} source={{uri:pickedImage} }/>
  }
  return (
    <View>
      <View style={styles.imagePreview}>
{imagePreview}
       
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImaagePicker;
const styles=StyleSheet.create({
   imagePreview:{
    width:'100%',
  height:200,
  marginVertical:8,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:Colors.primary100,
  borderRadius:4
   } ,
   image:{
    width:'100%',
    height:'100%'
   }
})

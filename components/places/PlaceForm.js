import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../../constant/color";
import ImaagePicker from "./ImaagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
          placeholder="Enter title"
        />
      </View>
      <ImaagePicker/>
      <LocationPicker/>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 36,
    color: 'white',
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    backgroundColor: "white",
    borderRadius: 8,
  },
});

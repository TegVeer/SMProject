import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Image, Alert } from "react-native";
import Colors from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImgPicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImagePicker = () => {
  const [picked, setPicked] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant Permissions to use some features of the App!",
        "Okay"
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const imageData = await ImgPicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });
    setPicked(imageData.uri);
  };

  const saveData = async () => {
   
  };

  return (
    <View>
      <View>
        <View style={[styles.round]}>
          <Image
            style={{ width: 200, height: 200 }}
            source={
              !picked ? require("../assets/profile-image.png") : { uri: picked }
            }
          />
        </View>

        <Button title="ADD IMAGE" onPress={pickImage} color={Colors.primary} />
        <Button title="SAVE" onPress={saveData} color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  round: {
    overflow: "hidden",
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 0.5,
    borderColor: Colors.highlight,
    marginTop: 100,
    marginBottom: 30
  }
});

export default ImagePicker;

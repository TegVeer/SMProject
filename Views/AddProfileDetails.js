import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../Constants/Colors";
import Header from "../Components/Designs/Header";
import MyStoryComponent from "../Components/Designs/MyStoryComponent";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Components/Designs/Input";
import Button from "../Components/Designs/Button";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Toast } from "native-base";
import { addProfileDetails } from "../Store/Actions/AuthAction";
import { serverUrl } from "../Constants/URL";

const width = Dimensions.get("window").width;
const height = (width / 16) * 7;

function AddProfileDetails(props) {
  const dispatch = useDispatch();
  const gender = useSelector((state) => state.auth.gender);
  const userId = useSelector((state) => state.auth.userId);
  const [defaultProfile, setDefaultProfile] = useState();
  const [coverImage, setCoverImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [userName, setUserName] = useState("");
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    if (gender === "Female") {
      setDefaultProfile(require("../assets/default-profile-female.jpg"));
    } else {
      setDefaultProfile(require("../assets/default-profile-male.jpg"));
    }
    setLoaded(true);
  }

  async function verifyPermissions() {
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
  }

  async function selectCoverImage() {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const imageData = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.8,
      aspect: [16, 7],
      allowsMultipleSelection: false,
    });
    if (!imageData.cancelled) {
      setCoverImage({
        key: Math.floor(Math.random() * 1000000).toString(),
        uri: imageData.uri,
        name: Date.now().toString(),
        type: imageData.type,
        saved: false,
      });
    }
  }
  async function selectProfileImage() {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const imageData = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.8,
      aspect: [1, 1],
      allowsMultipleSelection: false,
    });
    if (!imageData.cancelled) {
      setProfileImage({
        key: Math.floor(Math.random() * 1000000).toString(),
        uri: imageData.uri,
        name: Date.now().toString(),
        type: imageData.type,
        saved: false,
      });
    }
  }

  function setProfile() {
    if (!userName) {
      Toast.show({
        text: "Username required",
        buttonText: "OK",
        duration: 2000,
        type: "danger",
      });
      return;
    }
    if (profileImage && !coverImage) {
    } else if (!profileImage && coverImage) {
    } else if (profileImage && coverImage) {
      const coverForm = new FormData();
      coverForm.append("image", {
        uri: coverImage.uri,
        name: `${coverImage.name}image.jpg`,
        type: "image/jpeg",
      });

      const profileForm = new FormData();
      profileForm.append("image", {
        uri: profileImage.uri,
        name: `${profileImage.name}image.jpg`,
        type: "image/jpeg",
      });

      Promise.all([
        fetch(`${serverUrl}/upload/image`, {
          method: "POST",
          body: coverForm,
          header: {
            "Content-Type": "multipart/form-data;",
          },
        }),
        fetch(`${serverUrl}/upload/image`, {
          method: "POST",
          body: profileForm,
          header: {
            "Content-Type": "multipart/form-data;",
          },
        }),
      ])
        .then((response) => Promise.all(response.map((res) => res.json())))
        .then(([coverResult, profileResult]) => {
          const coverUrl = coverResult.path;
          const profileUrl = profileResult.path;
          fetch(`${serverUrl}/user/update/${userId}`, {
            method: "PATCH",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({
              profileImage: `${serverUrl}/${profileUrl}`,
              coverImage: `${serverUrl}/${coverUrl}`,
              userName: `@${userName}`,
            }),
          })
            .then((res) => res.json())
            .then((resp) => {
              console.log(resp);
              if (resp.message === "SUCCESS") {
                dispatch(
                  addProfileDetails(
                    userName,
                    `${serverUrl}/${profileUrl}`,
                    `${serverUrl}/${coverUrl}`
                  )
                );
                props.navigation.navigate("Home");
              }
            });
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.white, alignItems: "center" }}
    >
      <Header
        title="Add Profile Image"
        backEnable
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <TouchableOpacity
        onPress={selectCoverImage}
        style={{
          width,
          height,
        }}
      >
        <Image
          style={{
            flex: 1,
            height: null,
            width: null,
            resizeMode: "cover",
          }}
          source={
            coverImage
              ? {
                  uri: coverImage.uri,
                }
              : require("../assets/default-cover.jpg")
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectProfileImage}
        style={{
          width: 120,
          height: 120,
          borderRadius: 150,
          overflow: "hidden",
          borderColor: Colors.white,
          borderWidth: 2,
          alignSelf: "flex-end",
          marginTop: -60,
          marginRight: 20,
        }}
      >
        <Image
          style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
          source={
            profileImage
              ? {
                  uri: profileImage.uri,
                }
              : defaultProfile
          }
        />
      </TouchableOpacity>
      <View style={{ width: "90%", marginTop: 50 }}>
        <Text style={{ color: Colors.lightBlack, fontSize: 15 }}>
          Click on Cover & Profile images to set new one
        </Text>
        <Text style={{ color: Colors.lightBlack, fontSize: 15 }}>
          Set a unique User Name
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Input
          placeholder="@user_name"
          onChangeText={(text) => setUserName(text)}
          value={userName}
        />
      </View>

      <View style={{ width: "90%", height: 50, marginTop: 30 }}>
        <Button title="Complete" onPress={setProfile} />
      </View>
    </View>
  );
}

export default AddProfileDetails;

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  FlatList,
  BackHandler,
} from "react-native";
import { Toast } from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import Colors from "../Constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Input from "../Components/Designs/Input";
import InputClick from "../Components/Designs/InputClick";
// import Button from "../Components/Designs/Button";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";
import { Item } from "native-base";
import Header from "../Components/Designs/Header";
import { useSelector } from "react-redux";
import { serverUrl } from "../Constants/URL";

const width = 300;
const height = 200;

const AddPost = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  const [postImages, setPostImages] = useState([]);
  const [postImageInfo, setPostImageInfo] = useState([]);
  const [postText, setPostText] = useState("");
  const [signal, setSignal] = useState(false);
  const [dark, setDark] = useState(false);
  const [stats, setStats] = useState(false);
  const [mentioned, setMentioned] = useState(false);

  // const [galleryImages, setgalleryImages] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // if (!loaded) {
  //   MediaLibrary.getAssetsAsync()
  //     .then((result) => {
  //       let images = result.assets;
  //       for (const i in images) {
  //         galleryImages.push({
  //           id: images[i].id.toString(),
  //           imageUrl: images[i].uri,
  //         });
  //       }
  //       console.log(galleryImages);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   setLoaded(true);
  // }
  async function test() {
    const result = await fetch(`${serverUrl}/test`, {
      method: "POST",
      body: JSON.stringify({
        title: "Test Request",
        list: ["First Element", "Second Element", "Third Element"],
      }),
      header: { "Content-Type": "application/json" },
    });
    const response = await result.json();
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

  async function imageSelector() {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const imageData = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.5,
      allowsMultipleSelection: false,
    });
    if (!imageData.cancelled) {
      setPostImages([
        ...postImages,
        {
          key: Math.floor(Math.random() * 1000000).toString(),
          uri: imageData.uri,
          name: Date.now().toString(),
          type: imageData.type,
          saved: false,
        },
      ]);
    }
  }

  const AddMediaContainer = () => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 5,
          backgroundColor: Colors.light,
          width: width,
          height: width,
          borderColor: Colors.pink,
          borderRadius: 10,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={imageSelector}
      >
        <View style={{ alignItems: "center" }}>
          <Ionicons name="ios-add" size={40} color={Colors.pink} />
          <Text style={{ color: Colors.pink, fontSize: 12 }}>ADD MEDIA</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ImageBox = (props) => {
    return (
      <View
        style={{
          backgroundColor: Colors.light,
          width: width,
          height: height,
          margin: 5,
          borderRadius: 10,
          elevation: 2,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            flex: 1,
            width: width,
            height: height,
            resizeMode: "cover",
          }}
          source={{ uri: props.uri }}
        />
      </View>
    );
  };

  async function uploadPost() {
    if (postImages.length === 0 && postText.length === 0) {
      //Toast
      Toast.show({
        text: "Fields Empty",
        buttonText: "Okay",
        type: "danger",
      });
    } else if (postImages.length > 0 && postText.length === 0) {
      for (let photo in postImages) {
        let object = postImages[photo];
        let form = new FormData();
        form.append("image", {
          uri: object.uri,
          name: `${object.name}image.jpg`,
          type: "image/jpeg",
        });
        try {
          const response = await fetch(`${serverUrl}/upload/image`, {
            method: "POST",
            body: form,
            header: {
              "Content-Type": "multipart/form-data;",
            },
          });

          const result = await response.json();
          console.log(result);
          const imageUrl = result.path;
          postImageInfo.push(imageUrl);
          let items = [...postImages];
          let item = items[photo];
          item.saved = true;
          items[photo] = item;
          setPostImages(items);
        } catch (error) {
          console.log("Error Occured");
          console.log(error);
        }
      }

      // Requst to create new Post
      console.log(postImages);
      console.log(postImageInfo);
      if (postImageInfo.length > 0) {
        try {
          const response = await fetch(`${serverUrl}/post`, {
            method: "POST",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: userId,
              postType: "MEDIA",
              postMedia: postImageInfo,
            }),
          });
          const result = await response.json();
          console.log(result);
          if (result.message === "ERROR_OCCURED") {
            throw "Error: Server side error while creating new post";
          }
          props.navigation.goBack();
        } catch (error) {
          console.log("Error Occured While Creating New Post");
          console.log(error);
        }
      }
    } else if (postImages.length === 0 && postText.length > 0) {
      //API Request to post Text
      try {
        const response = await fetch(`${serverUrl}/post`, {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            postType: "TEXT",
            postText: postText,
            postMedia: postImages,
          }),
        });
        const result = await response.json();
        console.log(result);
        props.navigation.goBack();
        if (result.message === "ERROR_OCCURED") {
          throw "Error: Server side error while creating new post";
        }
      } catch (error) {
        console.log("Error Occured While Creating New Post");
        console.log(error);
      }
    } else if (postImages.length > 0 && postText.length > 0) {
      //API Request to upload images and text
      for (let photo in postImages) {
        let object = postImages[photo];
        let form = new FormData();
        form.append("image", {
          uri: object.uri,
          name: `${object.name}image.jpg`,
          type: "image/jpeg",
        });
        try {
          const response = await fetch(`${serverUrl}/upload/image`, {
            method: "POST",
            body: form,
            header: {
              "Content-Type": "multipart/form-data;",
            },
          });

          const result = await response.json();
          console.log(result);
          const imageUrl = result.path;
          postImageInfo.push(imageUrl);
          let items = [...postImages];
          let item = items[photo];
          item.saved = true;
          items[photo] = item;
          setPostImages(items);
        } catch (error) {
          console.log("Error Occured");
          console.log(error);
        }
      }

      // Requst to create new Post
      console.log(postImages);
      console.log(postImageInfo);
      if (postImageInfo.length > 0) {
        try {
          const response = await fetch(`${serverUrl}/post`, {
            method: "POST",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId,
              postType: "TEXT-MEDIA",
              postText: postText,
              postMedia: postImageInfo,
            }),
          });
          const result = await response.json();
          console.log(result);
          props.navigation.goBack();
          if (result.message === "ERROR_OCCURED") {
            throw "Error: Server side error while creating new post";
          }
        } catch (error) {
          console.log("Error Occured While Creating New Post");
          console.log(error);
        }
      }
    }
  }

  //---------------------------------------------
  return (
    <View
      style={{
        backgroundColor: dark ? Colors.black : Colors.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1, width: "100%" }}>
        <Header
          backEnable
          onPress={() => props.navigation.goBack()}
          iconEnable
          dark={dark}
          title="New Post"
          iconName="md-checkmark"
          onIconPress={uploadPost}
        />
        {/* <View style={{ flexDirection: "row", width: "90%", marginTop: 30 }}>
        <Button title="Save" hollow={true} style={{ marginHorizontal: 5 }} />
        <Button title="Post" style={{ marginHorizontal: 5 }} />
      </View> */}
        <TextInput
          style={{
            margin: 10,
            padding: 10,
            fontSize: 15,
            maxHeight: 200,
            borderColor: dark ? Colors.lightContrast : Colors.lightBorder,
            borderRadius: 10,
            borderWidth: 1,
            color: dark ? Colors.white : Colors.black,
          }}
          placeholder="Enter Message"
          placeholderTextColor={
            dark ? Colors.lightContrast : Colors.lgihtBorder
          }
          multiline
          autoFocus
          onChangeText={(text) => setPostText(text)}
          value={postText}
        />
        <View>
          {postImages.length === 1 ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ImageBox uri={postImages[0].uri} />
            </View>
          ) : (
            <FlatList
              style={{}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={postImages}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => <ImageBox uri={item.uri} />}
            />
          )}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingVertical: 5,
            justifyContent: "space-evenly",
            borderTopColor: dark ? Colors.lightContrast : Colors.lightBorder,
            borderTopWidth: 0.75,
          }}
        >
          <TouchableOpacity
            style={{ padding: 5, borderRadius: 50 }}
            onPress={test}
          >
            <Ionicons
              name="ios-camera"
              size={20}
              color={dark ? Colors.white : Colors.darkContrast}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 5, borderRadius: 50 }}
            onPress={imageSelector}
          >
            <Ionicons
              name="ios-images"
              size={20}
              color={dark ? Colors.white : Colors.darkContrast}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 5, borderRadius: 50 }}
            onPress={() => console.log(postImageInfo)}
          >
            <Ionicons
              name="ios-stats"
              size={20}
              color={dark ? Colors.white : Colors.darkContrast}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 5, borderRadius: 50 }}
            onPress={() => console.log(postImages)}
          >
            <Ionicons
              name="md-map"
              size={20}
              color={dark ? Colors.white : Colors.darkContrast}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddPost;

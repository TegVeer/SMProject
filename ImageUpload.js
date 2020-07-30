import React from "react";
import { View, Text, Button } from "react-native";

export default function imageUpload(props) {
  function upload() {
    const photo1 = {
      uri: "https://html5box.com/html5gallery/images/Swan_1024.jpg",
      type: "image/jpeg",
      name: "photo1.jpg",
    };
    const photo2 = {
      uri:
        "https://www.canva.com/wp-content/themes/canvaabout/img/colorPalette/image4.jpg",
      type: "image/jpeg",
      name: "photo2.jpg",
    };

    const photos = [photo1, photo2];
    const form = new FormData();

    for (let photo in photos) {
      form.append("image", photos[photo]);
    }

    form.append("title", "React Native Images");
    // form.append("image", photo2);
    console.log(form);

    fetch("http://192.168.31.208:3000/image/uploads", {
      body: form,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        // Accept: "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response:" + responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Image Upload</Text>
      <Button title="Test" onPress={upload} />
    </View>
  );
}

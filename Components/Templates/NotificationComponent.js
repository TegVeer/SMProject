import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CircularImage from "../CircularImage";
import Colors from "../../Constants/Colors";

const NotificationComponent = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.white,
        borderBottomColor: Colors.lightBorder,

        borderBottomWidth: 1,
        alignItems: "center",
      }}
    >
      <View style={{ padding: 5 }}>
        <CircularImage
          componentSize={50}
          uri="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </View>
      <View style={{ padding: 5, flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 12, color: Colors.textBlack }}>
          Some message for the notification
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Image
          style={{ width: 50, height: 50, resizeMode: "cover" }}
          source={{ uri: "https://www.w3schools.com/w3css/img_lights.jpg" }}
        />
      </View>
    </View>
  );
};

export default NotificationComponent;

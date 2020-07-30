import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const MessageInputBox = () => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderColor: Colors.placeholderText,
        borderWidth: 0.5,
        flexDirection: "row",
        backgroundColor: Colors.white,
        elevation: 5,
        padding: 5,
        borderRadius: 100,
        alignItems: "center",
      }}
    >
      <View>
        <LinearGradient
          colors={["rgba(255,98,101,0.7)", "rgba(255,98,101,1)"]}
          style={{
            width: 35,
            height: 35,
            borderRadius: 100,
            alignSelf: "baseline",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-camera" size={20} color={Colors.white} />
        </LinearGradient>
      </View>
      <TextInput
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
        placeholder="New Message"
      />
      <View style={{ padding: 5 }}>
        <Ionicons name="md-send" size={20} color={Colors.pink} />
      </View>
    </View>
  );
};

export default MessageInputBox;

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const MyStoryComponent = (props) => {
  const uri = props.image;
  return (
    <View style={{ alignItems: "center", margin: 5 }}>
      <View style={{ width: 62, height: 62 }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            resizeMode: "cover",
          }}
          source={{ uri: uri }}
        />
        <View style={{ position: "absolute", bottom: 5, right: 2 }}>
          <LinearGradient
            colors={["#5499C7", "#2471A3"]}
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-add" color="white" size={20} />
          </LinearGradient>
        </View>
      </View>
      <Text style={{ maxWidth: 80, fontSize: 13 }}>Add Story</Text>
    </View>
  );
};

export default MyStoryComponent;

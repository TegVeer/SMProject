import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../Constants/Colors";
import CircularImage from "../CircularImage";
import { LinearGradien, LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const StoryComponent = (props) => {
  var userName = "Alexa";
  return (
    <View style={{ margin: 5, alignItems: "center" }}>
      <View style={{ width: 62, height: 62 }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            resizeMode: "cover",
          }}
          source={{
            uri: props.image,
          }}
        />
        {props.isNew ? (
          <View
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: 5,
              right: 2,
            }}
          >
            <LinearGradient
              style={{
                paddingHorizontal: 5,
                borderRadius: 5,
              }}
              colors={["#2ECC71", "#239B56"]}
            >
              <Text style={{ color: Colors.white, fontSize: 10 }}>new</Text>
            </LinearGradient>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <Text style={{ fontSize: 13, maxWidth: 80 }} numberOfLines={1}>
        {props.name}
      </Text>
    </View>
  );
};

export default StoryComponent;

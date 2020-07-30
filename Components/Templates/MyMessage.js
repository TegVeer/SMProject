import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";
import CircularImage from "../CircularImage";
import { Ionicons } from "@expo/vector-icons";

const MyMessage = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        pading: 5,
      }}
    >
      <View
        style={{
          marginHorizontal: 10,
          padding: 15,
          backgroundColor: Colors.pink,
          borderColor: Colors.pink,
          borderWidth: 1,
          borderBottomStartRadius: 30,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          alignSelf: "baseline",
        }}
      >
        <Text style={{ color: "white", fontSize: 15 }}>{props.message}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <Text
            style={{
              textAlign: "right",
              color: Colors.white,
              opacity: 0.7,
              fontSize: 10,
              paddingHorizontal: 5,
            }}
          >
            10:00 AM
          </Text>
          <Ionicons
            name="md-checkmark"
            size={12}
            color={Colors.white}
            style={{ opacity: 0.7 }}
          />
        </View>
      </View>
      <CircularImage
        componentSize={40}
        uri="https://www.irishtimes.com/polopoly_fs/1.4136292.1578692799!/image/image.jpg_gen/derivatives/landscape_685/image.jpg"
      />
    </View>
  );
};

export default MyMessage;

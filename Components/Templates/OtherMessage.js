import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Constants/Colors";
import CircularImage from "../CircularImage";

const OtherMessage = (props) => {
  return (
    <View
      style={{
        padding: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <CircularImage
        componentSize={40}
        uri="https://www.irishtimes.com/polopoly_fs/1.4136292.1578692799!/image/image.jpg_gen/derivatives/landscape_685/image.jpg"
      />
      <View
        style={{
          marginHorizontal: 10,
          padding: 15,
          backgroundColor: Colors.white,
          borderColor: Colors.placeholderText,
          borderWidth: 1,
          borderBottomEndRadius: 30,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          alignSelf: "baseline",
        }}
      >
        <Text style={{ color: Colors.textBlack, fontSize: 15 }}>
          {props.message}
        </Text>
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
              color: Colors.textBlack,
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
            color={Colors.textBlack}
            style={{ opacity: 0.7 }}
          />
        </View>
      </View>
    </View>
  );
};

export default OtherMessage;

import React from "react";
import { View, Text, Dimensions } from "react-native";
import Colors from "../../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
const width = Dimensions.get("window").width - 20;

export default function PollingGraph() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          marginHorizontal: 10,
          borderRadius: 20,
          height: 60,
          width,
          borderColor: Colors.darkContrast,
          backgroundColor: Colors.white,
          borderWidth: 1,
          justifyContent: "center",
          paddingVertical: 20,
          paddingHorizontal: 30,
          position: "relative",
          overflow: "hidden",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{ color: Colors.darkContrast, fontFamily: "Comfortaa_bold" }}
          >
            Polling Option One
          </Text>
        </View>
        <View>
          <Ionicons
            name="md-checkmark-circle-outline"
            size={24}
            color={Colors.darkContrast}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            width: width * 0.29,
            flex: 1,
            backgroundColor: Colors.powderBlue,
          }}
        ></View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 20,
          height: 60,
          width,
          borderColor: Colors.lightContrast,
          backgroundColor: Colors.white,
          borderWidth: 1,
          justifyContent: "center",
          paddingVertical: 20,
          paddingHorizontal: 30,
          position: "relative",
          overflow: "hidden",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: Colors.lightContrast,
              fontFamily: "Comfortaa_bold",
            }}
          >
            Polling Option One
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            width: width * 0.71,
            flex: 1,
            backgroundColor: Colors.highlight,
          }}
        ></View>
      </View>
    </View>
  );
}

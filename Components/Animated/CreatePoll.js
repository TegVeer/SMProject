import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Colors from "../../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Col } from "native-base";

export default function CreatePoll() {
  const [count, setCount] = useState(0);
  const [optionsNumber, setoptionsNumber] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
  ]);

  function Options() {
    return (
      <View style={{ marginTop: 5, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 1,
            margin: 5,
            paddingHorizontal: 5,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}
              placeholder="Option 1"
            />
          </View>
          <Text style={{ color: Colors.greyText, fontSize: 12 }}>
            {count}/50
          </Text>
        </View>
        <View style={{ marginHorizontal: 10, padding: 10 }}></View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItem: "center" }}>
      <View
        style={{
          minHeight: 200,
          marginHorizontal: 10,
          alignSelf: "stretch",
          borderRadius: 20,
          borderWidth: 1,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            alignSelf: "stretch",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 5,
            backgroundColor: Colors.light,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: "Comfortaa_bold" }}>Create a Poll</Text>
          </View>
          <Ionicons name="ios-close" size={24} color="black" />
        </View>
        {optionsNumber.map((item) => (
          <Options key={item.id} />
        ))}
      </View>
    </View>
  );
}

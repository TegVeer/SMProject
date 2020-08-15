import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Colors from "../../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Col } from "native-base";

export default function CreatePoll() {
  const [optionsNumber, setoptionsNumber] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
  ]);

  function Options(props) {
    const [index, setIndex] = useState(props.index);
    const [charCount, setCharCount] = useState(0);

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
              placeholder={
                index > 1
                  ? `Option ${index + 1} (Optional)`
                  : `Option ${index + 1}`
              }
              onChangeText={(text) => {
                setCharCount(text.length);
                optionsNumber[index].text = text;
              }}
              value={optionsNumber[index].text}
            />
          </View>
          <Text style={{ color: Colors.greyText, fontSize: 12 }}>
            {charCount}/50
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
        {optionsNumber.map((item, index) => (
          <Options key={item.id} index={index} />
        ))}
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            backgroundColor: Colors.light,
            alignItems: "center",
          }}
        >
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text>Duration</Text>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ color: Colors.likedBlue }}>1 Day</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (optionsNumber.length < 5) {
                setoptionsNumber((initialState) => {
                  return [
                    ...initialState,
                    { id: optionsNumber.length + 1, text: "" },
                  ];
                });
              } else {
                console.log("Cant add more than 5 options");
              }
            }}
            style={{ paddingHorizontal: 10, paddingVertical: 5 }}
          >
            <Ionicons name="ios-add" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

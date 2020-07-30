import React from "react";
import { View, Text } from "react-native";
import Colors from "../../Constants/Colors";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const InputClick = (props) => {
  let component;
  if (props.iconType === "Ionicons") {
    component = (
      <Ionicons name={props.iconName} size={24} color={Colors.greyText} />
    );
  } else if (props.iconType === "FontAwesome") {
    component = (
      <FontAwesome name={props.iconName} size={24} color={Colors.greyText} />
    );
  } else if (props.iconType === "MaterialIcons") {
    component = (
      <MaterialIcons name={props.iconName} size={24} color={Colors.greyText} />
    );
  }
  return (
    <View
      style={{
        marginVertical: 5,
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: Colors.lightBorder,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16, color: Colors.greyText, flex: 1 }}>
        {props.title}
      </Text>
      <View style={{ paddingVertical: 5, paddingLeft: 10 }}>{component}</View>
    </View>
  );
};

export default InputClick;

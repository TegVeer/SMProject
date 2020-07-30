import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../Constants/Colors";

//NOTE
//These are the props to be used
//title (for button title)
//onPress() (method for onClick Event)

const Button = (props) => {
  const title = props.title;
  let bgColor = Colors.pink;
  let textColor = Colors.white;
  let bdWidth = 0;
  if (props.hollow) {
    bgColor = Colors.white;
    textColor = Colors.pink;
    bdWidth = 1;
  }
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
        borderRadius: 10,
        paddingVertical: 15,
        borderColor: textColor,
        borderWidth: bdWidth,
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

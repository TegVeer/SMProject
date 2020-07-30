import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";

function CheckButton(props) {
  const activated = props.active;
  const icon = props.icon;
  const width = props.width;
  const title = props.title;
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: activated ? Colors.primary : Colors.highlight,
            elevation: activated ? 0 : 8,
          },
          { width: width },
        ]}
      >
        <Ionicons
          name={icon}
          color={activated ? Colors.white : Colors.primary}
          size={23}
        />
        <Text
          style={[
            styles.text,
            activated ? { color: Colors.white } : { color: Colors.primary },
          ]}
        >
          {title ? title : "NO NAME"}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    borderColor: Colors.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderStyle: "solid",
    height: 50,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default CheckButton;

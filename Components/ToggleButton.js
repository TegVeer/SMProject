import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../Constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ToggleButton = () => {
  const [on, seton] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        seton(!on);
      }}
    >
      <MaterialCommunityIcons
        name={on ? "toggle-switch" : "toggle-switch-off"}
        size={30}
        color={on ? Colors.pink : Colors.textBlack}
      />
    </TouchableOpacity>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({});

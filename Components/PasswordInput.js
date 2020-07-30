import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordInput = () => {
  const [iconName, setIconName] = useState("md-eye");
  const [textVisible, setTextVisible] = useState(false);
  const iconPress = () => {
    if (iconName === "md-eye") {
      setIconName("md-eye-off");
      setTextVisible(false);
    }
    if (iconName === "md-eye-off") {
      setIconName("md-eye");
      setTextVisible(true);
    }
  };
  return (
    <View style={[Styles.container]}>
      <TextInput
        style={[Styles.input]}
        secureTextEntry={textVisible}
        placeholder="Password"
      />
      <Ionicons
        style={[Styles.icon]}
        name={iconName}
        onPress={iconPress}
        size={22}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 50
  },
  input: {
    flex: 1,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontSize: 18
  },
  icon: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10
  }
});

export default PasswordInput;

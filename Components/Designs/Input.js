import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../Constants/Colors";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

//NOTE
//These are the props to be used
//placehoder (for placeholder text)
//onChangeText (method to fire when text changes in text input)
//secureTextEntery (props to be enable when secure text entery is required)
//keyboardType (props to set keyboard type)
//autoCapitalize (props to enable auto capitalisation of keyboard)
//multiline (props to allow multiline text)
//maxLength (props to set maximum number of character)

const Input = (props) => {
  const title = props.title;
  let Component;
  if (props.iconType === "FontAwesome") {
    Component = (
      <FontAwesome name={props.iconName} size={24} color={Colors.greyText} />
    );
  } else if (props.iconType === "Ionicons") {
    Component = (
      <Ionicons name={props.iconName} size={24} color={Colors.greyText} />
    );
  } else if (props.iconType === "MaterialIcons") {
    Component = (
      <MaterialIcons name={props.iconName} size={24} color={Colors.greyText} />
    );
  }
  return (
    <View
      style={{
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "90%",
        borderColor: Colors.lightBorder,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        value={props.value}
        multiline={props.multiline}
        maxLength={props.maxLength}
      />
      <View style={{ paddingVertical: 5, paddingLeft: 10 }}>{Component}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    flex: 1,
  },
});

export default Input;

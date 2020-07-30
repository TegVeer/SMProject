import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Constants/Colors";

//NOTE
//These are the props to be used
//title (work as placeholder text)
// icon (for the icon name)

const Input = (props) => {
  const title = props.title;
  const icon = props.icon;
  const data = props.data;
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.picker}>
        <View style={styles.text}>
          <Text
            style={{
              color: data ? Colors.lightBlack : Colors.placeholderText,
              fontSize: 16,
            }}
          >
            {data ? data : title}
          </Text>
        </View>
        <View style={styles.icon}>
          <Ionicons name={icon} size={23} color={Colors.placeholderText} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  picker: {
    flexDirection: "row",
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: Colors.lightBorder,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
});

export default Input;

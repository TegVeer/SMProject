import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Activity,
  ActivityIndicator,
} from "react-native";
import Colors from "../../Constants/Colors";

//NOTE
//These are the props to be used

const ButtonLoading = (props) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={props.onPress}>
      <ActivityIndicator size="small" color={Colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.pink,
    borderRadius: 10,
    paddingVertical: 15,
  },
});

export default ButtonLoading;

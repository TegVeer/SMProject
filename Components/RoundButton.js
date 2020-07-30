import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Colors from "../Constants/Colors";

const RoundButton = (props) => {
  return (
    <TouchableOpacity style={[styles.body]} onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator size="large" color={Colors.white} />
      ) : (
        <Text style={styles.text}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
  },
  body: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.highlight,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    elevation: 8,
  },
});

export default RoundButton;

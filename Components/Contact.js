import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CircularImage from "./CircularImage";
import Colors from "../Constants/Colors";
const Contact = () => {
  const imageUri =
    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg";
  return (
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ padding: 10 }}>
          <CircularImage uri={imageUri} componentSize={32} />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: Colors.textBlack }}>Alice Russell</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;

const styles = StyleSheet.create({});

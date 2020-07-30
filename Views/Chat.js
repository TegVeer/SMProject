import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import MessageInputBox from "../Components/Templates/MessageInputBox";

const Chat = (props) => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View>
        <MessageInputBox />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});

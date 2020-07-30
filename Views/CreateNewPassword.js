import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Constants/Colors";

import Button from "../Components/Designs/Button";
import Input from "../Components/Designs/Input";
import Header from "../Components/Designs/Header";
import { serverUrl } from "../Constants/URL";

const CreateNewPassword = (props) => {
  return (
    <View style={styles.container}>
      <Header
        title="Create New Password"
        onPress={() => {
          props.navigation.goBack();
        }}
        backEnable={true}
      />
      <View style={styles.instruction}>
        <Text style={{ color: Colors.textBlack }}>
          A strong password has combination if letters and
        </Text>
        <Text style={{ color: Colors.textBlack }}>
          numbers and special characters like $,!,%, etc.
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Input placeholder="New Password" />
      </View>

      <View style={{ width: "100%", alignItems: "center", marginBottom: 45 }}>
        <Input placeholder="Confirm Password" />
      </View>
      <View style={{ width: "90%", height: 50 }}>
        <Button title="Save" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
  },

  instruction: {
    width: "90%",
    marginTop: 100,
    marginBottom: 100,
  },
});

export default CreateNewPassword;

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Constants/Colors";

import Button from "../Components/Designs/Button";
import Input from "../Components/Designs/Input";
import Header from "../Components/Designs/Header";
import { serverUrl } from "../Constants/URL";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Header
        title="Reset Password"
        onPress={() => {
          props.navigation.goBack();
        }}
        backEnable={true}
      />
      <View style={styles.instruction}>
        <Text style={{ color: Colors.textBlack }}>
          No Problem! Just give in your Email ID and we will send
        </Text>
        <Text style={{ color: Colors.textBlack }}>
          you a link to reset your password
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 45 }}>
        <Input
          placeholder="Email ID"
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={{ width: "90%", height: 50 }}>
        <Button
          title="Send Code"
          onPress={() => {
            props.navigation.navigate("VerifyCode");
          }}
        />
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
    marginTop: 100,
    marginBottom: 100,
  },
});

export default ResetPassword;

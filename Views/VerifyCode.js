import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Constants/Colors";
import Input from "../Components/Designs/Input";
import Button from "../Components/Designs/Button";
import Header from "../Components/Designs/Header";
import { serverUrl } from "../Constants/URL";

const VerifyCode = (props) => {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      <Header
        title="Verify Code"
        onPress={() => {
          props.navigation.goBack();
        }}
        backEnable={true}
      />
      <View style={styles.texts}>
        <Text style={{ color: Colors.textBlack }}>
          We sent you a verification code to your email address
        </Text>
        <Text style={{ color: Colors.textBlack }}>
          Please enter that Code here below
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 45 }}>
        <Input
          placeholder="Confirm Password"
          onChangeText={(text) => {
            setCode(text);
          }}
          autoCapitalize="none"
          secureTextEntry={false}
          keyboardType="number-pad"
        />
      </View>
      <View style={{ width: "90%", height: 50 }}>
        <Button
          title="Verify"
          onPress={() => {
            props.navigation.navigate("CreateNewPassword");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  texts: {
    marginTop: 100,
    marginBottom: 100,
  },
});

export default VerifyCode;

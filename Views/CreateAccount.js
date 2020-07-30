import React, { useState, Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Constants/Colors";
import { useDispatch } from "react-redux";
import * as AuthAction from "../Store/Actions/AuthAction";
import Button from "../Components/Designs/Button";
import Input from "../Components/Designs/Input";
import Header from "../Components/Designs/Header";
import ButtonLoading from "../Components/Designs/ButtonLoading";
import { NavigationActions, StackActions } from "react-navigation";
import { Toast } from "native-base";
import { serverUrl } from "../Constants/URL";

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasswrod] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: "SetupProfile" })],
  // });

  function createUser() {
    // props.navigation.navigate("SetupProfile");
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        fetch(`${serverUrl}/user/check`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        })
          .then((result) => result.json())
          .then((data) => {
            // console.log(data);
            if (data.status === "SUCCESSFUL") {
              props.navigation.navigate("SetupProfile", {
                email: email,
                password: password,
              });
              setEmail("");
              setPassword("");
              setConfirmPasswrod("");
            } else if (data.status === "FAILED") {
              Toast.show({
                text: "Email already taken",
                buttonText: "OK",
                type: "warning",
                duration: 2000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        Toast.show({
          text: "Password fields doesn't match",
          buttonText: "OK",
          type: "danger",
          duration: 5000,
        });
      }
    } else {
      Toast.show({
        text: "Fill all the fields correctly",
        buttonText: "OK",
        type: "danger",
        duration: 5000,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header
        title="Create Account"
        onPress={() => {
          props.navigation.goBack();
        }}
        backEnable={true}
      />
      <View style={styles.instruction}>
        <Text style={{ color: Colors.textBlack }}>
          Fill in the required details and click Proceed
        </Text>
        <Text style={{ color: Colors.textBlack }}>
          Fields marked * are mandatory
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Input
          placeholder="Email ID"
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
        />
      </View>

      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Input
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Input
          placeholder="Confirm Password"
          onChangeText={(text) => {
            setConfirmPasswrod(text);
          }}
          autoCapitalize="none"
          secureTextEntry={true}
          value={confirmPassword}
        />
      </View>
      <Text style={{ color: Colors.textBlack }}>
        By Creating Account, you are automatically accepting all
      </Text>
      <Text style={{ marginBottom: 45, width: "90%", color: Colors.textBlack }}>
        the{" "}
        <Text
          style={{ color: Colors.pink }}
          onPress={() => {
            props.navigation.navigate("TermsConditions");
          }}
        >
          Terms & Conditions
        </Text>{" "}
        related to Momento
      </Text>
      {loading ? (
        <View style={{ width: "90%", height: 50 }}>
          <ButtonLoading />
        </View>
      ) : (
        <View style={{ width: "90%", height: 50 }}>
          <Button title="Proceed" onPress={createUser} />
        </View>
      )}
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
    marginTop: 30,
    marginBottom: 45,
  },
});

export default CreateAccount;

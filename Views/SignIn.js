import React, { useState } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Colors from "../Constants/Colors";
import { setUserData } from "../Services/AsyncStorage";
import Button from "../Components/Designs/Button";
import Input from "../Components/Designs/Input";
import Header from "../Components/Designs/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions, StackActions } from "react-navigation";
import { useDispatch } from "react-redux";
import { addAuthData } from "../Store/Actions/AuthAction";
import { Toast } from "native-base";
import { serverUrl } from "../Constants/URL";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Home" })],
  });

  async function login() {
    if (email && password) {
      try {
        const result = await fetch(`${serverUrl}/user/login`, {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const response = await result.json();

        if (response.message === "AUTH_SUCCESSFUL") {
          console.log(response);
          // Toast.show({
          //   text: "Login Successful",
          //   buttonText: "OK",
          //   type: "success",
          //   duration: 2000,
          // });
          const user = response.user;
          dispatch(
            addAuthData(
              response.token,
              response.tokenExpiry,
              user._id,
              user.email,
              user.name,
              user.phone,
              user.gender,
              user.dob,
              user.userName,
              user.profileImage,
              user.coverImage,
              user.bio,
              user.posts,
              user.location,
              user.following,
              user.followers
            )
          );
          setUserData(
            response.token,
            response.tokenExpiry,
            user._id,
            user.email,
            user.name,
            user.phone,
            user.gender,
            user.dob,
            user.userName,
            user.profileImage,
            user.coverImage,
            user.bio,
            user.posts,
            user.location,
            user.following,
            user.followers
          );
          props.navigation.dispatch(resetAction);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Toast.show({
        text: "Fill all fields",
        buttonText: "OK",
        duration: 2000,
        type: "danger",
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header
        title="Sign In"
        onPress={() => {
          props.navigation.goBack();
        }}
        backEnable={true}
      />
      <View style={styles.instruction}>
        <Text style={{ color: Colors.textBlack }}>
          Type in your Email ID and Password you choose for
        </Text>
        <Text style={{ color: Colors.textBlack }}>
          Momento and click Go to Feed
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

      <View style={{ width: "100%", alignItems: "center", marginBottom: 45 }}>
        <Input
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
        />
      </View>

      <View style={{ width: "90%", height: 50 }}>
        <Button title="Go to Feed" onPress={login} />
      </View>
      <TouchableOpacity
        style={{ marginTop: 100 }}
        onPress={() => {
          props.navigation.navigate("ResetPassword");
        }}
      >
        <Text style={styles.link}>Can't Sign In? Reset Password</Text>
      </TouchableOpacity>
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
  link: {
    color: Colors.pink,
  },
});

export default SignIn;

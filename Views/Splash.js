import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import Colors from "../Constants/Colors";
import Button from "../Components/Designs/Button";
import { getUserData } from "../Services/AsyncStorage";
import { useDispatch } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";
import { addAuthData } from "../Store/Actions/AuthAction";
import { serverUrl } from "../Constants/URL";

const Splash = (props) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Home" })],
  });

  const dispatchAction = useDispatch();

  useEffect(() => {
    getUserData()
      .then((userData) => {
        const data = JSON.parse(userData);
        const {
          token,
          tokenExpiry,
          userId,
          email,
          name,
          phone,
          gender,
          dateOfBirth,
          userName,
          profileImage,
          coverImage,
          bio,
          posts,
          location,
          following,
          followers,
        } = data;
        dispatchAction(
          addAuthData(
            token,
            tokenExpiry,
            userId,
            email,
            name,
            phone,
            gender,
            dateOfBirth,
            userName,
            profileImage,
            coverImage,
            bio,
            posts,
            location,
            following,
            followers
          )
        );

        if (token && tokenExpiry && userId) {
          let expiry = new Date(tokenExpiry);
          if (expiry > new Date()) {
            console.log("Condition Running");
            props.navigation.dispatch(resetAction);
            return;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/LOGO.png")} />
      <Text style={styles.logoText}>MOMENTO</Text>
      <Text style={{ color: Colors.textBlack }}>
        Momento is a social app that lets you share your
      </Text>
      <Text style={{ marginBottom: 100, color: Colors.textBlack }}>
        moments with friends
      </Text>
      <View style={{ width: "90%", height: 50 }}>
        <Button
          title="Sign In"
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        />
      </View>
      <TouchableOpacity
        style={{ marginTop: 80 }}
        onPress={() => {
          props.navigation.navigate("CreateAccount");
        }}
      >
        <Text style={styles.link}>Create New Account</Text>
      </TouchableOpacity>
      <Text
        style={[styles.licenceText, { color: Colors.textBlack, marginTop: 50 }]}
      >
        © 2020 Momento Inc.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  logo: {
    marginTop: 100,
    width: 200,
    height: 200,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    color: Colors.lightBlack,
  },
  link: {
    color: Colors.pink,
    fontSize: 17,
  },
  licenceText: {
    fontSize: 11,
  },
});

export default Splash;

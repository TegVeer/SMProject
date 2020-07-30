import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActionSheet } from "native-base";
import Colors from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../Components/Designs/Button";
import Input from "../Components/Designs/Input";
import Header from "../Components/Designs/Header";
import Picker from "../Components/Designs/Picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch } from "react-redux";
import { addAuthData } from "../Store/Actions/AuthAction";
import { setUserData } from "../Services/AsyncStorage";
import { serverUrl } from "../Constants/URL";

const BUTTONS = ["Male", "Female", "Other"];

const SetupProfile = (props) => {
  const dispatch = useDispatch();
  const email = props.navigation.getParam("email");
  const password = props.navigation.getParam("password");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [datePicker, setDatePicker] = useState(false);

  async function setup() {
    try {
      const result = await fetch(`${serverUrl}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          dob: dateOfBirth,
          gender: gender,
          phone: phone,
        }),
      });
      const response = await result.json();
      console.log(response);

      if (response.status === "SUCCESSFUL") {
        let user = response.user;
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
        props.navigation.navigate("AddProfileDetails");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onDatePicked(date) {
    setDatePicker(false);
    let dob = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    setDateOfBirth(dob);
  }

  return (
    <View style={styles.container}>
      <Header
        title="Setup Profile"
        backEnable={true}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={styles.instruction}>
        <Text style={{ color: Colors.textBlack }}>
          Hey! We need few details from you before you start
        </Text>
        <Text style={{ color: Colors.textBlack }}>sharing on Momento</Text>
      </View>

      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Input
          placeholder="Full Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>

      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Picker
          title="Date of Birth"
          data={dateOfBirth}
          icon="md-calendar"
          onPress={() => {
            setDatePicker(true);
          }}
        />
        <DateTimePickerModal
          isVisible={datePicker}
          mode="date"
          onConfirm={onDatePicked}
          onCancel={() => setDatePicker(false)}
        />
      </View>

      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Picker
          title="Gender"
          data={gender}
          icon="md-transgender"
          onPress={() => {
            ActionSheet.show(
              {
                options: BUTTONS,
                title: "Gender",
                cancelButtonIndex: -1,
              },
              (buttonIndex) => {
                if (buttonIndex >= 0) {
                  setGender(BUTTONS[buttonIndex]);
                }
              }
            );
          }}
        />
      </View>

      <View style={{ width: "100%", alignItems: "center", marginBottom: 35 }}>
        <Input
          placeholder="Phone Number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>

      <View style={{ width: "90%", height: 50 }}>
        <Button title="Get Set Go!" onPress={setup} />
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
    marginTop: 30,
    marginBottom: 45,
  },
});

export default SetupProfile;

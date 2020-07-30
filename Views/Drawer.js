import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useSelector } from "react-redux";
import CircularImage from "../Components/CircularImage";
import Colors from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItems } from "react-navigation-drawer";
import { StackActions, NavigationActions } from "react-navigation";
import { removeUserData } from "../Services/AsyncStorage";
import { useDispatch } from "react-redux";
import { removeAuthData } from "../Store/Actions/AuthAction";
import { serverUrl } from "../Constants/URL";

export default function Drawer(props) {
  const [isEnabled, setisEnabled] = useState(false);
  const profileImage = useSelector((state) => state.auth.profileImage);
  const gender = useSelector((state) => state.auth.gender);
  const name = useSelector((state) => state.auth.name);
  const userName = useSelector((state) => state.auth.userName);
  const followers = useSelector((state) => state.auth.followers);
  const following = useSelector((state) => state.auth.following);
  const dispatchAction = useDispatch();
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "SignIn" })],
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ height: 200, justifyContent: "center", alignItems: "center" }}
      >
        <CircularImage
          uri={profileImage}
          gender={gender}
          componentSize={80}
          onClick={() => props.navigation.navigate("Profile")}
        />
        <Text
          style={{
            color: Colors.lightBlack,

            fontSize: 15,
            marginTop: 10,
            fontFamily: "Comfortaa_bold",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: Colors.greyText,
            fontFamily: "Comfortaa",
            maxWidth: 200,
            fontSize: 13,
            marginTop: 2,
          }}
          numberOfLines={1}
        >
          {userName}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10, paddingRight: 15 }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ marginHorizontal: 5, fontFamily: "Comfortaa_bold" }}>
              {followers.length}
            </Text>
            <Text
              style={{ fontFamily: "Comfortaa", color: Colors.postLightGrey }}
            >
              Followers
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ marginHorizontal: 5, fontFamily: "Comfortaa_bold" }}>
              {following.length}
            </Text>
            <Text
              style={{ fontFamily: "Comfortaa", color: Colors.postLightGrey }}
            >
              Followings
            </Text>
          </View>
        </View>
      </View>

      <ItemComponent
        title="Profile"
        icon="ios-person"
        onPress={() => props.navigation.navigate("Profile")}
      />
      <ItemComponent
        title="Settings"
        icon="ios-settings"
        onPress={() => props.navigation.navigate("Settings")}
      />
      <ItemComponent
        title="Liked Posts"
        icon="ios-heart"
        onPress={() => props.navigation.navigate("LikedPost")}
      />
      <ItemComponent
        title="Saved"
        icon="ios-bookmarks"
        onPress={() => props.navigation.navigate("Saved")}
      />
      <ItemComponent
        title="Trending"
        icon="ios-trending-up"
        onPress={() => props.navigation.navigate("Trending")}
      />
      <ItemComponent
        title="Logout"
        icon="ios-exit"
        onPress={() => {
          removeUserData();
          dispatchAction(removeAuthData());
          props.navigation.dispatch(resetAction);
        }}
      />
      <View
        style={{
          marginVertical: 10,
          borderColor: Colors.lightBorderLine,
          borderTopWidth: 1,
          marginHorizontal: 30,
        }}
      ></View>
      <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
        <Text
          style={{
            color: Colors.lightBlack,
            fontFamily: "Comfortaa_bold",
            fontSize: 15,
          }}
        >
          Help Center
        </Text>
        <View
          style={{
            marginVertical: 10,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.lightBlack,
              fontFamily: "Comfortaa_bold",
              fontSize: 15,
            }}
          >
            Dark Mode
          </Text>
          <Switch
            trackColor={{ false: "#CCD1D1", true: "#82E0AA" }}
            thumbColor={"#ffffff"}
            ios_backgroundColor="#CCD1D1"
            onValueChange={() => setisEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
        <Text
          style={{
            color: Colors.lightBlack,
            fontFamily: "Comfortaa_bold",
            fontSize: 15,
          }}
        >
          Updates
        </Text>
      </View>
    </View>
  );
}

function ItemComponent(props) {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={props.onPress}
    >
      <View style={{ padding: 10, marginLeft: 20 }}>
        <Ionicons name={props.icon} size={24} color={Colors.greyText} />
      </View>
      <Text
        style={{
          color: Colors.lightBlack,
          fontSize: 15,
          marginLeft: 20,
          fontFamily: "Comfortaa_bold",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

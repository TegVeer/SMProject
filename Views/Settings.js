import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import Colors from "../Constants/Colors";
import Header from "../Components/Designs/Header";
import { serverUrl } from "../Constants/URL";

function SettingListItem(props) {
  const topLine = props.top;
  const bottomLine = props.bottom;
  const itemName = props.name;
  const dark = props.dark;

  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: dark ? Colors.darkContrast : Colors.light,
        borderTopWidth: topLine ? 1 : 0,
        borderBottomWidth: bottomLine ? 1 : 0,
      }}
    >
      <Text
        style={{
          color: dark ? Colors.white : Colors.black,
          fontSize: 15,
          fontFamily: "Comfortaa_bold",
        }}
      >
        {itemName}
      </Text>
    </View>
  );
}

function Divider(props) {
  const name = props.name;
  const dark = props.dark;
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: dark ? Colors.darkContrast : Colors.light,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: dark ? Colors.white : Colors.black,
          fontFamily: "Comfortaa_light",
        }}
      >
        {name}
      </Text>
    </View>
  );
}

export default function Settings(props) {
  const dark = false;
  return (
    <View
      style={{ flex: 1, backgroundColor: dark ? Colors.black : Colors.white }}
    >
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? Colors.black : Colors.white}
      />
      <Header dark={dark ? true : false} title="Settings" backEnable />
      <ScrollView>
        <Divider dark={dark ? true : false} name="@teg_veer" />
        <SettingListItem dark={dark ? true : false} bottom name="About" />
        <SettingListItem dark={dark ? true : false} bottom name="Privacy" />
        <SettingListItem
          dark={dark ? true : false}
          bottom
          name="Notification"
        />
        <SettingListItem dark={dark ? true : false} bottom name="Preferences" />
        <SettingListItem
          dark={dark ? true : false}
          bottom
          name="Recomendations"
        />
        <SettingListItem dark={dark ? true : false} name="Followers" />
        <Divider dark={dark ? true : false} name="Misc" />
        <SettingListItem dark={dark ? true : false} bottom name="Explore" />
        <SettingListItem dark={dark ? true : false} bottom name="Themes" />
        <SettingListItem dark={dark ? true : false} name="Ads & Promotions" />
        <Divider dark={dark ? true : false} name="Archives" />
        <SettingListItem dark={dark ? true : false} bottom name="Records" />
        <SettingListItem dark={dark ? true : false} name="History" />
      </ScrollView>
    </View>
  );
}

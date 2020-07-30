import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";

//! NOTE  These are the props to be used
//* title (for header title)
//* onPress (onPress method for back icon)
//* backEnable (to enable back button)
//* iconEnable (to enable right icon button)
//* iconName (to right icon name)
//* onIconPress (onPress Method for right icon)
//* dark (for dark mode)
const Header = (props) => {
  const title = props.title;
  const backEnable = props.backEnable;
  const iconEnable = props.iconEnable;
  const iconName = props.iconName;
  const dark = props.dark;
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 0.5,
        backgroundColor: dark ? Colors.black : Colors.white,
        borderBottomColor: dark ? Colors.darkContrast : Colors.lightBorder,
      }}
    >
      {backEnable ? (
        <TouchableOpacity style={styles.icon} onPress={props.onPress}>
          <Ionicons
            name="ios-arrow-back"
            size={23}
            color={dark ? Colors.white : Colors.lightBlack}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}></View>
      )}

      <View style={styles.headerName}>
        <Text
          style={{
            color: dark ? Colors.white : Colors.lightBlack,
            fontSize: 15,
            fontFamily: "Comfortaa_bold",
          }}
        >
          {title}
        </Text>
      </View>
      {iconEnable ? (
        <TouchableOpacity style={styles.icon} onPress={props.onIconPress}>
          <Ionicons
            name={iconName}
            size={23}
            color={dark ? Colors.white : Colors.lightBlack}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  icon: {
    padding: 10,
  },
  headerName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {},
});

export default Header;

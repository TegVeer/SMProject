import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../Components/Designs/Header";
import NotificationComponent from "../Components/Templates/NotificationComponent";
import Colors from "../Constants/Colors";
import { serverUrl } from "../Constants/URL";

const Notification = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header title="Notifications" />
      <ScrollView>
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});

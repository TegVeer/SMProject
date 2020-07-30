import React from "react";
import { View, Text, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import CreateAccount from "../Views/CreateAccount";
import CreateNewPassword from "../Views/CreateNewPassword";
import ResetPassword from "../Views/ResetPassword";
import SetupProfile from "../Views/SetupProfile";
import SignIn from "../Views/SignIn";
import Splash from "../Views/Splash";
import TermsConditions from "../Views/TermsConditions";
import VerifyCode from "../Views/VerifyCode";
import Notification from "../Views/Notification";
import Profile from "../Views/Profile";
import Explore from "../Views/Explore";
import AddPost from "../Views/AddPost";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Colors from "../Constants/Colors";
import Home from "../Views/Home";
import AddProfileDetails from "../Views/AddProfileDetails";
import Drawer from "../Views/Drawer";
import Settings from "../Views/Settings";
import HelpCenter from "../Views/HelpCenter";
import Trending from "../Views/Trending";
import Updates from "../Views/Updates";
import Saved from "../Views/Saved";
import LikedPost from "../Views/LikedPost";

const HomeTabNavigator = createMaterialBottomTabNavigator(
  {
    Feeds: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
        title: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={24} color={tintColor} />
        ),
      },
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        headerShown: false,
        title: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-search" size={24} color={tintColor} />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        headerShown: false,
        title: "Notification",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-notifications" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Feeds",
    swipeEnable: true,
    activeColor: Colors.lightBlack,
    barStyle: {
      backgroundColor: Colors.white,
      borderTopColor: Colors.greyText,
      borderTopWidth: 0.25,
    },
    shifting: true,
    labeled: false,
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    HomeTabNavigator,
  },
  {
    contentComponent: Drawer,
    drawerType: "slide",
    edgeWidth: 50,
  }
);

const FirstNavigator = createStackNavigator(
  {
    Splash: { screen: Splash, navigationOptions: { headerShown: false } },
    SignIn: { screen: SignIn, navigationOptions: { headerShown: false } },
    CreateAccount: {
      screen: CreateAccount,
      navigationOptions: { headerShown: false },
    },
    CreateNewPassword: {
      screen: CreateNewPassword,
      navigationOptions: { headerShown: false },
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: { headerShown: false },
    },
    SetupProfile: {
      screen: SetupProfile,
      navigationOptions: { headerShown: false },
    },
    TermsConditions: {
      screen: TermsConditions,
      navigationOptions: { headerShown: false },
    },
    VerifyCode: {
      screen: VerifyCode,
      navigationOptions: { headerShown: false },
    },
    Home: {
      screen: DrawerNavigator,
      navigationOptions: { headerShown: false },
    },
    AddPost: { screen: AddPost, navigationOptions: { headerShown: false } },
    AddProfileDetails: {
      screen: AddProfileDetails,
      navigationOptions: { headerShown: false },
    },
    Profile: { screen: Profile, navigationOptions: { headerShown: false } },
    Settings: { screen: Settings, navigationOptions: { headerShown: false } },
    HelpCenter: {
      screen: HelpCenter,
      navigationOptions: { headerShown: false },
    },
    Trending: { screen: Trending, navigationOptions: { headerShown: false } },
    Updates: { screen: Updates, navigationOptions: { headerShown: false } },
    Saved: { screen: Saved, navigationOptions: { headerShown: false } },
    LikedPost: { screen: LikedPost, navigationOptions: { headerShown: false } },
  }
  // {
  //   initialRouteName: "Home",
  // }
);

export default createAppContainer(FirstNavigator);

import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  StatusBar,
} from "react-native";
import { Root } from "native-base";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";
import FirstNavigation from "./Navigation/FirstNavigation";
import CircularImage from "./Components/CircularImage";
import Colors from "./Constants/Colors";
import PasswordInput from "./Components/PasswordInput";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import AuthReducer from "./Store/Reducers/AuthReducer";
import ImagePicker from "./Components/ImagePicker";
import RoundButton from "./Components/RoundButton";
import CheckButton from "./Components/CheckButton";
import Profile from "./Views/Profile";
import Splash from "./Views/Splash";
import SignIn from "./Views/SignIn";
import ResetPassword from "./Views/ResetPassword";
import CreateNewPassword from "./Views/CreateNewPassword";
import CreateAccount from "./Views/CreateAccount";
import SetupProfile from "./Views/SetupProfile";
import Post from "./Components/Templates/Post";
import Comment from "./Components/Templates/Comment";
import ToggleButton from "./Components/ToggleButton";
import Contact from "./Components/Contact";
import MyMessage from "./Components/Templates/MyMessage";
import OtherMessage from "./Components/Templates/OtherMessage";
import Chat from "./Views/Chat";
import StoryComponent from "./Components/Designs/StoryComponent";
import StoryCell from "./Components/Templates/StoryList";
import MyStoryComponent from "./Components/Designs/MyStoryComponent";
import ProfilePostsList from "./Components/Templates/ProfilePostSection";
import AddPost from "./Views/AddPost";
import Explore from "./Views/Explore";
import Home from "./Views/Home";
import ImageUpload from "./ImageUpload";
import AddProfileDetails from "./Views/AddProfileDetails";
import Settings from "./Views/Settings";
import SamplePost from "./Components/Templates/SamplePost";

const fetchFont = () => {
  return Fonts.loadAsync({
    // ROBOTO FONTS ENTRY
    Roboto: require("./assets/Fonts/Roboto-Regular.ttf"),
    Roboto_black: require("./assets/Fonts/Roboto-Black.ttf"),
    Roboto_blakItalic: require("./assets/Fonts/Roboto-BlackItalic.ttf"),
    Roboto_bold: require("./assets/Fonts/Roboto-Bold.ttf"),
    Roboto_boldCondensed: require("./assets/Fonts/Roboto-BoldCondensed.ttf"),
    Roboto_boldCondensedItalic: require("./assets/Fonts/Roboto-BoldCondensedItalic.ttf"),
    Roboto_boldItalic: require("./assets/Fonts/Roboto-BoldItalic.ttf"),
    Roboto_condensed: require("./assets/Fonts/Roboto-Condensed.ttf"),
    Roboto_condensedItalic: require("./assets/Fonts/Roboto-CondensedItalic.ttf"),
    Roboto_italic: require("./assets/Fonts/Roboto-Italic.ttf"),
    Roboto_light: require("./assets/Fonts/Roboto-Light.ttf"),
    Roboto_lightItalic: require("./assets/Fonts/Roboto-LightItalic.ttf"),
    Roboto_medium: require("./assets/Fonts/Roboto-Medium.ttf"),
    Roboto_mediumItalic: require("./assets/Fonts/Roboto-MediumItalic.ttf"),
    Roboto_thin: require("./assets/Fonts/Roboto-Thin.ttf"),
    Roboto_thinItalic: require("./assets/Fonts/Roboto-ThinItalic.ttf"),
    Comfortaa_bold: require("./assets/Fonts/Comfortaa-Bold.ttf"),
    Comfortaa_light: require("./assets/Fonts/Comfortaa-Light.ttf"),
    Comfortaa: require("./assets/Fonts/Comfortaa-Regular.ttf"),
    //----------------------------------------------------------------------
  });
};

// Firebase.initializeApp(GLOBAL.firebaseConfig);
// console.log("Firebase Setup DONE");

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const ReduxStore = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Root>
      <Provider store={ReduxStore}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
        {/* <FirstNavigation /> */}
        <SamplePost />
      </Provider>
    </Root>
  );
}

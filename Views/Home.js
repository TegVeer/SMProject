import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TouchableOpacityBase,
  RefreshControl,
} from "react-native";
import { Toast } from "native-base";
import Colors from "../Constants/Colors";
import TalkPost from "../Components/Templates/TalkPost";
import CircularImage from "../Components/CircularImage";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { serverUrl } from "../Constants/URL";
import MainPostComponent from "../Components/Templates/Posts/MainPostComponent";

async function fetchData() {
  const response = await fetch(`${serverUrl}/post`);
  const result = response.json();
  return result;
}

const Home = (props) => {
  const gender = useSelector((state) => state.auth.gender);
  const profileImage = useSelector((state) => state.auth.profileImage);
  const [postList, setPostList] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const dark = true;
  if (postList.length === 0) {
    fetchData()
      .then((result) => {
        setPostList(result.reverse());
      })
      .catch((error) => console.log(error));
  }

  function onRefresh() {
    setrefreshing(true);
    fetchData()
      .then((result) => {
        setPostList(result.reverse());
        setrefreshing(false);
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          text: "Error while reloading posts",
          buttonText: "OK",
          type: "danger",
        });
        setrefreshing(false);
      });
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: dark ? Colors.black : Colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          backgroundColor: dark ? Colors.darkContrast : Colors.lightBorder,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <CircularImage
            componentSize={30}
            uri={profileImage}
            onClick={() => props.navigation.openDrawer()}
            gender={gender}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, color: dark ? Colors.white : Colors.black }}
          >
            Home
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AddPost")}
          >
            <Ionicons
              name="md-add"
              size={24}
              color={dark ? Colors.white : Colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={postList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                borderBottomColor: dark
                  ? Colors.darkContrast
                  : Colors.lightBorder,
                borderBottomWidth: 0.5,
              }}
            ></View>
          );
        }}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <MainPostComponent
            postImages={item.postMedia}
            postText={item.postText}
            likesList={item.likes}
            sharesList={item.shares}
            userData={item.userId}
            commentsList={item.comments}
            id={item._id}
            dark={dark}
          />
        )}
      />
    </View>
  );
};

export default Home;

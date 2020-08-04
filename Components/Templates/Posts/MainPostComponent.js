import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import Colors from "../../../Constants/Colors";
import CircularImage from "../../CircularImage";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CommentPostComponent from "./CommentPostComponent";
import { serverUrl } from "../../../Constants/URL";
import { useSelector } from "react-redux";

/*
  NOTE - Properties for the Component
1. id: ID for perticular post type
2. postImages: images Array for all the images of the post
3. postText: text for the post
4. likesList: Array of all the likes user's id
5. commentsList: Arrya of all the comment posts
6. sharesList: Array of all the users that has shared the post
7. mentioned: ID for the mentioned Post
8. userData: Data of the user that posted
*/

const width = Dimensions.get("window").width * 0.95;
const height = (width / 16) * 9;
const widthMinimal = Dimensions.get("window").width * 0.9;
export default function MainPostComponent(props) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  const [init, setInit] = useState(true);
  // ANCHOR Properties Initialized
  const [id, setId] = useState(props.id);
  const [images, setImage] = useState(props.postImages);
  const [text, setText] = useState(props.postText);
  const [likes, setLikes] = useState(props.likesList);
  const [comments, setComments] = useState(props.commentsList);
  const [shares, setShares] = useState(props.sharesList);
  const [mentioned, setMentioned] = useState(props.mentioned);
  const [userData, setUserData] = useState(props.userData);
  const [dark, setDark] = useState(props.dark);

  if (likes.includes(userId) && init) {
    setLiked(true);
    setInit(false);
  }
  async function likePost() {
    try {
      const response = await fetch(`${serverUrl}/post/like`, {
        method: "POST",
        body: JSON.stringify({
          postId: id,
          userId,
        }),
      });
      const result = await response.json();
      console.log(result);
      setLikes(result.response);
      if (result.message === "Liked") {
        setLiked(true);
      } else if (result.message === "Disliked") {
        setLiked(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        backgroundColor: dark ? Colors.black : Colors.white,
      }}
    >
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ padding: 10 }}>
          <CircularImage uri={userData.profileImage} componentSize={50} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: dark ? Colors.white : Colors.black,
              fontFamily: "Comfortaa_bold",
              fontSize: 17,
            }}
          >
            {userData.name}
          </Text>
          <Text
            style={{
              color: dark ? Colors.darkGrey : Colors.greyText,
              fontFamily: "Comfortaa",
            }}
          >
            {userData.userName}
          </Text>
        </View>
        <View style={{ paddingRight: 20, paddingVertical: 10 }}>
          <Ionicons
            name="md-arrow-dropdown"
            size={24}
            color={Colors.postLightGrey}
          />
        </View>
      </View>
      {text ? (
        <View
          style={{
            marginHorizontal: 20,
            alignSelf: "stretch",
          }}
        >
          <Text
            style={{
              color: dark ? Colors.white : Colors.black,
              fontFamily: "Comfortaa",
              lineHeight: 20,
              fontSize: 15,
            }}
          >
            {text}
          </Text>
        </View>
      ) : null}

      {/* ANCHOR  Image Sections */}
      {images ? (
        <ScrollView
          style={{ marginTop: 10 }}
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {images.map((item) => {
            return (
              <View
                key={item.toString()}
                style={{
                  marginHorizontal: 10,
                  width,
                  height,
                  borderRadius: 20,
                  overflow: "hidden",
                  borderColor: dark ? Colors.darkContrast : Colors.light,
                  borderWidth: 1,
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                  source={{
                    uri: item,
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      ) : null}

      {/* ANCHOR */}
      {mentioned ? (
        <View
          style={{
            borderColor: Colors.highlight,
            marginTop: 10,
            borderRadius: 20,
            borderWidth: 0.5,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: widthMinimal,
            }}
          >
            <CommentPostComponent minimal photos={[1, 2, 3]} />
          </View>
        </View>
      ) : null}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{ padding: 10, borderRadius: 50 }}
            onPress={() => {
              setLiked(!liked);
            }}
            onPress={likePost}
          >
            <Ionicons
              name="ios-heart"
              size={20}
              color={liked ? Colors.red : Colors.postLightGrey}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: liked ? Colors.red : Colors.postLightGrey,
              fontSize: 11,
              fontFamily: "Comfortaa_bold",
            }}
          >
            {likes.length == 0 ? "" : `${likes.length}`}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{ padding: 10, borderRadius: 50 }}
            onPress={() => {}}
          >
            <MaterialIcons
              name="chat-bubble"
              size={20}
              color={Colors.postLightGrey}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.postLightGrey,
              fontSize: 11,
              fontFamily: "Comfortaa_bold",
            }}
          >
            {comments.length == 0 ? "" : `${comments.length}`}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{ padding: 10, borderRadius: 50 }}
            onPress={() => {}}
          >
            <Ionicons
              name="ios-share-alt"
              size={20}
              color={Colors.postLightGrey}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.postLightGrey,
              fontSize: 11,
              fontFamily: "Comfortaa_bold",
            }}
          >
            {shares.length == 0 ? "" : `${shares.length}`}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{ padding: 10, borderRadius: 50 }}
            onPress={() => {
              setBookmarked(!bookmarked);
            }}
          >
            <Ionicons
              name="md-bookmark"
              size={20}
              color={bookmarked ? "#0080FF" : Colors.postLightGrey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

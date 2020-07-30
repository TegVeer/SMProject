import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import Colors from "../../Constants/Colors";
import CircularImage from "../CircularImage";
import { useSelector } from "react-redux";
import { serverUrl } from "../../Constants/URL";

const width = Dimensions.get("screen").width;

const TalkPost = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  const [id, setId] = useState(props.id);
  const [init, setInit] = useState(true);
  const [images, setImages] = useState(props.postMedia);
  const [text, setText] = useState(props.postText);
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likeNumber, setLikeNumber] = useState(props.likes);
  const [commentsNumber, setCommentsNumber] = useState(props.comments);
  const [sharesNumber, setSharesNumber] = useState(props.shares);

  if (likeNumber.includes(userId) && init) {
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
      setLikeNumber(result.response);
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
        paddingVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ paddingHorizontal: 10 }}>
          <CircularImage
            componentSize={40}
            uri="https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG"
          />
        </View>
        <Text style={{ flex: 1 }} numberOfLines={1}>
          User Name
        </Text>
        <TouchableOpacity style={{ paddingHorizontal: 10 }}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {text ? (
        <View style={{ padding: 10 }}>
          <Text>{props.postText}</Text>
        </View>
      ) : (
        <View></View>
      )}

      {images.length === 0 ? null : (
        <ScrollView
          style={{ marginVertical: 10 }}
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {images.map((item) => {
            if (images.length === 1) {
              return (
                <View
                  key={item.toString()}
                  style={{ width: width, alignItems: "center" }}
                >
                  <View
                    style={{
                      marginHorizontal: 10,
                      width: width * 0.95,
                      height: 240,
                      borderRadius: 10,
                      overflow: "hidden",
                      borderColor: Colors.highlight,
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
                </View>
              );
            } else if (images.length > 1) {
              return (
                <View
                  key={item.toString()}
                  style={{
                    marginHorizontal: 10,
                    width: width * 0.8,
                    height: 200,
                    borderRadius: 10,
                    overflow: "hidden",
                    borderColor: Colors.highlight,
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
            }
          })}
        </ScrollView>
      )}

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 30,
          marginVertical: 5,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={likePost}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name={liked ? "ios-heart" : "ios-heart-empty"}
                size={20}
                color={liked ? "#E74C3C" : "#616A6B"}
              />
              <Text
                style={{
                  color: liked ? "#E74C3C" : "#616A6B",
                  fontSize: 13,
                  paddingLeft: 5,
                }}
              >
                {likeNumber.length === 0 ? "" : `${likeNumber.length}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setReposted(!reposted)}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign
                name="retweet"
                size={20}
                color={reposted ? "#2ECC71" : "#616A6B"}
              />
              <Text
                style={{
                  color: reposted ? "#2ECC71" : "#616A6B",
                  fontSize: 13,
                  paddingLeft: 5,
                }}
              >
                {sharesNumber.length === 0 ? "" : `${sharesNumber.length}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome name="comment-o" size={20} color="#616A6B" />
              <Text style={{ color: "#616A6B", fontSize: 13, paddingLeft: 5 }}>
                {commentsNumber.length === 0 ? "" : `${commentsNumber.length}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <AntDesign name="sharealt" size={20} color="#616A6B" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TalkPost;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
  ImageBackground,
  PanResponder,
  SafeAreaView,
  FlatList,
} from "react-native";
import Colors from "../Constants/Colors";
import CircularImage from "../Components/CircularImage";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Designs/Header";
import { useSelector } from "react-redux";
import TalkPost from "../Components/Templates/TalkPost";
import { serverUrl } from "../Constants/URL";

const width = Dimensions.get("window").width;

export default function Profile(props) {
  const userId = useSelector((state) => state.auth.userId);
  const [postList, setPostList] = useState([]);
  const [likedList, setLikedList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [active, setActive] = useState(0);
  const [xPostTab, setXPostTab] = useState(0);
  const [xLikedTab, setXLikedTab] = useState(0);
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [translateXPostsTab, setTranslateXPostsTab] = useState(
    new Animated.Value(0)
  );
  const [translateXLikedTab, setTranslateXLikedTab] = useState(
    new Animated.Value(width)
  );
  const [translateY, setTranslateY] = useState(-1000);

  if (loading) {
    fetchData()
      .then((result) => {
        setPostList(result.posts);
        setLikedList(result.liked);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }

  async function fetchData() {
    const postListResponse = await fetch(`${serverUrl}/post/${userId}`);
    const likedListResponse = await fetch(
      `${serverUrl}/post/likedPost/${userId}`
    );
    const postListResult = await postListResponse.json();
    const likedListResult = await likedListResponse.json();
    const result = { posts: postListResult, liked: likedListResult };
    return result;
  }

  function handelSlide(type) {
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  // useEffect(() => {
  //   if (active === 0) {
  //     Animated.parallel([
  //       Animated.spring(translateXPostsTab, {
  //         toValue: 0,
  //         duration: 100,
  //         useNativeDriver:true
  //       }).start(),
  //       Animated.spring(translateXLikedTab, {
  //         toValue: width,
  //         duration: 100,
  //         useNativeDriver:true
  //       }).start(),
  //     ]);
  //   } else {
  //     Animated.parallel([
  //       Animated.spring(translateXPostsTab, {
  //         toValue: -width,
  //         duration: 100,
  //         useNativeDriver:true
  //       }).start(),
  //       Animated.spring(translateXLikedTab, {
  //         toValue: 0,
  //         duration: 100,
  //         useNativeDriver:true
  //       }).start(),
  //     ]);
  //   }
  // }, [active]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingBottom: 5,
        }}
      >
        <TouchableOpacity
          style={{ paddingHorizontal: 10 }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={24} color={Colors.lightBlack} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: Colors.lightBlack,
              fontFamily: "Comfortaa",
              fontSize: 15,
            }}
          >
            Tegveer Singh
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}></View>
      </View>
      <ScrollView style={{ flex: 1, width: "100%" }} stickyHeaderIndices={[1]}>
        <View>
          <View style={{ width: "100%", height: 150 }}>
            <ImageBackground
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://coverfiles.alphacoders.com/695/69515.jpg",
              }}
            ></ImageBackground>
          </View>
          <View
            style={{
              marginTop: -45,
              marginLeft: 10,
              width: 90,
              height: 90,
              borderRadius: 100,
              borderColor: Colors.white,
              borderWidth: 2,
              overflow: "hidden",
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
                uri:
                  "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "Comfortaa_bold",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                Tegveer Singh
              </Text>
              <Text
                style={{
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                  color: Colors.greyText,
                  marginLeft: 10,
                }}
              >
                @teg_veer
              </Text>
            </View>
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 30,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#3498DB",
                  elevation: 8,
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontFamily: "Comfortaa",
                    fontSize: 12,
                  }}
                >
                  Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: Colors.lightBlack,
                }}
              >
                150
              </Text>
              <Text
                style={{
                  color: Colors.lightBlack,
                  fontFamily: "Comfortaa_bold",
                  fontSize: 14,
                }}
              >
                Posts
              </Text>
            </View>
            <View
              style={{
                borderLeftColor: Colors.greyText,
                borderLeftWidth: 1.5,
                height: 30,
              }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: Colors.lightBlack,
                }}
              >
                812
              </Text>
              <Text
                style={{
                  color: Colors.lightBlack,
                  fontFamily: "Comfortaa_bold",
                  fontSize: 14,
                }}
              >
                Followers
              </Text>
            </View>
            <View
              style={{
                borderLeftColor: Colors.greyText,
                borderLeftWidth: 1.5,
                height: 30,
              }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: Colors.lightBlack,
                }}
              >
                587
              </Text>

              <Text
                style={{
                  color: Colors.lightBlack,
                  fontFamily: "Comfortaa_bold",
                  fontSize: 14,
                }}
              >
                Following
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
            <Text
              style={{
                color: Colors.lightBlack,
                fontFamily: "Comfortaa_bold",
                fontSize: 15,
              }}
            >
              About
            </Text>
            <Text style={{ color: Colors.lightBlack, fontSize: 13 }}>
              Ullamco culpa laboris anim duis officia ullamco sit commodo. Ipsum
              reprehenderit mollit esse tempor nostrud esse nostrud esse esse
              incididunt ex qui ex magna.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: Colors.white,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 36,
              width: "100%",
              backgroundColor: Colors.white,
              position: "relative",
            }}
          >
            <Animated.View
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "50%",
                height: "5%",
                backgroundColor: Colors.lightBlack,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onLayout={(event) => setXPostTab(event.nativeEvent.layout.x)}
              onPress={() => {
                setActive(0);

                handelSlide(xPostTab);
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa_bold",
                  fontSize: 18,
                  color:
                    active === 0 ? Colors.lightBlack : Colors.placeholderText,
                }}
              >
                Posts
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onLayout={(event) => setXLikedTab(event.nativeEvent.layout.x)}
              onPress={() => {
                setActive(1);

                handelSlide(xLikedTab);
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa_bold",
                  fontSize: 18,
                  color:
                    active === 1 ? Colors.lightBlack : Colors.placeholderText,
                }}
              >
                Liked
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {active === 0 ? (
          <View>
            {postList.map((item, index) => {
              return (
                <View key={item._id}>
                  <TalkPost
                    postMedia={item.postMedia}
                    postText={item.postText}
                    likes={item.likes}
                    shares={item.shares}
                    comments={item.comments}
                    id={item._id}
                  />
                  {index < postList.length - 1 ? (
                    <View
                      style={{
                        marginVertical: 10,
                        width: "100%",
                        borderColor: Colors.highlight,
                        borderBottomWidth: 0.5,
                      }}
                    />
                  ) : null}
                </View>
              );
            })}

            <View
              style={{
                width: 50,
                height: 3,
                backgroundColor: Colors.highlight,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                borderRadius: 100,
              }}
            />
          </View>
        ) : (
          // TODO: Make Liked Post List
          <View>
            {likedList.map((item, index) => {
              return (
                <View key={item._id}>
                  <TalkPost
                    postMedia={item.postMedia}
                    postText={item.postText}
                    likes={item.likes}
                    shares={item.shares}
                    comments={item.comments}
                    id={item._id}
                  />
                  {index < postList.length - 1 ? (
                    <View
                      style={{
                        marginVertical: 10,
                        width: "100%",
                        borderColor: Colors.highlight,
                        borderBottomWidth: 0.5,
                      }}
                    />
                  ) : null}
                </View>
              );
            })}

            <View
              style={{
                width: 50,
                height: 3,
                backgroundColor: Colors.highlight,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                borderRadius: 100,
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

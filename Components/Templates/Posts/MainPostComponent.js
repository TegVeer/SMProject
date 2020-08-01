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
const width = Dimensions.get("window").width * 0.95;
const height = (width / 16) * 9;

export default function MainPostComponent(props) {
  const [liked, setLiked] = useState(true);
  const [bookmarked, setBookmarked] = useState(true);
  const image = props.image;
  const mentioned = props.mentioned;
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        borderBottomColor: Colors.highlight,
        borderBottomWidth: 0.5,
      }}
    >
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ padding: 10 }}>
          <CircularImage
            uri="https://cdn.shopify.com/s/files/1/1594/4815/articles/DSLR_astrophotography_intro_1024x1024.jpg?v=1575073582"
            componentSize={50}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: "Comfortaa_bold",
              fontSize: 17,
            }}
          >
            User Name
          </Text>
          <Text
            style={{
              color: Colors.greyText,
              fontFamily: "Comfortaa",
            }}
          >
            @user_name
          </Text>
        </View>
        <View style={{ paddingRight: 20, paddingVertical: 10 }}>
          <Ionicons name="md-arrow-dropdown" size={24} color="black" />
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            color: Colors.black,
            fontFamily: "Comfortaa",
            lineHeight: 20,
            fontSize: 15,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
      {/* ANCHOR  Image Sections */}
      {image ? (
        // <ScrollView horizontal>
        //   {image.map((item) => (
        //     <View
        //       style={{
        //         borderRadius: 20,
        //         overflow: "hidden",
        //         width,
        //         height,
        //         marginTop: 15,
        //       }}
        //     >
        //       <Image
        //         style={{
        //           flex: 1,
        //           height: null,
        //           width: null,
        //           resizeMode: "cover",
        //         }}
        //         source={{
        //           uri:
        //             "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/1489610446-milkyway.jpg",
        //         }}
        //       />
        //     </View>
        //   ))}
        // </ScrollView>
        <ScrollView
          style={{ marginVertical: 10 }}
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {image.map((item) => {
            return (
              <View
                key={item.toString()}
                style={{
                  marginHorizontal: 10,
                  width,
                  height,
                  borderRadius: 20,
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
                    uri:
                      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80",
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
            width: "90%",
            borderColor: Colors.highlight,
            marginTop: 10,
            borderRadius: 20,
            borderWidth: 0.5,
          }}
        >
          <CommentPostComponent minimal photos={[1, 2, 3, 4, 5]} />
        </View>
      ) : null}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 1,
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
          >
            <Ionicons
              name="ios-heart"
              size={24}
              color={liked ? Colors.red : Colors.postLightGrey}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: liked ? Colors.red : Colors.postLightGrey,
              fontSize: 12,
              fontFamily: "Comfortaa_bold",
            }}
          >
            105K
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
              size={24}
              color={Colors.postLightGrey}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.postLightGrey,
              fontSize: 12,
              fontFamily: "Comfortaa_bold",
            }}
          >
            523
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
              size={24}
              color={Colors.postLightGrey}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.postLightGrey,
              fontSize: 12,
              fontFamily: "Comfortaa_bold",
            }}
          >
            83
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
              size={24}
              color={bookmarked ? "#0080FF" : Colors.postLightGrey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

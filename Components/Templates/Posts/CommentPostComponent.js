import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Colors from "../../../Constants/Colors";
import CircularImage from "../../CircularImage";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const width = Dimensions.get("screen").width;
const height = (width / 16) * 9;
const widthSmall = width * 0.8;
const heightSmall = (widthSmall / 16) * 9;
const widthMinimal = width * 0.9;
const heightMinimal = (widthMinimal / 16) * 9;

export default function CommentPostComponent(props) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(true);
  const minimal = props.minimal;
  const image = props.photos;
  const data = props.data;

  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View style={{ padding: 10 }}>
          <CircularImage
            uri="https://cutewallpaper.org/21/lord-shiva-4k-wallpapers/Angry-Lord-Shiva-Wallpapers-Wallpaper-Cave.jpg"
            componentSize={30}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontFamily: "Comfortaa_bold" }}>
                User Name
              </Text>
              <Text
                style={{
                  color: Colors.greyText,
                  fontSize: 10,
                  fontFamily: "Comfortaa",
                }}
              >
                @user_name
              </Text>
            </View>
            <View style={{ paddingVertical: 10, paddingRight: 20 }}>
              <Ionicons name="md-arrow-dropdown" size={18} color="black" />
            </View>
          </View>
          <View style={{ marginRight: 20, marginVertical: 10 }}>
            <Text
              style={{
                color: Colors.black,
                fontFamily: "Comfortaa",
                fontSize: 12,
                lineHeight: 15,
              }}
            >
              This is a sample comment text to test the UI and UX of this
              specific component, it has nothing to do with any othe component
            </Text>
          </View>
        </View>
      </View>
      {image ? (
        <ScrollView
          style={{ marginTop: 10 }}
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          centerContent
          bouncesZoom
        >
          {image.map((item) => {
            return (
              <View
                key={item.toString()}
                style={
                  minimal
                    ? {
                        width: widthMinimal,
                        height: heightMinimal,
                        overflow: "hidden",
                      }
                    : {
                        marginHorizontal: width * 0.1,
                        width: widthSmall,
                        height: heightSmall,
                        borderRadius: 20,
                        overflow: "hidden",
                        borderColor: Colors.highlight,
                        borderWidth: 1,
                        marginBottom: 10,
                      }
                }
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
      {minimal ? null : (
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
              style={{ padding: 5, borderRadius: 50 }}
              onPress={() => {
                setLiked(!liked);
              }}
            >
              <Ionicons
                name="ios-heart"
                size={18}
                color={liked ? Colors.red : Colors.postLightGrey}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: liked ? Colors.red : Colors.postLightGrey,
                fontSize: 10,
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
              style={{ padding: 5, borderRadius: 50 }}
              onPress={() => {}}
            >
              <MaterialIcons
                name="chat-bubble"
                size={18}
                color={Colors.postLightGrey}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: Colors.postLightGrey,
                fontSize: 10,
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
              style={{ padding: 5, borderRadius: 50 }}
              onPress={() => {}}
            >
              <Ionicons
                name="ios-share-alt"
                size={18}
                color={Colors.postLightGrey}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: Colors.postLightGrey,
                fontSize: 10,
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
              style={{ padding: 5, borderRadius: 50 }}
              onPress={() => {
                setBookmarked(!bookmarked);
              }}
            >
              <Ionicons
                name="md-bookmark"
                size={18}
                color={bookmarked ? "#0080FF" : Colors.postLightGrey}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../Constants/Colors";
import CircularImage from "../CircularImage";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ padding: 10 }}>
          <CircularImage
            uri="https://store-images.s-microsoft.com/image/apps.11338.13768621950225582.167ba0c8-6eb8-47bb-96fe-278c89bf0dc9.17040c73-a0cb-41a2-8e72-1fd202c38a3c?w=1399&h=874&q=60"
            componentSize={30}
          />
        </View>
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <Text style={{ fontSize: 13, color: Colors.textBlack }}>
            User Name
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 10, color: Colors.postLightGrey }}>
            3 mins ago
          </Text>
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 10,
          marginLeft: 34,
          color: Colors.textBlack,
          fontSize: 11,
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            padding: 10,
            marginLeft: 34,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setLiked(!liked);
              setUnliked(false);
            }}
          >
            <AntDesign
              name="like1"
              color={liked ? Colors.likedBlue : Colors.textBlack}
              size={16}
            />
          </TouchableOpacity>

          <Text style={{ color: Colors.textBlack, fontSize: 10, padding: 5 }}>
            128
          </Text>
        </View>
        <View
          style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => {
              setUnliked(!unliked);
              setLiked(false);
            }}
          >
            <AntDesign
              style={{ marginTop: 6 }}
              name="dislike1"
              color={unliked ? Colors.likedBlue : Colors.textBlack}
              size={16}
            />
          </TouchableOpacity>

          <Text style={{ color: Colors.textBlack, fontSize: 10, padding: 5 }}>
            47
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
});

// FIXME
function PostComment(props) {
  return (
    <View>
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ padding: 10 }}>
          {/* TODO - Enter URL */}
          <CircularImage uri="" componentSize={30} />
        </View>
        <View>
          <Text
            style={{
              color: Colors.black,
              fontFamily: "Comfortaa_bold",
              fontSize: 18,
              flex: 1,
            }}
          >
            User Name
          </Text>
          <Text
            style={{
              color: Colors.greyText,
              fontFamily: "Comfortaa",
              fontSize: 12,
            }}
          >
            @userName
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          {/* TODO - Enter Name */}
          <Ionicons name="" size={24} color={Colors.black} />
        </View>
      </View>
    </View>
  );
}

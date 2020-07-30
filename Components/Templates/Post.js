import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Constants/Colors";
import CircularImage from "../CircularImage";
import {
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
} from "@expo/vector-icons";

const Post = (props) => {
  const postId = props.postId;
  const userName = props.userName;
  const userProfileImageUrl = props.userProfileImageUrl;
  const postImagesUrl = props.postImagesUrl;
  const postMessage = props.postMessage;
  const noOfLikes = props.noOfLikes;
  const commentsIdList = props.commentsIdList;
  const postCreationTime = props.postCreationTime;
  const noOfComments = props.noOfComments;
  const noOfShares = props.noOfShares;

  const [liked, setLiked] = useState(false);
  const [height, setHeight] = useState();
  const imageUri =
    "https://www.alphashooters.com/wp-content/uploads/2019/01/sony-sel85f18-gsd-puppy-DSC00116-1300px.jpg";
  const postImageUri =
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
  const deviceWidth = Dimensions.get("window").width;

  try {
    Image.getSize(postImageUri, (width, height) => {
      var newHeight = height * (deviceWidth / width);
      setHeight(newHeight);
    });
  } catch (err) {
    console.log(err);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 10 }}>
            <CircularImage componentSize={32} uri={userProfileImageUrl} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                color: Colors.textBlack,
                fontSize: 12,
                width: "100%",
              }}
            >
              {userName}
            </Text>
            <Text style={{ color: Colors.postLightGrey, fontSize: 10 }}>
              {postCreationTime}
            </Text>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Ionicons name="ios-more" size={20} color={Colors.textBlack} />
        </View>
      </View>
      <Image
        style={{ width: "100%", height: height }}
        source={{ uri: postImagesUrl }}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.postIconButton}
          onPress={() => setLiked(!liked)}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name={liked ? "ios-heart" : "ios-heart-empty"}
              size={23}
              color={liked ? Colors.red : Colors.textBlack}
            />
            <Text style={{ paddingLeft: 10 }}>{noOfLikes}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postIconButton}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="comment-o" size={23} color={Colors.textBlack} />
            <Text style={{ paddingLeft: 10 }}>{noOfComments}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postIconButton}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="md-share"
              size={23}
              color={Colors.textBlack}
              onPress={() => setLiked(!liked)}
            />
            <Text style={{ paddingLeft: 10 }}>{noOfShares}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ color: Colors.textBlack, fontSize: 12, width: "100%" }}>
          {postMessage}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ paddingLeft: 10, paddingRight: 5 }}>
          <Foundation name="marker" color={Colors.postLightGrey} size={16} />
        </View>
        <Text style={{ color: Colors.postLightGrey, fontSize: 10 }}>
          {" "}
          at Some Randome Place
        </Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topContainer: {
    flexDirection: "row",
  },
  postIconButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    borderColor: Colors.lightBorder,
    borderTopWidth: 1,
    borderLeftColor: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

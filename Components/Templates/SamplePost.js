import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CircularImage from "../CircularImage";
import Colors from "../../Constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const width = Dimensions.get("window").width * 0.95;
const height = (width / 16) * 9;

export default function SamplePost() {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <ScrollView>
      <StatusBar />
      <MainComponent />
      <CommentComponent/>
      <CommentComponent photos/>
      <CommentComponent/>
      </ScrollView>
    </View>
  );
}

function MainComponent(props) {
  const [liked, setLiked] = useState(true);

  const [bookmarked, setBookmarked] = useState(true);
  return (
    <View style={{ width: "100%", alignItems: "center", borderBottomColor: Colors.highlight, borderBottomWidth:0.5 }}>
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
            fontSize:15
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
      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          width,
          height,
          marginTop: 15,
        }}
      >
        <Image
          style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
          source={{
            uri:
              "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/1489610446-milkyway.jpg",
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 1,
          marginTop: 10,
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
              color: liked?Colors.red:Colors.postLightGrey,
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
          <TouchableOpacity style={{padding:10, borderRadius:50}} onPress={()=>{}}>
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
          <TouchableOpacity style={{padding:10,borderRadius:50}} onPress={()=>{}}>
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



function CommentComponent (props){
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(true);
  const photos = props.photos;
 
  return(
   <View style={{width: '100%', flexDirection:'row', borderBottomColor:Colors.highlight, borderBottomWidth:0.5}}>
    <View style={{padding:10}}>
      <CircularImage uri="https://cutewallpaper.org/21/lord-shiva-4k-wallpapers/Angry-Lord-Shiva-Wallpapers-Wallpaper-Cave.jpg" componentSize={30}/>
    </View>
    <View style={{flex:1}}>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
          <Text style={{fontSize:14, fontFamily:"Comfortaa_bold"}}>
            User Name
          </Text>
          <Text style={{color:Colors.greyText, fontSize:10, fontFamily:'Comfortaa'}}>
            @user_name
          </Text>
        </View>
        <View style={{paddingVertical:10, paddingRight:20}}>
        <Ionicons name="md-arrow-dropdown" size={18} color="black" />
        </View>
      </View>
      <View style={{marginRight:20, marginTop:10}}>
        <Text style={{color:Colors.black, fontFamily:'Comfortaa', fontSize:12, lineHeight:15}}>
        This is a sample comment text to test the UI and UX of this specific component, it has nothing to do with any othe component
        </Text>
      </View>
      {photos?<View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          width: '95%',
          height: 180,
          marginTop: 15,
        }}
      >
        <Image
          style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
          source={{
            uri:
              "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/1489610446-milkyway.jpg",
          }}
        />
      </View>:<View></View>}

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 1,
          marginTop: 10,
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
              color: liked?Colors.red:Colors.postLightGrey,
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
          <TouchableOpacity style={{padding:5, borderRadius:50}} onPress={()=>{}}>
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
          <TouchableOpacity style={{padding:5,borderRadius:50}} onPress={()=>{}}>
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
    </View>
  </View>
)
}
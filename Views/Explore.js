import React, { useState } from "react";
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Colors from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { serverUrl } from "../Constants/URL";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [tagList, setTagList] = useState([
    { key: 1, tag: "Trending" },
    { key: 2, tag: "News" },
    { key: 3, tag: "Sports" },
    { key: 4, tag: "Business" },
    { key: 5, tag: "Economics" },
    { key: 6, tag: "Science & Technology" },
    { key: 7, tag: "COVID-19" },
  ]);
  function searchHandeler(text) {
    setSearch(text);
  }
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          backgroundColor: Colors.lightBorder,
          justifyContent: "center",
          padding: 5,
          borderRadius: 50,
        }}
      >
        <TextInput
          style={{
            paddingVertical: 2,
            paddingHorizontal: 15,
            flex: 1,
          }}
          placeholder="Search"
          placeholderTextColor="grey"
          onChangeText={searchHandeler}
        />
        <TouchableOpacity style={{ padding: 5, marginRight: 10 }}>
          <Ionicons name="ios-search" size={24} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "baseline" }}>
        <FlatList
          style={{ paddingHorizontal: 5 }}
          data={tagList}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                alignSelf: "baseline",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: Colors.lightBorder,
                marginHorizontal: 5,
              }}
            >
              <Text style={{ color: "#5DADE2" }}>{item.tag}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Explore;

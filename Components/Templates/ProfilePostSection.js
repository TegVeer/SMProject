import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import Colors from "../../Constants/Colors";

const PostsList = () => {
  let listData = [
    { key: "A" },
    { key: "B" },
    { key: "C" },
    { key: "D" },
    { key: "E" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "I" },
    { key: "J" },
    { key: "K" },
  ];

  const formatData = () => {
    let numberOfFullRow = Math.floor(listData.length / 3);
    let numberOfLastRowElements = listData.length - numberOfFullRow * 3;
    while (numberOfLastRowElements !== 3 && numberOfLastRowElements !== 0) {
      listData.push({ key: `blank-${numberOfLastRowElements}`, empty: true });
      numberOfLastRowElements = numberOfLastRowElements + 1;
    }
    return listData;
  };

  return (
    <FlatList
      data={formatData()}
      style={{ flex: 1, marginTop: 10 }}
      renderItem={({ item }) => {
        if (item.empty === true) {
          return (
            <View
              style={{
                flex: 1,
                height: Dimensions.get("window").width / 3,
                margin: 1,
                backgroundColor: "transparent",
              }}
            ></View>
          );
        }
        return (
          <View
            style={{
              flex: 1,
              height: Dimensions.get("window").width / 3,
              margin: 1,
              backgroundColor: "#4f243d",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.white }}>{item.key}</Text>
          </View>
        );
      }}
      numColumns={3}
    />
  );
};

export default PostsList;

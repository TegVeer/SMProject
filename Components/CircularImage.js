import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

//  NOTE
// Required Props:-
// 1. componentSize - required (width of Circular Image Component)
// 2. uri - required (uri for the image to load in Circular Image Component)
// 3. onClick (method to sense when the Circular Image Component is clicked)
// 4. animation = opacity/ripple/none (type of animation on Touchable Component)
// 5. elevation = elevation property

export default function CircularImage(props) {
  const size = props.componentSize;
  const radius = size / 2;
  const imageUri = props.uri;
  const animation = props.animation;
  const gender = props.gender;
  const elevation = props.elevation;
  const [defaultImage, setDefaultImage] = useState();
  const [loading, setloading] = useState(true);
  var Component = TouchableOpacity;

  if (loading) {
    if (gender === "Female") {
      setDefaultImage(require("../assets/default-profile-female.jpg"));
    } else {
      setDefaultImage(require("../assets/default-profile-male.jpg"));
    }
    setloading(false);
  }

  if (animation === "opacity") Component = TouchableOpacity;
  else if (animation === "ripple") Component = TouchableNativeFeedback;
  else if (animation === "none") Component = TouchableWithoutFeedback;
  return (
    <Component
      style={[
        Styles.container,
        {
          width: size,
          height: size,
          borderRadius: radius,
          elevation: elevation ? elevation : 0,
        },
      ]}
      onPress={props.onClick}
    >
      <Image
        style={([Styles.image], { width: size, height: size })}
        source={imageUri ? { uri: imageUri } : defaultImage}
      />
    </Component>
  );
}

const Styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});

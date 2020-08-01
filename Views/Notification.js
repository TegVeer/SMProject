// import React from "react";
// import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../Components/Designs/Header";
// import NotificationComponent from "../Components/Templates/NotificationComponent";
// import Colors from "../Constants/Colors";
// import { serverUrl } from "../Constants/URL";

// const Notification = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: Colors.white }}>
//       <Header title="Notifications" />
//       <ScrollView>
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//         <NotificationComponent />
//       </ScrollView>
//     </View>
//   );
// };

// export default Notification;

// const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Notifications" />

      <ScrollView>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.heading}>Today</Text>
          </View>
          <View style={styles.notification}>
            <Image
              source={{
                uri:
                  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={styles.textView}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack </Text>
                <Text>liked your post. </Text>
                <Text style={{ color: "grey" }}>2 h</Text>
              </Text>
            </View>
            <View style={styles.image}>
              <Image
                source={{
                  uri:
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
                }}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Yesterday</Text>
          </View>
          <View style={styles.notification}>
            <Image
              source={{
                uri:
                  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={styles.textView}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack </Text>
                <Text>commented on your post. </Text>
                <Text style={{ color: "grey" }}>1 h</Text>
              </Text>
            </View>
            <View style={styles.image}>
              <Image
                source={{
                  uri:
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
                }}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </View>
          <View style={styles.notification}>
            <Image
              source={{
                uri:
                  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={{ marginHorizontal: "5%", width: "62%" }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack </Text>
                <Text>started following you. </Text>
                <Text style={{ color: "grey" }}>3 h</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notification}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri:
                    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
                }}
                style={{
                  position: "absolute",
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                }}
              ></Image>
              <Image
                source={{
                  uri:
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={styles.dualProfileImage}
              ></Image>
            </View>

            <View style={styles.textView}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack </Text>
                <Text>and </Text>
                <Text style={{ fontWeight: "bold" }}>Obama </Text>
                <Text>liked your post. </Text>
                <Text style={{ color: "grey" }}>2 h</Text>
              </Text>
            </View>
            <View style={styles.image}>
              <Image
                source={{
                  uri:
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
                }}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </View>
          <View style={styles.notification}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri:
                    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
                }}
                style={{
                  position: "absolute",
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                }}
              ></Image>
              <Image
                source={{
                  uri:
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={styles.dualProfileImage}
              ></Image>
            </View>
            <View style={styles.textView}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack</Text>
                <Text>, </Text>
                <Text style={{ fontWeight: "bold" }}>Obama </Text>
                <Text>and </Text>
                <Text style={{ fontWeight: "bold" }}>35 others </Text>
                <Text>liked your post. </Text>
                <Text style={{ color: "grey" }}>2 h</Text>
              </Text>
            </View>
            <View style={styles.image}>
              <Image
                source={{
                  uri:
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
                }}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.heading}>This Week</Text>
          </View>
          <View style={styles.notification}>
            <Image
              source={{
                uri:
                  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={{ marginHorizontal: "5%", width: "56%" }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Modi </Text>
                <Text>started following you. </Text>
                <Text style={{ color: "grey" }}>3 h</Text>
              </Text>
            </View>
            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 1 }}>
              <Text
                style={{
                  textAlign: "center",
                  // color: "white",
                  fontWeight: "bold",
                  marginHorizontal: "3%",
                  marginVertical: "5%",
                }}
              >
                Following
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notification}>
            <Image
              source={{
                uri:
                  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={styles.textView}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack </Text>
                <Text>shared your post. </Text>
                <Text style={{ color: "grey" }}>2 h</Text>
              </Text>
            </View>
            <View style={styles.image}>
              <Image
                source={{
                  uri:
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
                }}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.heading}>This Month</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri:
                    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
                }}
                style={{
                  position: "absolute",
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                }}
              ></Image>
              <Image
                source={{
                  uri:
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={styles.dualProfileImage}
              ></Image>
            </View>
            <View style={styles.textView}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Barack</Text>
                <Text>, </Text>
                <Text style={{ fontWeight: "bold" }}>Obama </Text>
                <Text>and </Text>
                <Text style={{ fontWeight: "bold" }}>35 others </Text>
                <Text>started following you. </Text>
                <Text style={{ color: "grey" }}>2 h</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: height,
    // width: width,
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    marginHorizontal: "5%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "10%",
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  profileImage: {
    //marginTop: "10%",
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  dualProfileImage: {
    height: 35,
    width: 35,
    borderRadius: 100,
    marginLeft: 8,
    marginTop: 10,
  },
  profileImageContainer: {
    height: 40,
    width: 40,
  },
  image: {
    justifyContent: "flex-end",
  },
  textView: {
    marginHorizontal: "5%",
    width: "68%",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#039dfc",
    // margin: "5%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginHorizontal: "3%",
    marginVertical: "5%",
  },
});

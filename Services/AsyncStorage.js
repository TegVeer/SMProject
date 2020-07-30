import { AsyncStorage } from "react-native";

export const USER_DATA = "USER_DATA";

export function setUserData(
  token,
  tokenExpiry,
  userId,
  email,
  name,
  phone,
  gender,
  dateOfBirth,
  userName,
  profileImage,
  coverImage,
  bio,
  posts,
  location,
  following,
  followers
) {
  AsyncStorage.setItem(
    USER_DATA,
    JSON.stringify({
      token,
      tokenExpiry,
      userId,
      email,
      name,
      phone,
      gender,
      dateOfBirth,
      userName,
      profileImage,
      coverImage,
      bio,
      posts,
      location,
      following,
      followers,
    })
  );
}

export function removeUserData() {
  AsyncStorage.setItem(
    USER_DATA,
    JSON.stringify({
      token: null,
      tokenExpiry: null,
      userId: null,
      email: null,
      name: null,
      phone: null,
      gender: null,
      dateOfBirth: null,
      userName: null,
      profileImage: null,
      coverImage: null,
      bio: null,
      posts: [],
      location: null,
      following: [],
      followers: [],
    })
  );
}

export async function getUserData() {
  const userData = await AsyncStorage.getItem(USER_DATA);
  return userData;
}

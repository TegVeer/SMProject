import { AsyncStorage } from "react-native";

export const ACCOUNT_DATA = "ACCOUNT_DATA";
export const USER_DATA = "USER_DATA";

export const saveAccountData = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    ACCOUNT_DATA,
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString()
    })
  );
};

export const removeAccountData = () => {
  AsyncStorage.setItem(
    ACCOUNT_DATA,
    JSON.stringify({
      token: null,
      userId: null,
      expiryDate: null
    })
  );
};

export const addUserData = (imageUrl, name, gender) => {
  AsyncStorage.setItem(
    USER_DATA,
    JSON.stringify({
      profilePicture: imageUrl,
      userName: name,
      userGender: gender
    })
  );
};

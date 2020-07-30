export const ADD_AUTH = "ADD_AUTH";
export const REMOVE_AUTH = "REMOVE_AUTH";
export const ADD_PROFILE_DETAILS = "ADD_PROFILE_DETAILS";

export const addAuthData = (
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
) => {
  return {
    type: ADD_AUTH,
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
  };
};

export const addProfileDetails = (userName, profileImage, coverImage) => {
  return { type: ADD_PROFILE_DETAILS, userName, profileImage, coverImage };
};

export const removeAuthData = () => {
  return { type: REMOVE_AUTH };
};

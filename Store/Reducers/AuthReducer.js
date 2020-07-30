import {
  ADD_AUTH,
  REMOVE_AUTH,
  ADD_PROFILE_DETAILS,
} from "../Actions/AuthAction";

const initialState = {
  token: "",
  userId: "",
  tokenExpiry: 0,
  email: "",
  name: "",
  phone: "",
  gender: "",
  dateOfBirth: "",
  userName: "",
  profileImage: "",
  coverImage: "",
  bio: "",
  posts: [],
  location: "",
  following: [],
  followers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTH:
      return {
        ...state,
        token: action.token,
        tokenExpiry: action.tokenExpiry,
        userId: action.userId,
        email: action.email,
        name: action.name,
        phone: action.phone,
        gender: action.gender,
        dateOfBirth: action.dateOfBirth,
        userName: action.userName,
        profileImage: action.profileImage,
        coverImage: action.coverImage,
        bio: action.bio,
        posts: action.posts,
        location: action.location,
        following: action.following,
        followers: action.followers,
      };
      break;
    case ADD_PROFILE_DETAILS:
      return {
        ...state,
        userName: action.userName,
        profileImage: action.profileImage,
        coverImage: action.coverImage,
      };
    case REMOVE_AUTH:
      return {
        ...state,
        token: "",
        userId: "",
        tokenExpiry: 0,
        email: "",
        name: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        userName: "",
        profileImage: "",
        coverImage: "",
        bio: "",
        posts: [],
        location: "",
        following: [],
        followers: [],
      };
      break;
    default:
      return state;
  }
};

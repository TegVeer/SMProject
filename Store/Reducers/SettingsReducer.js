import { ACCOUNT, NOTIFICATION, PRIVACY } from "../Actions/SettingsAction";

const EVERYONE = "EVERYONE";
const FOLLOWERS = "FOLLOWERS";
const NO_ONE = "NO_ONE";

const initialState = {
  Accounts: {
    userName: "",
    phone: "",
    emai: "",
    country: "",
    profileImage: "",
    coverImage: "",
    bio: "",
  },
  Notificatons: {
    state: true,
    like: true,
    comments: true,
    recommendations: true,
    suggestions: true,
    message: true,
  },
  Privacy: {
    posts: EVERYONE,
    message: EVERYONE,
    comments: EVERYONE,
    mention: EVERYONE,
    blockedUsers: [],
    restrictedUsers: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT:
      return { ...state, ...action.data };
    case NOTIFICATION:
      return { ...state, ...action.data };
    case PRIVACY:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

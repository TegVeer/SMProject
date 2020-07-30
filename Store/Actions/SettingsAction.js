export const ACCOUNT = "ACCOUNT";
export const NOTIFICATION = "NOTIFICATION";
export const PRIVACY = "PRIVACY";
export const ALL_SETTINGS = "ALL_SETTINGS";

export function setAccountSettings(data) {
  return { type: ACCOUNT, data };
}

export function setNotificationSettings(data) {
  return { type: NOTIFICATION, data };
}

export function setPrivacySettings(data) {
  return { type: PRIVACY, data };
}

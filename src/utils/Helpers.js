import { LOCAL_STORAGE_KEYS } from "./Constants";

export const setUserDetials = (userData) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.USER_DETAILS, JSON.stringify(userData));
  sessionStorage.setItem(LOCAL_STORAGE_KEYS.USER_DETAILS, JSON.stringify(userData));
}

export const getUserDetails = () => {
  let localUserDetails = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DETAILS);
  let sessionUserDetails = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DETAILS);

  localUserDetails = JSON.parse(localUserDetails);
  sessionUserDetails = JSON.parse(sessionUserDetails);

  return {
    localUserDetails,
    sessionUserDetails
  };
}

export const clearUserSession = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_DETAILS);
  localStorage.clear();
}
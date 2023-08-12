import API from "./index";
const userSignInAPI = (body) => API.post("./auth/signin", body);
const userSignUpAPI = (body) => API.post("/auth/signup", body);
const userOtpSendAPI = (body) => API.post("./auth/sendotp", body);
const getSignedInUserAPI = () => API.get("/auth/user/restore");
const getTokenUpdate = () => API.get("/auth/token");
const handleLogOutAPI = () => API.delete("/auth/logout");

// user profile
const getUserDetailsAPI = () => API.get("/user/details");
const updateUserDetailsAPI = (body) => API.post("/user/details", body);
export {
  userSignInAPI,
  userSignUpAPI,
  userOtpSendAPI,
  getSignedInUserAPI,
  handleLogOutAPI,
  getTokenUpdate,
  getUserDetailsAPI,
  updateUserDetailsAPI,
};

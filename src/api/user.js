import API from "./index";
const userSignInAPI = (body) => API.post("./auth/signin", body);
const userSignUpAPI = (body) => API.post("/auth/signup", body);
const userOtpSendAPI = (body) => API.post("./auth/sendotp", body);
const getSignedInUserAPI = () => API.get("/auth/user/restore");
const handleLogOutAPI = () => API.delete("/auth/logout");
export {
  userSignInAPI,
  userSignUpAPI,
  userOtpSendAPI,
  getSignedInUserAPI,
  handleLogOutAPI,
};

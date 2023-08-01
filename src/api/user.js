import API from "./index";
const userSignInAPI = (body) => API.post("./auth/signin", body);
const userSignUpAPI = (body) => API.post("/auth/signup", body);
const userOtpSendAPI = (body) => API.post("./auth/sendotp", body);
export { userSignInAPI, userSignUpAPI, userOtpSendAPI };

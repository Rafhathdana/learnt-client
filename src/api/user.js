import API from "./index";
const userSignInAPI = (body) => API.post("./auth/signin", body);
const userSignUpAPI = (body) => {
  console.log("rafhath reached here");
  API.post("/auth/signup", body);
};
const userOtpSendAPI = (body) => API.post("./auth/sendotp", body);
export { userSignInAPI, userSignUpAPI };

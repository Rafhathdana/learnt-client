import API from "./index";
const tutorSignInAPI = (body) => API.post("./auth/tutor/signin", body);
const tutorSignUpAPI = (body) => API.post("/auth/tutor/signup", body);
const tutorOtpSendAPI = (body) => API.post("./auth/tutor/sendotp", body);
export { tutorSignInAPI, tutorSignUpAPI, tutorOtpSendAPI };

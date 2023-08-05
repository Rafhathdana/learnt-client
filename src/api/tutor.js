import API from "./index";
const tutorSignInAPI = (body) => API.post("./auth/tutor/signin", body);
const tutorSignUpAPI = (body) => API.post("/auth/tutor/signup", body);
const tutorOtpSendAPI = (body) => API.post("./auth/tutor/sendotp", body);
const getSignedInTutorAPI = () => API.get("/auth/tutor/restore");
const handleTutorLogOutAPI = () => API.delete("/auth/tutor/logout");

export {
  tutorSignInAPI,
  tutorSignUpAPI,
  tutorOtpSendAPI,
  getSignedInTutorAPI,
  handleTutorLogOutAPI,
};

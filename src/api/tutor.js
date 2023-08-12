import API from "./index";
//login and logout section
const tutorSignInAPI = (body) => API.post("./auth/tutor/signin", body);
const tutorSignUpAPI = (body) => API.post("/auth/tutor/signup", body);
const tutorOtpSendAPI = (body) => API.post("./auth/tutor/sendotp", body);
const getSignedInTutorAPI = () => API.get("/auth/tutor/restore");
const handleTutorLogOutAPI = () => API.delete("/auth/tutor/logout");
//course section
const createCourseAPI = (body, route = `/tutor/courses/create`) => {
  return API.post(route, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const getAllCoursesByTutorAPI = () => API;
export {
  tutorSignInAPI,
  tutorSignUpAPI,
  tutorOtpSendAPI,
  getSignedInTutorAPI,
  handleTutorLogOutAPI,
  createCourseAPI,
  getAllCoursesByTutorAPI,
};

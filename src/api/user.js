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

const getCourseDetailsAPI = (id, route = "/user/courses/enroll/") =>
  API.get(route + id);
const getCourseEnrolledDetailsAPI = (id, route = "/user/courses/enrolled/") =>
  API.get(route + id);

const enrollCourseAPI = (body) => API.post("/user/courses/enroll", body);

const createOrderAPI = (courseId) =>
  API.post("/user/orders/create", { courseId });
const verifyPaymentAPI = (data) =>
  API.post("/user/orders/payment/verify", data);
const isEnrolledInCourseAPI = (courseId) =>
  API.get(`/user/details/enrolled/${courseId}/check`);
const getAllOrdersByUserAPI = () => API.get(`/user/orders`);
const getUserEnrolledCoursesAPI = () => API.get(`user/courses/enroll`);
export {
  userSignInAPI,
  userSignUpAPI,
  userOtpSendAPI,
  getSignedInUserAPI,
  handleLogOutAPI,
  getTokenUpdate,
  getUserDetailsAPI,
  updateUserDetailsAPI,
  getCourseDetailsAPI,
  enrollCourseAPI,
  createOrderAPI,
  verifyPaymentAPI,
  isEnrolledInCourseAPI,
  getUserEnrolledCoursesAPI,
  getAllOrdersByUserAPI,
  getCourseEnrolledDetailsAPI,
};

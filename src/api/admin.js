import API from "./index";
const adminSignInAPI = (body) => API.post("./auth/admin/signin", body);
const adminSignUpAPI = (body) => API.post("/auth/admin/signup", body);
const adminOtpSendAPI = (body) => API.post("./auth/admin/sendotp", body);
export { adminSignInAPI, adminSignUpAPI, adminOtpSendAPI };

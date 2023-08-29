import API from "./index";
const getAllCategoriesAPI = (route = "/admin/category") => {
  return API.get(route);
};
const getAllCoursesAPI = () => {
  return API.get("/user/courses");
};
const getAllCourseByFilter = (data) => {
  return API.get(`user/courses?${data}`);
};

export { getAllCategoriesAPI, getAllCoursesAPI, getAllCourseByFilter };

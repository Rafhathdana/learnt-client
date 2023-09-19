// users
const Dumy = "#";
const Home = "/";
const Contact = "/contact";
const About = "/#";
const PrivacyPolicy = "/#";
const Licensing = "/#";
const User = "/user";
const UserSignIn = (pathname) => `/signin?from=${pathname}`;
const UserSignUp = "/signup";
const Explore = "/explore";
const Profile = "/user/profile";
const CourseOwned = "/user/profile/courses";
const ViewTransaction = "/user/profile/transactions";
const Enrolled = "/courses/enrolled";
const UserCourse = (id) => `/courses/${id}`;
const UserViewCourse = (id) => `/courses/enrolled/${id}`;

// tutors
const Tutor = "/tutor";
const TutorContact = "/tutor/contact";
const ManageCourse = "/tutor/courses";
const CreateCourse = "/tutor/courses/create";
const TutorViewCourse = (id) => `/tutor/courses/${id}`;
const TutorDashboard = "/tutor/dashboard";
const TutorProfile = "/tutor/profile";
const TutorSignIn = (pathname) => `/tutor/signin?from=${pathname}`;
const TutorSignUp = "/tutor/signup";
// Export routes

// admin
const Admin = "/admin";
const AdminSignIn = (pathname) => `/admin/signin?from=${pathname}`;
const AdminSignUp = "/admin/signup";
const AdminManageUser = "/user/manage";
const AdminManageTutor = "/tutor/manage";
const AdminSales = "/sales/manage";
const AdminProfile = "/admin/profile";
const AdminCategory = "/admin/category";

export {
  Dumy,
  Home,
  Contact,
  About,
  PrivacyPolicy,
  Licensing,
  User,
  UserSignIn,
  UserSignUp,
  Explore,
  Profile,
  CourseOwned,
  ViewTransaction,
  Enrolled,
  UserCourse,
  UserViewCourse,
  Tutor,
  TutorContact,
  ManageCourse,
  CreateCourse,
  TutorViewCourse,
  TutorDashboard,
  TutorProfile,
  TutorSignIn,
  TutorSignUp,
  Admin,
  AdminSignIn,
  AdminSignUp,
  AdminManageUser,
  AdminManageTutor,
  AdminSales,
  AdminProfile,
  AdminCategory,
};

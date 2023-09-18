// users
const Home = "/";
const Contact = "/contact";
const User = "/user";
const UserSignIn = (pathname) => `/signin?from=${pathname}`;
const UserSignUp = "/signup";
const Explore = "/explore";
const Profile = "/user/profile";
const CourseOwned = "/user/profile/courses";
const ViewTransaction = "/user/profile/transactions";
const Enrolled = "/courses/enrolled";
const Course = (id) => `/courses/${id}`;
const ViewCourse = (id) => `/courses/enrolled/${id}`;

// tutors
const Tutor = "/tutor";
const TutorAbout = "/tutor/about";
const TutorContact = "/tutor/contact";
const ManageCourse = "/tutor/courses";
const CreateCourse = "/tutor/courses/create";
const TutorDashboard = "/tutor/dashboard";
const TutorProfile = "/tutor/profile";
const TutorSignIn = (pathname) => `/tutor/signin?from=${pathname}`;
const TutorSignUp = "/tutor/signup";
// Export routes
export {
  Home,
  Contact,
  User,
  UserSignIn,
  UserSignUp,
  Explore,
  Profile,
  CourseOwned,
  ViewTransaction,
  Enrolled,
  Course,
  ViewCourse,
  Tutor,
  TutorAbout,
  TutorContact,
  ManageCourse,
  CreateCourse,
  TutorDashboard,
  TutorProfile,
  TutorSignIn,
  TutorSignUp,
};

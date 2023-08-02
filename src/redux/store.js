import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import tutorReducer from "../features/tutorSlice";
import adminReducer from "../features/adminSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    tutor: tutorReducer,
    admin: adminReducer,
  },
});

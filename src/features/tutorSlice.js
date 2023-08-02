import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: null,
  email: null,
  tutorId: null,
  loggedIn: false,
};
const tutorSlice = createSlice({
  name: "tutor",
  initialState: initialState,
  reducers: {
    setTutor: (state, action) => {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.tutorId = action.payload._id;
      state.loggedIn = true;
    },
    removeTutor: (state) => {
      state.name = null;
      state.email = null;
      state.tutorId = null;
      state.loggedIn = false;
    },
  },
});

export const { setTutor, removeTutor } = tutorSlice.actions;

export default tutorSlice.reducer;

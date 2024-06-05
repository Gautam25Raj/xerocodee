import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
    role: null,
    company: null,
    organisation: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },

    setRole: (state, action) => {
      state.role = action.payload;
    },

    clearRole: (state) => {
      state.role = null;
    },

    setOrganisation: (state, action) => {
      state.organisation = action.payload;
    },

    clearOrganisation: (state) => {
      state.organisation = null;
    },

    setCompany: (state, action) => {
      state.company = action.payload;
    },

    clearCompany: (state) => {
      state.company = null;
    },
  },
});

export const {
  setUser,
  clearUser,
  setOrganisation,
  clearOrganisation,
  setCompany,
  clearCompany,
  setRole,
  clearRole,
} = userSlice.actions;

export default userSlice.reducer;

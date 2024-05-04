import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  user: {
    name: string;
    dob: string;
  } | null;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state: AuthState) => {
      state.isLoading = true;
      state.user = null;
    },
    loginSuccess: (state: AuthState, actions) => {
      console.log(actions);
      state.isLoading = false;
      state.user = actions.payload.user;
    },
    loginFailed: (state: AuthState) => {
      state.isLoading = false;
      state.user = null;
    },
  },
});

export const { login, loginSuccess, loginFailed } = authSlice.actions;
export default authSlice.reducer;

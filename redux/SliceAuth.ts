import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  status: string | null;
  message: string | null;
  user: {
    username: string;
    password: string;
    name: string;
  } | null;
}

const initialState: AuthState = {
  isLoading: false,
  status: null,
  message: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state: AuthState, actions) => {
      return {
        ...state,
        isLoading: true,
        status: null,
        message: null,
        user: null,
      };
    },
    loginSuccess: (state: AuthState, actions) => {
      // state.isLoading = false;
      const data = actions.payload;
      console.log("Login Success");
      console.log(data);

      return {
        ...state,
        isLoading: false,
        status: data.status,
        message: data.message,
        user: data.data,
      };
    },
    loginFailed: (state: AuthState) => {
      return {
        ...state,
        isLoading: false,
        status: null,
        message: null,
        user: null,
      };
    },
  },
});

export const { login, loginSuccess, loginFailed } = authSlice.actions;
export default authSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExpenseState {
  isLoading: boolean;
  status: string | null;
  message: string | null;
  expense: {
    id: string;
    type: string;
    date: string;
    amount: string;
    description: string;
  } | null;
}

const initialState: ExpenseState = {
  isLoading: false,
  status: null,
  message: null,
  expense: null,
};

const authSlice = createSlice({
  name: "expensedetails",
  initialState: initialState,
  reducers: {
    getExpenseDetails: (state: ExpenseState, actions) => {
      return {
        ...state,
        isLoading: true,
        status: null,
        message: null,
        expense: null,
      };
    },
    getExpenseDetailsSucceed: (state: ExpenseState, actions) => {
      const data = actions.payload;
      console.log("Expenses Fetched");
      console.log(data);

      return {
        ...state,
        isLoading: false,
        status: data.status,
        message: data.message,
        expense: data.data.resources,
      };
    },
    getExpenseDetailsFailed: (state: ExpenseState) => {
      return {
        ...state,
        isLoading: false,
        status: null,
        message: null,
        expense: null,
      };
    },
  },
});

export const {
  getExpenseDetails,
  getExpenseDetailsSucceed,
  getExpenseDetailsFailed,
} = authSlice.actions;
export default authSlice.reducer;

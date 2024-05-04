import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExpenseState {
  expenses: [];
}

const initialState: ExpenseState = {
  expenses: [],
};

const authSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    getExpenses: (state: ExpenseState) => {
      state.expenses = [...initialState.expenses, ...state.expenses];
    },
    expesesSuccess: (state: ExpenseState) => {
      state.expenses = [...state.expenses];
    },
    expesesFailed: (state: ExpenseState) => {
      state.expenses = [...state.expenses];
    },
  },
});

export const { getExpenses, expesesSuccess, expesesFailed } = authSlice.actions;
export default authSlice.reducer;

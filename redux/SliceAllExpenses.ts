import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Expense {
  id: string;
  type: string | null;
  date: string | null;
  amount: string | null;
  description: string | null;
}

interface ExpenseState {
  isLoading: boolean;
  status: string | null;
  message: string | null;
  expenses: Expense[];
}

const initialState: ExpenseState = {
  isLoading: false,
  status: null,
  message: null,
  expenses: [],
};

const authSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    getAllExpenses: (state: ExpenseState) => {
      return {
        ...state,
        isLoading: true,
        status: null,
        message: null,
        expenses: [],
      };
    },
    getAllExpensesSucceed: (state: ExpenseState, actions) => {
      const data = actions.payload;
      console.log("Expenses Fetched");
      console.log(data);

      return {
        ...state,
        isLoading: false,
        status: data.status,
        message: data.message,
        expenses: data.data.resources,
      };
    },
    getAllExpensesFailed: (state: ExpenseState) => {
      return {
        ...state,
        isLoading: false,
        status: null,
        message: null,
        expenses: [],
      };
    },
  },
});

export const { getAllExpenses, getAllExpensesSucceed, getAllExpensesFailed } =
  authSlice.actions;
export default authSlice.reducer;

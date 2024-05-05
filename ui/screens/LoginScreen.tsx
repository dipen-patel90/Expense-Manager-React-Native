import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NAV_SCREENS } from "../UIConstants";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { login } from "../../redux/SliceAuth";
import { getAllExpenses } from "../../redux/SliceAllExpenses";
import { getExpenseDetails } from "../../redux/SliceExpenseDetails";

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList, NAV_SCREENS.LOGIN>;
  route: RouteProp<RootStackParamList, NAV_SCREENS.LOGIN>;
}

const LoginScreen = ({ navigation, route }: LoginProps) => {
  const authData = useSelector((state: RootState) => state.authReducer);
  const expenseList = useSelector((state: RootState) => state.expensesReducer);
  const expenseDetail = useSelector(
    (state: RootState) => state.expensesDetailReducer
  );
  const dispatch = useDispatch();

  if (authData.isLoading || expenseList.isLoading || expenseDetail.isLoading) {
    return <Text>Loading....</Text>;
  }

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Go To Expense List"
        onPress={() => {
          navigation.navigate(NAV_SCREENS.EXPENSE_LIST, {
            username: "Test User",
          });
        }}
      />

      <Text>{authData?.user?.name}</Text>
      <Text>{authData?.user?.username}</Text>
      <Text>{authData?.user?.password}</Text>

      <Button
        title="Login"
        onPress={() => {
          dispatch(
            login({
              username: "abc",
              password: "123",
            })
          );
        }}
      />

      <Text>Expense Count : {expenseList?.expenses.length}</Text>

      <FlatList
        style={{ height: 300 }}
        data={expenseList.expenses}
        renderItem={({ item }) => (
          <View style={{ borderColor: "#FF0000", borderWidth: 2 }}>
            <Text>{item.date}</Text>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />

      <Button
        title="Get Expenses List"
        onPress={() => {
          dispatch(getAllExpenses());
        }}
      />

      <View style={{ borderColor: "#0000FF", borderWidth: 2 }}>
        <Text>{expenseDetail?.expense?.date}</Text>
        <Text>{expenseDetail?.expense?.type}</Text>
        <Text>{expenseDetail?.expense?.amount}</Text>
        <Text>{expenseDetail?.expense?.description}</Text>
      </View>

      <Button
        title="Get Expense Details"
        onPress={() => {
          dispatch(getExpenseDetails({ id: "2" }));
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

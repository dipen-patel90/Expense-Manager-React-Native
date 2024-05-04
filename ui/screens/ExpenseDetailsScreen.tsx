import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { NAV_SCREENS } from "../UIConstants";
import { RouteProp } from "@react-navigation/native";

interface ExpenseDetailsProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    NAV_SCREENS.EXPENSE_DETAILS
  >;
  route: RouteProp<RootStackParamList, NAV_SCREENS.EXPENSE_DETAILS>;
}

const ExpenseDetailsScreen = ({ navigation, route }: ExpenseDetailsProps) => {
  return (
    <View>
      <Text>ExpenseDetailsScreen</Text>
      <Button
        title="Go Back To Expense List"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ExpenseDetailsScreen;

const styles = StyleSheet.create({});

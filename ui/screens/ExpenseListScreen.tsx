import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NAV_SCREENS } from "../UIConstants";
import { RootRouteProps, RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type ExpensListProps = {
  navigation: StackNavigationProp<RootStackParamList, NAV_SCREENS.EXPENSE_LIST>;
  route: RouteProp<RootStackParamList, NAV_SCREENS.EXPENSE_LIST>;
};

const ExpensListScreen = ({ navigation, route }: ExpensListProps) => {
  const { username } = route.params;
  console.log(username);

  return (
    <View>
      <Text>Hi {route.params.username}</Text>
      <Button
        title="Go To Expense Details"
        onPress={() => {
          navigation.navigate(NAV_SCREENS.EXPENSE_DETAILS, {
            expenseId: "1234",
          });
        }}
      />
    </View>
  );
};

export default ExpensListScreen;

const styles = StyleSheet.create({});

import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NAV_SCREENS } from "../UIConstants";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { login } from "../../redux/SliceAuth";

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList, NAV_SCREENS.LOGIN>;
  route: RouteProp<RootStackParamList, NAV_SCREENS.LOGIN>;
}

const LoginScreen = ({ navigation, route }: LoginProps) => {
  const authData = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();

  // const { name, dob } = authData?.user;

  if (authData.isLoading) {
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
      <Text>{authData?.user?.dob}</Text>

      <Button
        title="Login"
        onPress={() => {
          dispatch(login());
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

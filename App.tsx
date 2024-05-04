import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NAV_SCREENS } from "./ui/UIConstants";
import LoginScreen from "./ui/screens/LoginScreen";
import ExpensListScreen from "./ui/screens/ExpenseListScreen";
import ExpenseDetailsScreen from "./ui/screens/ExpenseDetailsScreen";
import { RouteProp } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

export type RootStackParamList = {
  [NAV_SCREENS.LOGIN]: undefined;
  [NAV_SCREENS.EXPENSE_LIST]: { username: string };
  [NAV_SCREENS.EXPENSE_DETAILS]: { expenseId: string };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={NAV_SCREENS.LOGIN} component={LoginScreen} />
          <Stack.Screen
            name={NAV_SCREENS.EXPENSE_LIST}
            component={ExpensListScreen}
          />
          <Stack.Screen
            name={NAV_SCREENS.EXPENSE_DETAILS}
            component={ExpenseDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

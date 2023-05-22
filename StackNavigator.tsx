import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import Start from "./screens/onboarding/Start";
import StepZero from "./screens/onboarding/StepZero";
import StepOne from "./screens/onboarding/StepOne";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    // I will nest the stack navigators later
    // A separate stack for the onboarding
    <Stack.Navigator>
      <Stack.Screen
        name="StepOne"
        component={StepOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepZero"
        component={StepZero}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

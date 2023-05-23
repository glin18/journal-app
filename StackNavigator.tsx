import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import Start from "./screens/onboarding/Start";
import StepZero from "./screens/onboarding/StepZero";
import StepOne from "./screens/onboarding/StepOne";
import StepTwo from "./screens/onboarding/StepTwo";
import StepThree from "./screens/onboarding/StepThree";
import StepFour from "./screens/onboarding/StepFour";
import StepFive from "./screens/onboarding/StepFive";
import StepSix from "./screens/onboarding/StepSix";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    // I will nest the stack navigators later
    // A separate stack for the onboarding
    <Stack.Navigator>
      <Stack.Screen
        name="StepSix"
        component={StepSix}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepFive"
        component={StepFive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepFour"
        component={StepFour}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThree"
        component={StepThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTwo"
        component={StepTwo}
        options={{ headerShown: false }}
      />
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

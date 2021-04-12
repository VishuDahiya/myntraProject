import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
AuthStack;
MainStack;

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AuthStack()}
        {MainStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

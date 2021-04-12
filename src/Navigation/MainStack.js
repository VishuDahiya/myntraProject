import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constant/navigationStrings";
import BottomTabNavigator from "./TabRoutes";
import { ProductDetails } from "../Screen";
import Order from "../Screen/Order/Order";
import Cart from "../Screen/Cart/Cart";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Fragment>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={BottomTabNavigator}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDetails"
        component={ProductDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Order"
        component={Order}
      />
    </Fragment>
  );
}

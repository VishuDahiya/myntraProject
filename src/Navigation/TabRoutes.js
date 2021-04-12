import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screen/Home/Home";
import Explore from "../Screen/Explore/Explore";
import Categories from "../Screen/Categories/Categories";
import Profile from "../Screen/Profile/Profile";
Home;
Categories;
Explore;
Profile;

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ff3f6c"
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-menu" color="black" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color="black" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View, TextInput, Text } from "react-native";

import { useState } from "react";

import Screen from "./../components/Screen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import PrimaryButton from "../components/Button";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import ListingScreen from "../screens/ListingScreen";
import LoginScreen from "../screens/LoginScreen";

import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import ListSetting from "../components/ListSetting";

import Card from "../components/Card";
const avatarPlaceholder = require("./../assets/mosh.jpg");

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <GestureHandlerRootView>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}

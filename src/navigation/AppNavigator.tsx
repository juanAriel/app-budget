import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { useEffect } from "react";
import Welcome from "../components/pages/Welcome";
import Home from "../components/pages/Home";

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return <Welcome />;
};

const HomeScreen = () => {
  return <Home />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;

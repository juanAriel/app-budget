import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { useEffect } from "react";
import Welcome from "../components/pages/Welcome";
import Home from "../components/pages/Home";
import Sales from "../components/pages/Sales";
import Labour from "../components/pages/Labour";
import Budget from "../components/pages/Budget";
import ResultCard from "../components/pages/Result";

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
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="Labour" component={Labour} />
        <Stack.Screen name="Budget" component={Budget} />
        <Stack.Screen name="Result" component={ResultCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

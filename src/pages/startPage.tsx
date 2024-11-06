import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Contact from "./contact";
import Home from "./home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PageLayout from "../components/pageLayout";

const Tab = createBottomTabNavigator();

export default function StartPage() {
  return (
    <PageLayout title="Start">
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    </PageLayout>
  );
}

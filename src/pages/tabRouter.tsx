import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import Contact from "./contact";
import styled from "styled-components/native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/Feather";

const HomeWrapper = styled.SafeAreaView`
  flex: 1;
`;

const LogoText = styled.Text`
  color: ${Colors.text};
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-family: "Roboto_300Light";
`;

const NavBar = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 12px;
`;

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <HomeWrapper>
      <NavBar>
        <Icon name="menu" size={36} color={Colors.menuIcon} />
        <LogoText>Start</LogoText>
      </NavBar>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    </HomeWrapper>
  );
}

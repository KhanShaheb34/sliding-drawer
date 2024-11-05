import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import Contact from "./contact";
import styled from "styled-components/native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/Feather";
import { isDrawerOpenAtom } from "../atoms/drawer";
import { useAtom } from "jotai";
import { Touchable, TouchableOpacity } from "react-native";

const TabRouterWrapper = styled.SafeAreaView<{ isDrawerOpen: boolean }>`
  flex: 1;
  background-color: ${Colors.background};
  z-index: 1000;
  transform-origin: 100% 0;
  transform: ${({ isDrawerOpen }) =>
    isDrawerOpen
      ? "rotate(-10deg) translate(190px, 40px)"
      : "rotate(0deg) translate(0px, 0px)"};
  border-radius: ${({ isDrawerOpen }) => (isDrawerOpen ? "50px" : "0")};
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
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <TabRouterWrapper isDrawerOpen={isDrawerOpen}>
      <NavBar>
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="menu" size={36} color={Colors.menuIcon} />
        </TouchableOpacity>
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
    </TabRouterWrapper>
  );
}

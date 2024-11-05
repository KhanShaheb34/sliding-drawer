import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import Contact from "./contact";
import styled from "styled-components/native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/Feather";
import { isDrawerOpenAtom } from "../atoms/drawer";
import { useAtom } from "jotai";
import {
  Animated,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  useAnimatedValue,
} from "react-native";
import { useEffect } from "react";

const TabRouterWrapper = styled(Animated.View)<{
  isDrawerOpen: boolean;
}>`
  flex: 1;
  background-color: ${Colors.background};
  z-index: 1000;
  transform-origin: 100% 0;
  border-radius: 50px;
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

  const topOffset = useAnimatedValue(0);
  const leftOffset = useAnimatedValue(0);
  const rotate = useAnimatedValue(0);

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 10],
    outputRange: ["0deg", "-10deg"],
  });

  useEffect(() => {
    Animated.timing(rotate, {
      toValue: isDrawerOpen ? 10 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(topOffset, {
      toValue: isDrawerOpen ? 50 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(leftOffset, {
      toValue: isDrawerOpen ? 190 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen]);

  return (
    <TabRouterWrapper
      isDrawerOpen={isDrawerOpen}
      style={{
        transform: [
          { rotate: rotateInterpolation },
          { translateY: topOffset },
          { translateX: leftOffset },
        ],
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
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
      </SafeAreaView>
    </TabRouterWrapper>
  );
}

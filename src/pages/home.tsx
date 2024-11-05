import styled from "styled-components/native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

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

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeWrapper>
      <NavBar>
        <Icon name="menu" size={36} color={Colors.menuIcon} />
        <LogoText>Start</LogoText>
      </NavBar>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="screen1"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </HomeWrapper>
  );
}

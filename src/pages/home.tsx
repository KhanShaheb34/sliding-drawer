import styled from "styled-components/native";
import Colors from "../constants/colors";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";

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

export default function Home() {
  return (
    <SafeAreaView>
      <NavBar>
        <Icon name="menu" size={36} color={Colors.menuIcon} />
        <LogoText>Start</LogoText>
      </NavBar>
    </SafeAreaView>
  );
}

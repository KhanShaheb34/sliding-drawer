import { PropsWithChildren } from "react";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";
import Colors from "../constants/colors";
import { useAtom } from "jotai";
import { isDrawerOpenAtom } from "../atoms/drawer";

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

export default function PageLayout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavBar>
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="menu" size={36} color={Colors.menuIcon} />
        </TouchableOpacity>
        <LogoText>{title}</LogoText>
      </NavBar>
      {children}
    </SafeAreaView>
  );
}

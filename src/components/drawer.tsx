import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/colors";
import { Divider } from "./divider";

const DrawerWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.drawerBackground};
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  border-radius: 50px;
  padding: 30px;
`;

const DrawerLogo = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: bold;
  padding: 30px;
`;

const DrawerMenu = styled.View`
  flex-direction: column;
  gap: 20px;
  padding: 0px;
  width: 50%;
`;

const StyledMenuItem = styled.View<{ selected?: boolean }>`
  border-radius: 10px;
  padding: 10px 20px;
  ${({ selected }) =>
    selected &&
    `
      background-color: ${Colors.menuItemBackground};
    `}
`;

const MenuText = styled.Text<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? Colors.drawerText : "white")};
  font-size: 20px;
`;

const MenuItem = ({ text, selected }: { text: string; selected?: boolean }) => {
  return (
    <StyledMenuItem selected={selected}>
      <MenuText selected={selected}>{text}</MenuText>
    </StyledMenuItem>
  );
};

export const Drawer = () => {
  return (
    <DrawerWrapper>
      <DrawerLogo>Beka</DrawerLogo>
      <DrawerMenu>
        <MenuItem text="Start" selected />
        <MenuItem text="Your Cart" />
        <MenuItem text="Favorites" />
        <MenuItem text="Your Orders" />

        <Divider />

        <MenuItem text="Sign Out" />
      </DrawerMenu>
    </DrawerWrapper>
  );
};

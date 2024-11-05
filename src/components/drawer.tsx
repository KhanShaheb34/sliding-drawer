import styled from "styled-components/native";
import Colors from "../constants/colors";
import { Divider } from "./divider";
import { useAtom, useAtomValue } from "jotai";
import { isDrawerOpenAtom } from "../atoms/drawer";
import { Animated, useAnimatedValue } from "react-native";
import { useEffect } from "react";

const DrawerWrapper = styled(Animated.View)<{ isDrawerOpen: boolean }>`
  flex: 1;
  background-color: ${Colors.drawerBackground};
  position: absolute;
  top: 0;
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
  padding: 50px 30px;
`;

const DrawerMenu = styled.View`
  flex-direction: column;
  gap: 20px;
  padding: 0px;
  width: 50%;
`;

const StyledMenuItem = styled.TouchableOpacity<{ selected?: boolean }>`
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

const MenuItem = ({
  text,
  selected,
  onPress,
}: {
  text: string;
  selected?: boolean;
  onPress?: () => void;
}) => {
  return (
    <StyledMenuItem selected={selected} onPress={onPress}>
      <MenuText selected={selected}>{text}</MenuText>
    </StyledMenuItem>
  );
};

export const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);
  const topOffset = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(topOffset, {
      toValue: isDrawerOpen ? 50 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen]);

  return (
    <DrawerWrapper
      style={{ transform: [{ translateY: topOffset }] }}
      isDrawerOpen={isDrawerOpen}
    >
      <DrawerLogo>Beka</DrawerLogo>
      <DrawerMenu>
        <MenuItem
          text="Start"
          selected
          onPress={() => setIsDrawerOpen(false)}
        />
        <MenuItem text="Your Cart" />
        <MenuItem text="Favorites" />
        <MenuItem text="Your Orders" />

        <Divider />

        <MenuItem text="Sign Out" />
      </DrawerMenu>
    </DrawerWrapper>
  );
};

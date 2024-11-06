import styled from "styled-components/native";
import Colors from "../constants/colors";
import { Divider } from "./divider";
import { useAtom } from "jotai";
import { isDrawerOpenAtom, selectedPageAtom } from "../atoms/drawer";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DrawerWrapper = styled(Animated.View)<{ isDrawerOpen: boolean }>`
  flex: 1;
  background-color: ${Colors.drawerBackground};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
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
  const [selectedPage, setSelectedPage] = useAtom(selectedPageAtom);

  const safeAreaTop = useSafeAreaInsets().top;

  const topOffset = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  useEffect(() => {
    const config = {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    };

    topOffset.value = withTiming(isDrawerOpen ? safeAreaTop : 0, config);
    borderRadius.value = withTiming(isDrawerOpen ? 50 : 0, config);
  }, [isDrawerOpen]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: topOffset.value }],
    borderRadius: borderRadius.value,
  }));

  return (
    <DrawerWrapper style={animatedStyle} isDrawerOpen={isDrawerOpen}>
      <DrawerLogo>Beka</DrawerLogo>
      <DrawerMenu>
        <MenuItem
          text="Start"
          selected={selectedPage === "Start"}
          onPress={() => {
            setSelectedPage("Start");
            setIsDrawerOpen(false);
          }}
        />
        <MenuItem
          text="Your Cart"
          selected={selectedPage === "Cart"}
          onPress={() => {
            setSelectedPage("Cart");
            setIsDrawerOpen(false);
          }}
        />
        <MenuItem
          text="Favorites"
          selected={selectedPage === "Favorites"}
          onPress={() => {
            setSelectedPage("Favorites");
            setIsDrawerOpen(false);
          }}
        />
        <MenuItem
          text="Your Orders"
          selected={selectedPage === "Orders"}
          onPress={() => {
            setSelectedPage("Orders");
            setIsDrawerOpen(false);
          }}
        />

        <Divider />

        <MenuItem text="Sign Out" />
      </DrawerMenu>
    </DrawerWrapper>
  );
};

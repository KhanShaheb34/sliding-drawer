import styled from "styled-components/native";
import Colors from "../constants/colors";
import { isDrawerOpenAtom, selectedPageAtom } from "../atoms/drawer";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import StartPage from "./startPage";
import CartPage from "./cartPage";
import FavoritesPage from "./favoritesPage";
import OrdersPage from "./ordersPage";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Easing,
} from "react-native-reanimated";

const DrawerRouterWrapper = styled(Animated.View)<{
  isDrawerOpen: boolean;
}>`
  flex: 1;
  background-color: ${Colors.background};
  z-index: 1000;
  transform-origin: 100% 0;
`;

export default function DrawerRouter() {
  const isDrawerOpen = useAtomValue(isDrawerOpenAtom);
  const selectedPage = useAtomValue(selectedPageAtom);

  const topOffset = useSharedValue(0);
  const leftOffset = useSharedValue(0);
  const rotate = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const rotateInterpolation = interpolate(rotate.value, [0, 10], [0, -10]);

    return {
      transform: [
        { rotate: `${rotateInterpolation}deg` },
        { translateY: topOffset.value },
        { translateX: leftOffset.value },
      ],
      borderRadius: borderRadius.value,
    };
  });

  useEffect(() => {
    const config = {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    };

    rotate.value = withTiming(isDrawerOpen ? 10 : 0, config);
    topOffset.value = withTiming(isDrawerOpen ? 50 : 0, config);
    leftOffset.value = withTiming(isDrawerOpen ? 190 : 0, config);
    borderRadius.value = withTiming(isDrawerOpen ? 50 : 0, config);
  }, [isDrawerOpen]);

  return (
    <DrawerRouterWrapper isDrawerOpen={isDrawerOpen} style={animatedStyle}>
      {selectedPage === "Start" && <StartPage />}
      {selectedPage === "Cart" && <CartPage />}
      {selectedPage === "Favorites" && <FavoritesPage />}
      {selectedPage === "Orders" && <OrdersPage />}
    </DrawerRouterWrapper>
  );
}

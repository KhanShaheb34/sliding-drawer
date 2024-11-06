import styled from "styled-components/native";
import Colors from "../constants/colors";
import { isDrawerOpenAtom, selectedPageAtom } from "../atoms/drawer";
import { useAtomValue } from "jotai";
import { Animated, useAnimatedValue } from "react-native";
import { useEffect } from "react";
import StartPage from "./startPage";
import CartPage from "./cartPage";
import FavoritesPage from "./favoritesPage";
import OrdersPage from "./ordersPage";

const DrawerRouterWrapper = styled(Animated.View)<{
  isDrawerOpen: boolean;
}>`
  flex: 1;
  background-color: ${Colors.background};
  z-index: 1000;
  transform-origin: 100% 0;
  border-radius: 50px;
`;

export default function DrawerRouter() {
  const isDrawerOpen = useAtomValue(isDrawerOpenAtom);
  const selectedPage = useAtomValue(selectedPageAtom);

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
    <DrawerRouterWrapper
      isDrawerOpen={isDrawerOpen}
      style={{
        transform: [
          { rotate: rotateInterpolation },
          { translateY: topOffset },
          { translateX: leftOffset },
        ],
      }}
    >
      {selectedPage === "Start" && <StartPage />}
      {selectedPage === "Cart" && <CartPage />}
      {selectedPage === "Favorites" && <FavoritesPage />}
      {selectedPage === "Orders" && <OrdersPage />}
    </DrawerRouterWrapper>
  );
}

import styled from "styled-components/native";
import Colors from "./src/constants/colors";
import { Drawer } from "./src/components/drawer";
import DrawerRouter from "./src/pages/drawerRouter";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export default function App() {
  return (
    <AppWrapper>
      <SafeAreaProvider>
        <Drawer />
        <DrawerRouter />
      </SafeAreaProvider>
    </AppWrapper>
  );
}

import styled from "styled-components/native";
import Colors from "./src/constants/colors";
import { Drawer } from "./src/components/drawer";
import DrawerRouter from "./src/pages/drawerRouter";

const AppWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export default function App() {
  return (
    <AppWrapper>
      <Drawer />
      <DrawerRouter />
    </AppWrapper>
  );
}

import styled from "styled-components/native";
import Colors from "./src/constants/colors";
import TabRouter from "./src/pages/tabRouter";
import { Drawer } from "./src/components/drawer";

const AppWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export default function App() {
  return (
    <AppWrapper>
      <Drawer />
      <TabRouter />
    </AppWrapper>
  );
}

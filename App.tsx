import styled from "styled-components/native";
import Home from "./src/pages/home";
import Colors from "./src/constants/colors";

const AppWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export default function App() {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

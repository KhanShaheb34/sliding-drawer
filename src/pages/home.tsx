import styled from "styled-components/native";
import Colors from "../constants/colors";
import { SafeAreaView } from "react-native";

const HomeWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

const StyledText = styled.Text`
  color: ${Colors.text};
`;

export default function Home() {
  return (
    <HomeWrapper>
      <SafeAreaView>
        <StyledText>Hello world</StyledText>
      </SafeAreaView>
    </HomeWrapper>
  );
}

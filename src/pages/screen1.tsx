import { Button, Text, View } from "react-native";
import { CenteredView } from "../components/views";

export default function Screen1({ navigation }: { navigation: any }) {
  return (
    <CenteredView>
      <Text>Screen 1</Text>

      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate("screen2")}
      />
    </CenteredView>
  );
}

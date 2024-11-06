import { Button, Text, View } from "react-native";
import { CenteredView } from "../components/views";

export default function Screen2({ navigation }: { navigation: any }) {
  return (
    <CenteredView>
      <Text>Screen 2</Text>

      <Button
        title="Go to screen 1"
        onPress={() => navigation.navigate("screen1")}
      />
    </CenteredView>
  );
}

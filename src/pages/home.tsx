import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./screen1";
import Screen2 from "./screen2";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="screen1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="screen1" component={Screen1} />
      <Stack.Screen name="screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

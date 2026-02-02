import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";
import EstablishmentScreen from "../screens/EstablishmentScreen";
import UseCouponsScreen from "../screens/UsarCuponsScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="Establishment" component={EstablishmentScreen} />
      <Stack.Screen name="UseCoupons" component={UseCouponsScreen} />
    </Stack.Navigator>
  );
}

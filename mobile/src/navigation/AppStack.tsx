import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";
import EstablishmentScreen from "../screens/EstablishmentScreen";
import ValidateCouponsScreen from "../screens/ValidateCouponsScreen";
import AdminHomeScreen from "../screens/admin/AdminHomeScreen";
import AdminEstablishmentsScreen from "../screens/admin/AdminEstablishmentsScreen";
import AdminCouponsScreen from "../screens/admin/AdminCouponsScreen";
import AdminValidateScreen from "../screens/admin/AdminValidateScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="Establishment" component={EstablishmentScreen} />
      <Stack.Screen name="ValidateCoupons" component={ValidateCouponsScreen} />
      
      {/* Admin Nav */}
      <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
      <Stack.Screen name="AdminEstablishments" component={AdminEstablishmentsScreen} />
      <Stack.Screen name="AdminCoupons" component={AdminCouponsScreen} />
      <Stack.Screen name="AdminValidate" component={AdminValidateScreen} />
    </Stack.Navigator>
  );
}
